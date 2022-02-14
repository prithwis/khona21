import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import './cindex.css';
 

 
export default function GetChartData() {
 
 const canvas = useRef();
 let ctx = null;
 
 const params = useParams();
 const [dbdata, setData] = useState('empty52');
 
 let name = null
 let Lalong = null
 //const Tid = { text: 'dummy', x: 180, y: 100 }
 //const T1 = { text: 'Mesh', x: 180, y: 200 }
 const Tx = [
 { text: 'dummy', x: 180, y: 225 },
 { text: '01:', x: 160, y: 70 },
 { text: '02:', x: 30, y: 20 },
 { text: '03:', x: 20, y: 130 },
 { text: '04:', x: 20, y: 225 },
 { text: '05:', x: 20, y: 305 },
 { text: '06:', x: 30, y: 420 },
 { text: '07:', x: 160, y: 360 },
 { text: '08:', x: 302, y: 420 },
 { text: '09:', x: 312, y: 305 },
 { text: '10:', x: 310, y: 225 },
 { text: '11:', x: 312, y: 130 },
 { text: '12:', x: 302, y: 20 }
 ]
 
 let pid = null
 let GLon = null
 
 useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);
 
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
	 
	 let pid = dbdata.pid;
	 let spid = JSON.stringify(pid);
	 if (typeof spid !== 'undefined'){
	   name = dbdata.pid.name;
	   Lalong = dbdata.GLon.La
	   GLon = dbdata.GLon
	   
	   for ( let i = 1; i < Tx.length; i++) 
		{
		  for (const[key, value] of Object.entries(GLon)) {
		   if (Math.floor(value/30)+1 === i )  // Converting Long to Rashi
		   {
		   Tx[i].text = Tx[i].text+'-'+key
		   }
		  }
		}
		
	   Tx[0].text = name+':'+Lalong.toString()
	   
	   }
    else {
	   //window.alert('undefined')
   } 
	 
	 drawChart()
	 
   }
   
   getData();
   
   return;
   },[dbdata.length]);
  
  const drawChart =() => {
	  
	
	  
	drawLine({ x: 150, y: 20, x1: 150, y1: 430 });
	drawLine({ x: 300, y: 20, x1: 300, y1: 430 });
	
	drawLine({ x: 20, y: 150, x1: 430, y1: 150 });
	drawLine({ x: 20, y: 300, x1: 430, y1: 300 });
	
	drawLine({ x: 300, y: 150, x1: 430, y1: 20 });
	drawLine({ x: 150, y: 150, x1: 20, y1: 20 });
	drawLine({ x: 150, y: 300, x1: 20, y1: 430 });
	drawLine({ x: 300, y: 300, x1: 430, y1: 430 });
	
	
	
	writeText(Tx[0]);
	writeText(Tx[1]);
	writeText(Tx[2]);
	writeText(Tx[3]);
	writeText(Tx[4]);
	writeText(Tx[5]);
	writeText(Tx[6]);
	writeText(Tx[7]);
	writeText(Tx[8]);
	writeText(Tx[9]);
	writeText(Tx[10]);
	writeText(Tx[11]);
	writeText(Tx[12]);
	window.alert('image drawn')
	  
  }
	  
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = 'black', width = 1 } = style;
 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }
  
  // write a text
  const writeText = (info, style = {}) => {
  const { text, x, y } = info;
  const { fontSize = 14, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
 
  ctx.beginPath();
  ctx.font = fontSize + 'px ' + fontFamily;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.stroke();
}
  
 return (
   <div>
     <h3>Chart Positions</h3>     
	 <p>{JSON.stringify(dbdata)}</p>
	 <hr></hr>
	 <canvas ref={canvas}></canvas>
   </div>
 );
 
}