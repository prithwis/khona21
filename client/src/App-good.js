import React from "react"; 
import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
//import Edit from "./components/edit";
//import View from "./components/view";
import RecordList1 from "./components/recordDetail";
import Detail51 from "./components/Detail51";
import Detail52 from "./components/Detail52";
import Detail53 from "./components/Detail53";
//import Details2 from "./components/Details2";
//import details51 from "./components/details51";
//import Create from "./components/create";
//import App2 from "./components/fetchApp";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
	   <Route path="/singlerecord/:id" element={<RecordList1 />} />
	   <Route path="/singlerecord51/:id" element={<Detail51 />} />
	   <Route path="/singlerecord52/:id" element={<Detail52 />} />
	   <Route path="/pos53/:id" element={<Detail53 />} />
     </Routes>
   </div>
 );
};
 
export default App;