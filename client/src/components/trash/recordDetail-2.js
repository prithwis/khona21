import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
 
const Record = (props) => (
 <tr>
   <td>{props.record.pid.name}</td>
   <td>{props.record.pid.cID}</td>
   <td>{props.record.pid.ck}</td>
   
 </tr>
);
 
export default function RecordDetails() {
 const params = useParams();
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
	 //const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
	 const message2 = 'here'
	 window.alert(message2);
	 window.alert(records.pid.name);
	 window.alert(records.pid.ck);
     setRecords(records);
	 
   }
 
   getRecords();
 
   return;
 } , [records.length]);
 
 window.alert('here2');
 
 // This method will map out the records on the table
 function recordDetails() {
   return records.map((record) => {
     return (
       <Record
         record={record}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record Details</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>cID</th>
           <th>ck</th>
           
         </tr>
       </thead>
       <tbody>{recordDetails()}</tbody>
     </table>
   </div>
 );
}