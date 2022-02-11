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
 
export default function details51() {
 const params = useParams();
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record1/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
       />
     );
   });
 }
 
 
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>cID</th>
           <th>ck</th>
          
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
 
}