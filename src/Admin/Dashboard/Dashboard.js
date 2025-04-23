import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../../Components/Services/ApiServices";
import { toast } from "react-toastify";
import PuffLoader from "react-spinners/PuffLoader";

export default function Dashboard() {
    const[loading, setLoading]=useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchStudent();
    }, []);

    const fetchStudent = () => {
        setLoading(true);
        
               
        ApiServices.dashboard(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    setData(res.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            })
           
};
   

    // Inline styles
    const cardStyle = (bgColor) => ({
        background: bgColor,
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        color: "#333",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        minHeight: "150px",
    });

    const buttonStyle = (bgColor, hoverColor) => ({
        background: bgColor,
        padding: "12px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        display: "block",
        margin: "15px auto 0",
        transition: "all 0.3s ease-in-out",
        border: "none",
        cursor: "pointer",
        width: "80%",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
    });

    return (
        <>
            {/* Background Header Section */}
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end justify-content-center text-center">
                        <div className="col-lg-7">
                            <h2 className="mb-0 text-white">Dashboard</h2>
                            <p className="text-white">
                                Your quick overview and management hub for academic complaints.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Dashboard Section */}
            <div className="container" style={{ paddingTop: "60px" }}>
                <div className="row">
                    {/* Total Students Card */}
                    <div className="col-md-4 p-2">
                        <div style={cardStyle("#f0f9ff")}>
                            <h3>Total Students</h3>
                            <h1>{data.totalStudent}</h1>
                            <Link to="/admin/manage_student">
                                <button
                                    style={buttonStyle("#66b2ff", "#559ee3")}
                                    onMouseOver={(e) => (e.target.style.background = "#559ee3")}
                                    onMouseOut={(e) => (e.target.style.background = "#66b2ff")}
                                >
                                    Manage Students
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Total Department Card */}
                    <div className="col-md-4 p-2">
                        <div style={cardStyle("#fdf6ec")}>
                            <h3>Total Department</h3>
                            <h1>{data.totalDepartment}</h1>
                            <Link to="/admin/manage">
                                <button
                                    style={buttonStyle("#ffa726", "#e6951d")}
                                    onMouseOver={(e) => (e.target.style.background = "#e6951d")}
                                    onMouseOut={(e) => (e.target.style.background = "#ffa726")}
                                >
                                    Manage Department
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Total Teachers Card */}
                    <div className="col-md-4 p-2">
                        <div style={cardStyle("#e8f5e9")}>
                            <h3>Total Teachers</h3>
                            <h1>{data.totalHod}</h1>
                            <Link to="/admin/manage_Hod">
                                <button
                                    style={buttonStyle("#66bb6a", "#55a75d")}
                                    onMouseOver={(e) => (e.target.style.background = "#55a75d")}
                                    onMouseOut={(e) => (e.target.style.background = "#66bb6a")}
                                >
                                    Manage Teachers
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Total Complaints Card (Centered) */}
                    <div className="col-md-6 p-2 mx-auto">
                        <div style={cardStyle("#ffebee")}>
                            <h3>Total Complaints</h3>
                            <h1>{data.totalComplaints}</h1>
                            <Link to="/admin/manage_complaints">
                                <button
                                    style={buttonStyle("#ef5350", "#d43f3c")}
                                    onMouseOver={(e) => (e.target.style.background = "#d43f3c")}
                                    onMouseOut={(e) => (e.target.style.background = "#ef5350")}
                                >
                                    Manage Complaints
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Total Enquiries Card (Centered) */}
                    <div className="col-md-6 p-2 mx-auto">
                        <div style={cardStyle("#ede7f6")}>
                            <h3>Enquiries</h3>
                            <h1>{data.totalEnquiry}</h1>
                            <Link to="/admin/manageEnquiry">
                                <button
                                    style={buttonStyle("#673ab7", "#512a8c")}
                                    onMouseOver={(e) => (e.target.style.background = "#512a8c")}
                                    onMouseOut={(e) => (e.target.style.background = "#673ab7")}
                                >
                                    Manage Enquiry
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
