import React from "react"; 
import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
//import GetAllRecords from "./components/GetAllRecords";           // Should not be used for main database
import GetRecordDetails from "./components/GetRecordDetails";
import GetChartData from "./components/GetChartData";
import SetFilter from "./components/SetFilter";
import ShowBlog from "./components/ShowBlog";
import GetFilteredRecords from "./components/GetFilteredRecords";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<SetFilter />} />
	   <Route path="/getrecorddetails/:id" element={<GetRecordDetails />} />
	   <Route path="/getchartdata/:id" element={<GetChartData />} />
	   <Route path="/setfilter" element={<SetFilter />} />
	   <Route path="/getfilteredrecords/:kS" element={<GetFilteredRecords />} />
	   <Route path="/showblog" element={<ShowBlog />} />
     </Routes>
   </div>
 );
};
 
export default App;