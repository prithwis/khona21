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
 
 // Text positions for a Bengal style Horoscope chart
 
 const Tx = [
 { text: 'dummy', x: 225, y: 225 },
 { text: '♈️', x: 160, y: 70 },
 { text: '♉️', x: 30, y: 20 },
 { text: '♊️', x: 20, y: 130 },
 { text: '♋️', x: 20, y: 225 },
 { text: '♌️', x: 20, y: 305 },
 { text: '♍️', x: 30, y: 420 },
 { text: '♎️', x: 160, y: 360 },
 { text: '♏️', x: 302, y: 420 },
 { text: '♐️', x: 312, y: 305 },
 { text: '♑️', x: 310, y: 225 },
 { text: '♒️', x: 312, y: 130 },
 { text: '♓️', x: 302, y: 20 }
 ]
 
 let pid = null
 let GLon = null
 let GRet = null
 
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
   //const response = await fetch(`http://localhost:5000/getchartdata/${params.id.toString()}`);
   const response = await fetch(`http://khona21.cleverapps.io/getchartdata/${params.id.toString()}`);
    
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
	   GRet = dbdata.GRet
	   for ( let i = 1; i < Tx.length; i++) 
		{
		  for (const[key, value] of Object.entries(GLon)) {
		   if (Math.floor(value/30)+1 === i )  // Converting Long to Rashi
		   {
		   Tx[i].text = Tx[i].text+' '+key
		      
		   if (GRet[key] === true) {
			   Tx[i].text = Tx[i].text+'/R'
		   }
		   
		   }
		  }
		}
		
	   Tx[0].text = name //+':'+Lalong.toString()
	   
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
	  
	// https://www.cluemediator.com/draw-a-line-on-canvas-using-react
	
	drawLine({ x: 150, y: 20, x1: 150, y1: 430 });
	drawLine({ x: 300, y: 20, x1: 300, y1: 430 });
	
	drawLine({ x: 20, y: 150, x1: 430, y1: 150 });
	drawLine({ x: 20, y: 300, x1: 430, y1: 300 });
	
	drawLine({ x: 300, y: 150, x1: 430, y1: 20 });
	drawLine({ x: 150, y: 150, x1: 20, y1: 20 });
	drawLine({ x: 150, y: 300, x1: 20, y1: 430 });
	drawLine({ x: 300, y: 300, x1: 430, y1: 430 });
	
	// https://www.cluemediator.com/write-text-on-canvas-using-react
	
	//let nameStyle = { fontSize: 30, color: 'green', textAlign: 'center' };
	let nameStyle ={ fontSize: 18, fontFamily: 'cursive', color: 'red', textAlign: 'center' }
	writeText(Tx[0],nameStyle);
	for (let h = 1; h < 13 ; h++)
	{writeText(Tx[h]);}
    
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
     <h3>Chart</h3>
	 <canvas ref={canvas}></canvas>
	 <hr></hr>
	 
	 <p>{JSON.stringify(dbdata)}</p>
   </div>
 );
 
}