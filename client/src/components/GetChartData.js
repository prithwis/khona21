import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
 
export default function GetChartData() {
 const params = useParams();
 const [dbdata, setData] = useState('empty52');
 
 useEffect(() => {
   async function getData() {
   const response = await fetch(`http://localhost:5000/getchartdata/${params.id.toString()}`);
    
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
	 
	 const dbdata = await response.json();
	 //dbdata = response.json();
     setData(dbdata);
	 //setData('fake data')
   }
   getData();
   return;
 },[dbdata.length]);
 
 return (
   <div>
     <h3>Chart Positions</h3>     
	 <p>{JSON.stringify(dbdata)}</p>
   </div>
 );
 
}