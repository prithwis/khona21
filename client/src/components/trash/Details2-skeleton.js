import React from "react";
import { useParams, useNavigate } from "react-router";

 
export default function Details2() {
 const params = useParams();
  
 let z = fetch(`http://localhost:5000/record/${params.id.toString()}`).then((response) => {
      return response.json();
    })
 let cname = z.pid.name
 return (
   <div>
     <h3>Details2</h3>
     {params.id.toString()}
	 
   </div>
 );
}