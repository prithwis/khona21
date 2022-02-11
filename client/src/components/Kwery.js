import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Redirect } from 'react-router-dom';
 
export default function Kwery() {
 const params = useParams();
 
 
 const [name, setName] = useState("default"); // '' is the initial state value
 
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
	window.alert(message)
    return(
        <Redirect to="/filter"/>
    )
  };
 
 
 
 return (
   <div>
   <h3>New Filter</h3>   
   <form onSubmit={handleSubmit}>
      <label>Enter filter in JSON format:
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