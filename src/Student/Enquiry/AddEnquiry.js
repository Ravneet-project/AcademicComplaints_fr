
import { useNavigate } from "react-router-dom";
import ApiServices from "../../Components/Services/ApiServices"
import { toast } from "react-toastify";
import { useState } from "react";
export default function AddEnquiry() {
    const[name, setName]=useState("");
    const[subject, setSubject]=useState("");
    const[message,setMessage]=useState("");
    
    
     const nav= useNavigate()

 const handleForm=(e)=>{
    e.preventDefault();
    let data={
       
        name:name,
        subject:subject,
        message:message,
    }
    
        ApiServices.addEnquiry(data)
        .then((res)=>{
            if(!res.data.message){
                setName("")
                setSubject("")
                setMessage("")
            }else{
                toast.success(res.data.message)
            }

        }).catch((err)=>{
            toast.err(err.message)
        })
      nav("/student")
     }
        

    return (
        <>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Any Enquiry</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="text-center mb-4">You Can Say!</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Submit Your Enquiry</h4>
                            </div>
                            <div className="card-body">
                            <form onSubmit={handleForm} className="p-4">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter your name"
                                            
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter subject"
                                            
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="form-control"
                                            rows="4"
                                            placeholder="Write your message here"
                                            
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Submit Enquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
