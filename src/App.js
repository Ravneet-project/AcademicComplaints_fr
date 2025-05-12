import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Master from "./Layouts/Master";
import About from "./Components/Pages/About";

import Contact from "./Components/Pages/Contact";

import NewsSingle from "./Components/Pages/NewsSingle";
import Home from "./Components/Pages/Home";
import Login from "./Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Auth/Register";
import AdminMaster from "./Layouts/AdminMaster";
import Dashboard  from "./Admin/Dashboard/Dashboard";
import Department from "./Admin/Department/Department"
import AddDepartment from "./Admin/Department/AddDepartment";
import ManageDepartment from "./Admin/Department/ManageDepartment";
// import AddStudent from "./Admin/Student/AddStudent";
import ManageStudent from "./Admin/Student/ManageStudent";
import AddHod from "./Admin/Hod/AddHod";
import ManageHOD from "./Admin/Hod/ManageHod";
import ManageComplaints from "./Admin/Complaints/ManageComplaints";
import StudentMaster from "./Layouts/StudentMaster";
import ViewDepartment from "./Student/Department/ViewDepartment";
import ViewHOD from "./Student/Hod/ViewHod";
import AddComplaint from "./Student/Complaints/AddComplaint";
import HodMaster from "./Layouts/HodMaster";
import Assigncomplaints from "./Hod/AssignComplaints";
import EditDepartment from "./Admin/Department/EditDepartment";
import EditHod from"./Admin/Hod/EditHod";
import EditStudent from "./Admin/Student/EditStudent"
import AddEnquiry from "./Student/Enquiry/AddEnquiry";
import ManageEnquiry from "./Admin/Enquiry/ManageEnquiry";
import  ChangePassword from "./Auth/ChangePassword";
import StudentHome from "./Student/HodHome";
import HodHome from "./Student/HodHome";

// import Status from "./Hod/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/contact" element={<Contact />} />
         
          <Route path="/news_single" element={<NewsSingle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
        </Route>
        <Route path="/admin" element={<AdminMaster />}>

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/department" element={<Department />} />
          <Route path="/admin/add_department" element={<AddDepartment />} />
          <Route path="/admin/manage" element={<ManageDepartment />} />
          <Route path="/admin/editDept/:id" element={<EditDepartment/>}/>
          <Route path="/admin/manage_student" element={<ManageStudent />} />
          <Route path="/admin/manage_complaints" element={<ManageComplaints/>}/>
          <Route path="/admin/add_Hod" element={<AddHod />} />
          <Route path="/admin/manage_Hod" element={<ManageHOD />} />
          <Route path="/admin/editHod/:userId" element={<EditHod />} />
          <Route path="/admin/editStudent/:userId" element={<EditStudent />} />
          <Route path="/admin/manageEnquiry" element={<ManageEnquiry/>}/>
          
        </Route>
        
        <Route path="/student" element={<StudentMaster />}>
          <Route path="/student" element={<StudentHome />} />
          <Route path="/student/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/student/viewdepartment" element={<ViewDepartment />} />
          <Route path="/student/viewhod" element={<ViewHOD />} />
          <Route path="/student/addcomplaints" element={<AddComplaint />} />
          <Route path="/student/Enquiry" element={<AddEnquiry/>}/>
        </Route>
      
        <Route path="/hod" element={<HodMaster />} >
        <Route path="/hod" element={<HodHome/>}/>
       
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/hod/assignedcomplaints" element={<Assigncomplaints />} />
        
        {/* <Route path="/hod/status" element={<Status/>} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
