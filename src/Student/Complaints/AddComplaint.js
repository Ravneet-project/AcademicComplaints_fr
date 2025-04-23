import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Required for image upload
import ApiServices from "../../Components/Services/ApiServices";

export default function AddComplaint() {
    const [hod, setHod] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [subject, setSubject] = useState("");
    const [profile, setProfile] = useState(null);
    const [complaintDesc, setComplaintDesc] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [departmentId, setDepartmentId] = useState("");
    const [studentId, setStudentId] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        ApiServices.allDepartment()
            .then((res) => {
                if (res.data.success) {
                    setDepartments(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);

    useEffect(() => {
        fetchSingleStudent();
    }, []);

    const fetchSingleStudent = () => {
        let data = { userId: sessionStorage.getItem("userId") };

        ApiServices.getSingle(data)
            .then((res) => {
                if (res.data.success) {
                    setStudentId(res.data.data._id);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    useEffect(() => {
        ApiServices.allHod()
            .then((res) => {
                if (res.data.success) {
                    setHod(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);

    const handleForm = async (e) => {
        e.preventDefault();

        let imageUrl = "";

        if (profile) {
            const formData = new FormData();
            formData.append("file", profile);
            formData.append("upload_preset", "AcademicComplaints"); // Replace with your upload preset

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dfjp2cbmi/image/upload`,
                    formData
                );
                imageUrl = response.data.secure_url;
            } catch (error) {
                console.error("Error uploading image:", error);
                toast.error("Image upload failed");
                return;
            }
        }

        const data = {
            subject: subject,
            complaintDesc: complaintDesc,
            profile: imageUrl || "",
            isAnonymous: isAnonymous ? 1 : 0,
            departmentId: departmentId,
        };

        if (!isAnonymous) {
            data.studentId = studentId;
        }

        ApiServices.addComplaint(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success("Complaint Added Successfully");
                    setSubject("");
                    setComplaintDesc("");
                    setProfile(null);
                    setIsAnonymous(false);
                    setDepartmentId("");
                    nav("/student");
                } else {
                    toast.error(res.data.message.join(", "));
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <>
            <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Add Complaints</h2>
                            <p>Submit your complaint confidentially.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-sm" style={{ width: "30rem" }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Add Complaint</h5>
                        <form onSubmit={handleForm}>
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="anonymousCheck"
                                    checked={isAnonymous}
                                    onChange={(e) => setIsAnonymous(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="anonymousCheck">
                                    Submit as Anonymous
                                </label>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Complaint Description</label>
                                <textarea
                                    value={complaintDesc}
                                    onChange={(e) => setComplaintDesc(e.target.value)}
                                    className="form-control"
                                    rows="3"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Select Department</label>
                                <select
                                    value={departmentId}
                                    onChange={(e) => setDepartmentId(e.target.value)}
                                    className="form-control"
                                >
                                    <option disabled value="">Choose department</option>
                                    {departments.length > 0 ? (
                                        departments.map((el, index) => (
                                            <option key={index} value={el._id}>
                                                {el.departmentName}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Loading departments...</option>
                                    )}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="fas fa-image"></i> Upload Image
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => setProfile(e.target.files[0])}
                                    className="form-control"
                                />
                            </div>

                            <button className="btn btn-primary w-100">Submit Complaint</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
