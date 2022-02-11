import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
 

export default function RecordDetails() {
 const params = useParams();
 const [record1, setRecords] = useState([]);
 window.alert('here1');
 // This method fetches the records from the database.
 useEffect(() => {
   async function get1Record() {
	 //const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record1 = await response.json();
	 const message2 = 'here'
	 window.alert(message2);
	 window.alert(record1.pid.name);
	 window.alert(record1.pid.ck);
     setRecords(record1);
	 
   }
 
   get1Record();
 
   return;
 } , [record1.length]);
 
 window.alert('here2');
 
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record Details</h3>
     
	 {record1.pid.name}
	 {record1.pid.ck}
	 {record1.pid.cID}
   </div>
 );
}