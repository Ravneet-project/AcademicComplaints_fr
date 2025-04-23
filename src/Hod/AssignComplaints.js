import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination, { limit } from "../utilities/Pagination";

import * as qs from "qs";
import ApiServices, { BASE_URL } from "../Components/Services/ApiServices";

export default function AssignComplaints() {
    const [data, setData] = useState([]);
    const [deptId, setDeptId] = useState("");
    const [complaint, setComplaint] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchComplaint();
    }, [deptId, currentPage]);

    useEffect(() => {
        fetchSingleHod();
    }, []);

    const fetchSingleHod = () => {
        let data = {
            userId: sessionStorage.getItem("userId"),
        };
        ApiServices.getSingleHod(data)
            .then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message);
                    setDeptId(res.data.data.departmentId._id);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const fetchComplaint = () => {
        let data = {
            departmentId: deptId,
            status: 4,
            limit: limit,
            currentPage: currentPage,
        };
        ApiServices.allComplaint(data)
            .then((res) => {
                setComplaint(res.data.data);
                if (res.data.success == true) {
                    let total = res.data.total;
                    let totalPages = Math.ceil(total / limit);
                    setTotalPages(totalPages);
                    toast.success(res.data.message);
                    setData(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const changeStatusComplaint = (_id, status) => {
        let data = {
            _id: _id,
            status: status,
        };
        ApiServices.changeStatusComplaint(qs.stringify(data))
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    fetchComplaint();
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    useEffect(() => {
        fetchComplaint();
    }, [currentPage]);

    return (
        <>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Assign Complaints</h2>
                            <p>Manage student information, update their details, and change their status.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center mb-4">Manage Complaints</h1>

            <div className="table-responsive">
                <table
                    className="table text-center"
                    style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: "#e3f2fd", color: "#00796b" }}>
                            <th style={{ padding: "2px", minWidth: "40px" }}>S.No</th>
                            <th style={{ padding: "2px", minWidth: "150px" }}>Student Details</th>
                            <th style={{ padding: "2px", minWidth: "100px" }}>Subject</th>
                            <th style={{ padding: "2px", minWidth: "200px" }}>Complaint Description</th>
                            <th style={{ padding: "2px", minWidth: "100px" }}>Course</th>
                            <th style={{ padding: "2px", minWidth: "150px" }}>Department Name</th>
                            <th style={{ padding: "2px", minWidth: "100px" }}>Image</th>
                            <th style={{ padding: "2px", minWidth: "100px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((complaint, index) => (
                            <tr key={index} style={{ borderBottom: "1px solid #ddd", height: "20px", lineHeight: "1" }}>
                                <td style={{ padding: "2px" }}>{(currentPage - 1) * limit + index + 1}</td>
                                <td style={{ padding: "2px", whiteSpace: "nowrap" }}>
                                    {complaint.isAnonymous == true ? (
                                        "This is anonymous"
                                    ) : (
                                        <span>{complaint.studentId?.userId?.name}</span>
                                    )}
                                </td>
                                <td style={{ padding: "2px", whiteSpace: "nowrap" }}>{complaint.subject}</td>
                                <td style={{ padding: "2px", whiteSpace: "nowrap" }}>{complaint.complaintDesc}</td>
                                <td style={{ padding: "2px", whiteSpace: "nowrap" }}>{complaint.studentId?.course}</td>
                                <td style={{ padding: "2px", whiteSpace: "nowrap" }}>{complaint.departmentId.departmentName}</td>
                                <td style={{ padding: "2px" }}>
                                    <img
                                        src={complaint.profile}
                                        alt="Profile"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "1px solid #ddd",
                                        }}
                                    />
                                </td>
                                <td style={{ padding: "4px" }}>
    {complaint.status === 4 ? (
        <>
            <button
                onClick={() => changeStatusComplaint(complaint._id, 5)}
                style={{
                    backgroundColor: "#ff9800",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "5px",
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9800")}
            >
                In Progress
            </button>

            <button
                onClick={() => changeStatusComplaint(complaint._id, 6)}
                style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#3e8e41")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
            >
                Complete
            </button>
        </>
    ) : (
        <></>
    )}
</td>

                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="8">
                                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}
