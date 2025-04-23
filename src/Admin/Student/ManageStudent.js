import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ApiServices, { BASE_URL } from "../../Components/Services/ApiServices";
import { Link } from "react-router-dom";
import * as qs from "qs";
import Pagination, { limit } from "../../utilities/Pagination";
import { PuffLoader } from "react-spinners";

export default function ManageStudent() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchStudent();
    }, [currentPage]);

    const fetchStudent = () => {
        setLoading(true);

        // Adding a 5-second delay to show the loader
        setTimeout(() => {
            let requestData = {
                limit: limit,
                currentPage: currentPage
            };

            ApiServices.allStudent(requestData)
                .then((res) => {
                    if (res.data.success) {
                        const total = res.data.total;
                        setTotalPages(Math.ceil(total / limit));
                        setData(res.data.data);
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    toast.error(err?.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 3000); // ⏳ 5 seconds delay before loading data
    };

    const changeStatus = (userId, status) => {
        const requestData = { userId, status };
        ApiServices.changeStatus(qs.stringify(requestData))
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    fetchStudent();
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <>
            <div style={{
                backgroundImage: 'url("/assets/images/bg_1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "40px",
                color: "white",
                textAlign: "center",
                position: "relative"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}></div>

                <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px", position: "relative", zIndex: 1 }}>Manage Students</h2>
                <p style={{ position: "relative", zIndex: 1 }}>Manage student information, update their details, and change their status.</p>
            </div>

            <div style={{
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                overflowX: "auto",
                margin: "20px"
            }}>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                        <PuffLoader size={100} color="#36d7b7" />
                    </div>
                ) : (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px", textAlign: "left" }}>
                        <thead>
                            <tr style={{ background: "#00796b", color: "white", textAlign: "center", fontWeight: "bold" }}>
                                {["S.No", "Name", "Email", "Roll No", "Course", "Contact", "Profile", "Status", "Action"].map((header, index) => (
                                    <th key={index} style={{ padding: "15px" }}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student, index) => (
                                <tr key={index} style={{ background: index % 2 === 0 ? "#f9f9f9" : "#e3f2fd" }}>
                                    <td style={{ textAlign: "center" }}>{((currentPage - 1) * limit) + index + 1}</td>
                                    <td>{student.userId?.name}</td>
                                    <td>{student.userId?.email}</td>
                                    <td>{student.rollNo}</td>
                                    <td>{student.course}</td>
                                    <td>{student.contact}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={ student.image} alt="Profile" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {student.userId?.status ? (
                                            <span style={{ color: "green", fontWeight: "bold" }}>Active</span>
                                        ) : (
                                            <span style={{ color: "red", fontWeight: "bold" }}>Blocked</span>
                                        )}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <Link to={`/admin/editStudent/${student?.userId?._id}`} style={{
                                            marginRight: "10px",
                                            background: "#3498db",
                                            color: "white",
                                            padding: "8px 14px",
                                            borderRadius: "5px",
                                            border: "none",
                                            cursor: "pointer",
                                            textDecoration: "none"
                                        }}>Edit</Link>
                                        {student.userId?.status ? (
                                            <button onClick={() => changeStatus(student.userId?._id, false)} style={{
                                                background: "#e74c3c",
                                                color: "white",
                                                padding: "8px 14px",
                                                borderRadius: "5px",
                                                border: "none",
                                                cursor: "pointer",
                                                marginLeft: "5px"
                                            }}>Block</button>
                                        ) : (
                                            <button onClick={() => changeStatus(student.userId?._id, true)} style={{
                                                background: "#2ecc71",
                                                color: "white",
                                                padding: "8px 14px",
                                                borderRadius: "5px",
                                                border: "none",
                                                cursor: "pointer",
                                                marginLeft: "5px"
                                            }}>Unblock</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={9} style={{ textAlign: "center", padding: "20px" }}>
                                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        </>
    );
}
