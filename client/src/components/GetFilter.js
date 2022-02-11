import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, Navigate } from "react-router-dom";
 
export default function GetFilter() {
 const params = useParams();
 
 
 const [name, setName] = useState('{"exaltG.Ju": {"$eq": true}}'); // '' is the initial state value
 
 /*
 const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `data is ${name}`;
	window.alert(message);
	window.open(`/getfilteredrecords/${name}`);

  };
 
 
 
 return (
   <div>
   <h3>New Filter</h3>   
   <form onSubmit={handleSubmit}>
      <label>Enter filter  JSON format:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>  
   </div>
 );
 
}