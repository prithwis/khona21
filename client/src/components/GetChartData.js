import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
 
 
export default function GetChartData() {
 const params = useParams();
 const [dbdata, setData] = useState('empty52');
 
 useEffect(() => {
   async function getData() {
   const response = await fetch(`http://localhost:5000/getchartdata/${params.id.toString()}`);
   //const response = await fetch(`http://khona21.cleverapps.io/getchartdata/${params.id.toString()}`);
    
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
	 
	 const dbdata = await response.json();
     setData(dbdata);
   }
   getData();
   return;
   },[params.id]);
 //},[dbdata]);
 
 function showChart() {
   let name = 'name not known'
   let lagna = 'lagna not known'
   let marker = 'data from showChart : ';
   let pid = dbdata.pid;
   let spid = JSON.stringify(pid);
   let GLon = dbdata.GLon;
   let sGLon = JSON.stringify(GLon)
   window.alert('spid :'+spid+'  sGLon : '+sGLon);
   if (typeof spid === 'undefined'){
	   window.alert('spid : undefined')
   } else {
	   window.alert('spid : '+spid);
	   name = dbdata.pid.name;
	   lagna = dbdata.GLon.La
   }
   return (
           <sc>
           <p>{marker}</p>
           <p>{spid}</p>
		   <p>{name}</p>
		   <p>{sGLon}</p>
		   <p>{lagna}</p>
		   </sc>
           )
 }
 
 return (
   <div>
     <h3>Chart Positions</h3>     
	 <p>{JSON.stringify(dbdata)}</p>
	 <hr></hr>
	 {showChart()}
	 
   </div>
 );
 
}