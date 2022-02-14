import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
 
const Record = (props) => (
 <tr>
   <td>{props.record.pid.name}</td>
   <td>{props.record.pid.cID}</td>
   <td>

	 <Link className="btn btn-link" to={`/getrecorddetails/${props.record.pid.cID}`}>Detail</Link> |
     <Link className="btn btn-link" to={`/getchartdata/${props.record.pid.cID}`}>Chart</Link>
     
   </td>
 </tr>
);
 
export default function GetFilteredRecords() {
 const params = useParams();
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/getfilteredrecords/${params.kS.toString()}`);
	 //const response = await fetch(`http://khona21.cleverapps.io/getfilteredrecords/${params.kS.toString()}`);
 
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
 //}, []);
 }, [records.length]);
 
 
 
 // This method will map out the records on the table
 function recordList() {
   //window.alert('recordList');
   return records.map((record) => {
     return (
	 <>
       <Record
         record={record}
       />
	  </>
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Filtered List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>cID</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}