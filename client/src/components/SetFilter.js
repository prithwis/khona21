import React, { useState } from "react";
//import { useParams } from "react-router";
//import { Link, Navigate } from "react-router-dom";
import p21logo from '../images/p21logo-002-1.png'; // with import
 
export default function SetFilter() {
// const params = useParams();
 
 
 //const [name, setName] = useState('{"exaltG.Ju": {"$eq": true}}'); // '' is the initial state value
 const filter1 = {"exaltG.Ju": {"$eq": true}}
 /*
 const filter5 = {"$and":
                    [
                        {"exaltG.Ju": {"$eq": true}},               //# Exalted Jupiter
                        {"GAspectedBy2.La" : {"$in": ["Sa"]}} ,     //# La aspected by Sa       
                        {"GConjunctsG2.Su" : {"$in": ["Me"]}},      //# Su conjunct Me 
                        {"GrahaBhava.Mo" : {"$eq": 1}} ,            //# Mo in First House
                        {"LordBhav.4" : {"$eq": 5}}                 //# 4th Lord in 5th House

                    ]
}
*/
/*
const filter4 = {"$and":
                    [
                        {"exaltG.Ju": {"$eq": true}},               //# Exalted Jupiter
                        {"GAspectedBy2.La" : {"$in": ["Sa"]}} ,     //# La aspected by Sa       
                        {"GConjunctsG2.Su" : {"$in": ["Me"]}},      //# Su conjunct Me 
                        {"GrahaBhava.Mo" : {"$eq": 1}}             //# Mo in First House
                        
                    ]
}
*/
const [filter, setFilter] = useState(JSON.stringify(filter1));
 
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `data is ${filter}`;
	window.alert(message);
	window.open(`/getfilteredrecords/${filter}`);

  };
 
 
 
 return (
   <div>
	   <table>
		   <tr>
			<td>
			C<img src={p21logo} alt="ParasharLogo"></img>  
			</td>
			<td> 
				<form onSubmit={handleSubmit}> 
				<p>Set Filter :</p> 
				<textarea type="textarea" value={filter} onChange={(e) => setFilter(e.target.value)} 
				rows={5} cols={60} /> 
				<br></br> 
				<input type="submit" /> 
				</form> 
				</td>
		  </tr>
	  </table>
   </div>
 );
 
}