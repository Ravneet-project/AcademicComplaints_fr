import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../Components/Services/ApiServices";

export default function EditHod() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const[course,setCourse]=useState("")
    const [rollno, setRollNo]=useState("");
    const { userId } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        
       

        // Fetch single student details
        ApiServices.getSingleStudent({ userId: userId })
            .then((res) => {
                if (res.data.success) {
                    setName(res.data.data.userId.name);
                   setCourse(res.data.data.course);
                   setRollNo(res.data.data.rollNo);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [userId]);

   

    const handleForm = (e) => {
        e.preventDefault();
        const data={
        userId:userId,
        name:name,
        course:course,
        rollno:rollno
        }

        ApiServices.update(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    nav("/admin/manage_student");
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <>
        <div>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Edit Student</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <center>
                    <h1 className="mb-4">Edit Student</h1>
                    <div
                        className="card shadow-lg bg-light w-50 mt-4"
                        style={{ borderRadius: "10px" }}
                    >
                        <div className="card-body">
                            
                            
                            <form onSubmit={handleForm} className="p-4">
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-user"></i> Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-user"></i> Course
                                    </label>
                                    <input
                                        type="text"
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-user"></i> Rollno
                                    </label>
                                    <input
                                        type="text"
                                        value={rollno}
                                        onChange={(e) => setRollNo(e.target.value)}
                                        className="form-control"
                                       
                                    />
                                </div>
                                  <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    style={{
                                        transition: "transform 0.2s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.transform = "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.transform = "scale(1)")
                                    }
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        </div>
        </>
    );
}
