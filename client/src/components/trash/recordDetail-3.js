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
 window.alert('2');
 // This method fetches one records from the database.
 window.alert('2.1');
 useEffect(() => {
	window.alert('3');
    async function getRecord() {
	
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
	 
     const records = await response.json();
	 window.alert('one');
     setRecords(records);
	 
   }
 
   getRecord();
 
   return;
 } , [records.length]);
 window.alert('4');
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record Details</h3>
     <p>
	 <b>name</b>  {records.pid.name}<br />
	 chek  {records.pid.ck} <br />
	 chartID  {records.pid.cID}<br />
	 </p>
   </div>
 );
}