import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiServices, { BASE_URL } from "../../Components/Services/ApiServices";
import Pagination, { limit } from "../../utilities/Pagination";
import * as qs from "qs";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners"; // Import PuffLoader

export default function ManageHOD() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        fetchHod();
    }, [currentPage]);

    const fetchHod = () => {
        setLoading(true); // Start loading
        setTimeout(()=>{
        let requestData = {
             limit: limit, currentPage: currentPage 
            };

        ApiServices.allHod(requestData)
            .then((res) => {
                if (res.data.success) {
                    setTotalPages(Math.ceil(res.data.total / limit));
                    setData(res.data.data);
                    toast.success(res.data.message);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
        },2000);
    };

    const changeStatus = (userId, status) => {
        let requestData = { userId: userId, status: status };

        ApiServices.changeStatusHod(qs.stringify(requestData))
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    fetchHod();
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
                <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px", position: "relative", zIndex: 1 }}>Manage Teachers</h2>
                <p style={{ position: "relative", zIndex: 1 }}>Manage teachers information, update their details, and change their status.</p>
            </div>

            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{ color: "#00796b" }}>Manage HODs</h1>

                <div className="table-responsive">
                    {loading ? (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "300px",
                            height: "300px"
                        }}>
                            <PuffLoader color="#36d7b7" size={80} />
                        </div>
                    ) : (
                        <table
                            className="table text-center"
                            style={{
                                borderCollapse: "collapse",
                                width: "100%",
                                backgroundColor: "#f9f9f9",
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <thead>
                                <tr style={{ backgroundColor: "#e3f2fd", color: "#00796b", fontWeight: "bold" }}>
                                    <th style={{ padding: "12px" }}>S.No</th>
                                    <th style={{ padding: "12px" }}>Name</th>
                                    <th style={{ padding: "12px" }}>Email</th>
                                    <th style={{ padding: "12px" }}>Department</th>
                                    <th style={{ padding: "12px" }}>Profile</th>
                                    <th style={{ padding: "12px" }}>Status</th>
                                    <th style={{ padding: "12px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((hod, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            borderBottom: "1px solid #ddd",
                                            transition: "0.3s",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                                    >
                                        <td style={{ padding: "10px" }}>{(currentPage - 1) * limit + index + 1}</td>
                                        <td style={{ padding: "10px" }}>{hod.userId?.name}</td>
                                        <td style={{ padding: "10px" }}>{hod.userId?.email}</td>
                                        <td style={{ padding: "10px" }}>{hod.departmentId?.departmentName}</td>
                                        <td style={{ padding: "10px" }}>
                                            <img
                                                src={hod.image}
                                                alt="Profile"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    border: "2px solid #ddd",
                                                    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                                                }}
                                            />
                                        </td>
                                        <td style={{ padding: "10px" }}>
                                            <span
                                                style={{
                                                    padding: "6px 12px",
                                                    borderRadius: "15px",
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    background: hod.status ? "#28a745" : "#dc3545",
                                                }}
                                            >
                                                {hod.status ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td style={{ padding: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
                                            <Link
                                                to={`/admin/editHod/${hod?.userId?._id}`}
                                                style={{
                                                    padding: "10px 16px",
                                                    fontSize: "14px",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    transition: "0.3s ease",
                                                    border: "1px solid #17a2b8",
                                                    background: "#17a2b8",
                                                    color: "white",
                                                }}
                                            >
                                                Edit
                                            </Link>

                                            {hod.status ? (
                                                <button
                                                    onClick={() => changeStatus(hod.userId, false)}
                                                    style={{
                                                        padding: "10px 16px",
                                                        fontSize: "14px",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "0.3s ease",
                                                        border: "1px solid #dc3545",
                                                        background: "#dc3545",
                                                        color: "white",
                                                    }}
                                                >
                                                    Deactivate
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => changeStatus(hod.userId, true)}
                                                    style={{
                                                        padding: "10px 16px",
                                                        fontSize: "14px",
                                                        borderRadius: "6px",
                                                        cursor: "pointer",
                                                        transition: "0.3s ease",
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
                        </table>
                    )}
                </div>

                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </>
    );
}
