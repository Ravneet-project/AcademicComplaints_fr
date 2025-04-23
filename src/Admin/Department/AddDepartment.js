import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ApiServices from "../../Components/Services/ApiServices"
export default function AddDepartment(){
    const[departmentName, setDepartmentName]=useState("")
    const[description, setDescription]=useState("")
    const nav=useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        let data={
            departmentName:departmentName,
            description:description
        }
        ApiServices.addDepartment(data)
        .then((res)=>{
            if(!res.data.message){
                setDepartmentName("")
                setDescription("")
            }else{
                toast.success(res.data.message)
            }

        }).catch((err)=>{
            toast.err(err.message)
        })
      


        toast.success("Department Added");
        nav("/admin/department")
    }

    return(
        <>
  <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{
                    backgroundImage: 'url("/assets/images/bg_1.jpg")',
                    paddingTop: "100px", // Adjust this value as needed
                }}
            >
                <div className="container">
    {/* <div className={!load ? "" : "d-none"}> */}
    <div className="row align-items-end justify-content-center text-center">
        <div className="col-lg-7">
            <h2 className="mb-0">Department</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    </div>
</div>
</div>
<div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <div className="card shadow-lg bg-light w-50 rounded-3">
        <div className="card-body">
            <h1 className="mb-4 text-center text-primary">Add Department</h1>
            <form onSubmit={handleForm} className="p-4">
                {/* Department Input */}
                <div className="mb-4">
                    <label className="form-label text-dark fs-5">
                        <i className="fas fa-building"></i> Department
                    </label>
                    <input
                        type="text"
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                        className="form-control form-control-lg border-primary focus-ring-primary"
                        placeholder="Enter department name"
                   
                    />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label className="form-label text-dark fs-5">
                        <i className="fas fa-comment-dots"></i> Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control form-control-lg border-primary focus-ring-primary"
                        placeholder="Enter department description"
                        rows="3"
                        
                    />
                </div>

                {/* Add Department Button */}
                <button className="btn btn-primary w-100 hover-effect rounded-pill shadow-sm py-3 fs-5">
                    <i className="fas fa-plus-circle"></i> Add Department
                </button>
            </form>
        </div>
    </div>
</div>


               </>   
    )
}