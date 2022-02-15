import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
 
export default function GetRecordDetails() {
 const params = useParams();
 const [dbdata, setData] = useState('empty52');
 
 useEffect(() => {
   async function getData() {
   //const response = await fetch(`http://localhost:5000/getrecorddetails/${params.id.toString()}`);
   const response = await fetch(`http://khona21.cleverapps.io/getrecorddetails/${params.id.toString()}`);
    
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
	 
	 const dbdata = await response.json();
	 //dbdata = response.json();
	 //window.alert(JSON.stringify(dbdata));
	 window.alert('getdata')
     setData(dbdata);
   }
   getData();
   return;
 },[dbdata.length]);
// },[dbdata, params]);
 
 return (
   <div>
     <h3>Detail Information</h3>     
	 <p>{JSON.stringify(dbdata)}</p>
   </div>
 );
 
}