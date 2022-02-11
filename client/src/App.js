import React from "react"; 
import { Route, Routes } from "react-router-dom";
 

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Detail52 from "./components/Detail52";
import Chart from "./components/Chart";
import Kwery from "./components/Kwery";
import FilterList from "./components/filterList";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
	   <Route path="/detail/:id" element={<Detail52 />} />
	   <Route path="/chartdata/:id" element={<Chart />} />
	   <Route path="/kwery" element={<Kwery />} />
	   <Route path="/filter" element={<FilterList />} />
     </Routes>
   </div>
 );
};
 
export default App;