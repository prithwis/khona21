import React from "react"; 
import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
import GetAllRecords from "./components/GetAllRecords";
import GetRecordDetails from "./components/GetRecordDetails";
import GetChartData from "./components/GetChartData";
import GetFilter from "./components/GetFilter";
import GetFilteredRecords from "./components/GetFilteredRecords";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<GetAllRecords />} />
	   <Route path="/getrecorddetails/:id" element={<GetRecordDetails />} />
	   <Route path="/getchartdata/:id" element={<GetChartData />} />
	   <Route path="/getfilter" element={<GetFilter />} />
	   <Route path="/getfilteredrecords/:kS" element={<GetFilteredRecords />} />
     </Routes>
   </div>
 );
};
 
export default App;