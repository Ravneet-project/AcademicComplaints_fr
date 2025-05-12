import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiServices from "../../Components/Services/ApiServices";
import * as qs from "qs";
import Pagination, { limit } from "../../utilities/Pagination";

export default function ManageComplaints() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [complaint, setComplaint] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchComplaint();
    }, [currentPage]);

    const fetchComplaint = () => {
        setLoading(true);

        setTimeout(() => {
            let requestData = {
                limit: limit,
                currentPage: currentPage
            };

            ApiServices.allComplaint(requestData)
                .then((res) => {
                    if (res.data.success === true) {
                        setComplaint(res.data.data);
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
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 2000); // 10-second delay
    };

    const changeStatusComplaint = (_id, status) => {
        let data = {
            _id: _id,
            status: status
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

    return (
        <>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Manage Complaints</h2>
                            <p>Manage student information, update their details, and change their status.</p>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                    <PuffLoader color="#36d7b7" size={100} />
                </div>
            ) : (
                <>
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
                                    <th style={{ padding: "12px" }}>S.No</th>
                                    <th style={{ padding: "12px" }}>Student Details</th>
                                    <th style={{ padding: "12px" }}>Subject</th>
                                    <th style={{ padding: "12px" }}>Complaint Description</th>
                                    <th style={{ padding: "12px" }}>Course</th>
                                    <th style={{ padding: "12px" }}>Department Name</th>
                                    <th style={{ padding: "12px" }}>Image</th>
                                    <th style={{ padding: "12px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" style={{ padding: "20px" }}>
                                            No complaints found.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((complaint, index) => (
                                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                            <td style={{ padding: "10px" }}>{(currentPage - 1) * limit + index + 1}</td>
                                            <td style={{ padding: "10px" }}>
                                                {complaint.isAnonymous ? (
                                                    "This is anonymous"
                                                ) : (
                                                    <span>{complaint.studentId?.userId?.name}</span>
                                                )}
                                            </td>
                                            <td style={{ padding: "10px" }}>{complaint.subject}</td>
                                            <td style={{ padding: "10px" }}>{complaint.complaintDesc}</td>
                                            <td style={{ padding: "10px" }}>{complaint.studentId?.course}</td>
                                            <td style={{ padding: "10px" }}>{complaint.departmentId?.departmentName}</td>
                                            <td style={{ padding: "10px" }}>
                                                <img
                                                    src={complaint.profile}
                                                    alt="Profile"
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        border: "1px solid #ddd",
                                                    }}
                                                />
                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                {complaint.status === 1 ? (
                                                    <>
                                                        <button className="btn btn-success btn-sm me-2" onClick={() => changeStatusComplaint(complaint._id, 2)}>
                                                            Approve
                                                        </button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => changeStatusComplaint(complaint._id, 3)}>
                                                            Decline
                                                        </button>
                                                    </>
                                                ) : complaint.status === 2 ? (
                                                    <button className="btn btn-warning btn-sm" onClick={() => changeStatusComplaint(complaint._id, 4)}>
                                                        Assign
                                                    </button>
                                                ) : complaint.status === 3 ? (
                                                    "Declined"
                                                ) : complaint.status === 4 ? (
                                                    "Assigned"
                                                ) : complaint.status === 5 ? (
                                                    "In-Progress"
                                                ) : (
                                                    "Complete"
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={8}>
                                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}
