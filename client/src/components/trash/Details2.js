import React, { useEffect, useState } from "react";
//import React from "react";
import { useParams, useNavigate } from "react-router";

 
export default function Details2() {
const params = useParams();
  
const [data, setData] = useState(null);

const getData = async () => {
    const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`)
    return await response.json()
}

useEffect(() => {
    setData(getData())
	const cname = data.pid.name
}, [])

    
 return (
   <div>
     <h3>Details2</h3>
     {params.id.toString()}
	
   </div>
 );
}