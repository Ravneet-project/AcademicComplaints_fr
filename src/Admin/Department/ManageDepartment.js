import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from "../../Components/Services/ApiServices";
import { Link } from "react-router-dom";
import * as qs from "qs";
import Pagination, { limit } from "../../utilities/Pagination";
import PuffLoader from "react-spinners/PuffLoader";

export default function ManageDepartment() {
    const [departments, setDepartments] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDepartments();
    }, [currentPage]);

    const fetchDepartments = () => {
        setLoading(true);

        setTimeout(async () => {
            try {
                let requestData = {
                    limit: limit,
                    currentPage: currentPage
                };
                const res = await ApiServices.allDepartment(requestData);
                if (res.data.success) {
                    setDepartments(res.data.data);
                    let total = res.data.total;
                    setTotalPages(Math.ceil(total / limit));
                } else {
                    toast.error(res.data.message);
                }
            } catch (error) {
                toast.error("Error fetching departments");
            } finally {
                setLoading(false);
            }
        }, 2000); // 2-second simulated delay
    };

    const changeStatusDepartment = async (id, status) => {
        try {
            let data = { _id: id, status };
            const res = await ApiServices.changeStatusDepartment(qs.stringify(data));
            if (res.data.success) {
                toast.success(res.data.message);
                fetchDepartments();
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("Failed to update status");
        }
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
                <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px", position: "relative", zIndex: 1 }}>
                    Manage Departments
                </h2>
                <p style={{ position: "relative", zIndex: 1 }}>
                    Manage department details and update their status.
                </p>
            </div>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                    <PuffLoader color="#36d7b7" size={100} />
                </div>
            ) : (
                <div style={{
                    padding: "20px",
                    background: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    overflowX: "auto",
                    margin: "20px"
                }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px", textAlign: "left", border: "1px solid #ddd" }}>
                        <thead>
                            <tr style={{ background: "#00796b", color: "white", textAlign: "center", fontWeight: "bold" }}>
                                <th>S.no</th>
                                <th>Department Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((dept, index) => (
                                <tr key={dept._id} style={{ background: index % 2 === 0 ? "#f9f9f9" : "#e3f2fd", borderBottom: "1px solid #ddd" }}>
                                    <td style={{ textAlign: "center", padding: "12px" }}>
                                        {((currentPage - 1) * limit) + index + 1}
                                    </td>
                                    <td style={{ padding: "12px" }}>{dept.departmentName}</td>
                                    <td style={{ padding: "12px" }}>{dept.description}</td>
                                    <td style={{ textAlign: "center", padding: "12px", fontWeight: "bold", color: dept.status ? "green" : "red" }}>
                                        {dept.status ? "Active" : "Inactive"}
                                    </td>
                                    <td style={{ textAlign: "center", padding: "12px" }}>
                                        <Link to={`/admin/editDept/${dept._id}`} style={{
                                            marginRight: "10px",
                                            background: "#3498db",
                                            color: "white",
                                            padding: "8px 14px",
                                            borderRadius: "5px",
                                            textDecoration: "none",
                                            fontWeight: "bold",
                                            transition: "0.3s",
                                        }}
                                            onMouseOver={(e) => e.target.style.background = "#217dbb"}
                                            onMouseOut={(e) => e.target.style.background = "#3498db"}
                                        >
                                            Edit
                                        </Link>

                                        {dept.status ? (
                                            <button
                                                onClick={() => changeStatusDepartment(dept._id, false)}
                                                style={{
                                                    padding: "10px 16px",
                                                    fontSize: "14px",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    border: "1px solid #dc3545",
                                                    background: "#dc3545",
                                                    color: "white",
                                                }}
                                            >
                                                Deactivate
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => changeStatusDepartment(dept._id, true)}
                                                style={{
                                                    padding: "10px 16px",
                                                    fontSize: "14px",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    border: "1px solid #28a745",
                                                    background: "#28a745",
                                                    color: "white",
                                                }}
                                            >
                                                Activate
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5">
                                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </>
    );
}
