import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
 
const Record = (props) => (
 <p>
   <h4>{props.record.pid.name}</h4>
   <h4>{props.record.pid.cID}</h4>
   <h4>{props.record.pid.ck}</h4>
   
 </p>
);
 
export default function Detail51() {
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
     <h3>Detail 51</h3>
     
       <p>{recordList()}</p>
     
   </div>
 );
 
}