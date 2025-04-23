import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiServices from "../../Components/Services/ApiServices";
import * as qs from "qs";
import Pagination, { limit } from "../../utilities/Pagination";
import PuffLoader from "react-spinners/PuffLoader";

export default function ManageEnquiry() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEnquiries();
    }, [currentPage]);

    const fetchEnquiries = () => {
        setLoading(true);
        let requestData = {
            limit: limit,
            currentPage: currentPage
        };

        setTimeout(() => {
            ApiServices.allEnquiry()
                .then((res) => {
                    if (res.data.success) {
                        let totalPages = Math.ceil(res.data.total / limit);
                        setTotalPages(totalPages);
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
        }, 2000); // Simulated delay
    };

    const deleteEnquiry = (id, deleteEnquiry) => {
        const data = { _id: id, deleteEnquiry: deleteEnquiry };
        ApiServices.deleteEnquiry(qs.stringify(data))
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    fetchEnquiries();
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
            {/* Header Section with Dark Overlay */}
            <div style={{
                position: "relative",
                backgroundImage: 'url("/assets/images/bg_1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                padding: "50px",
                textAlign: "center"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)"
                }}></div>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", position: "relative", zIndex: 1 }}>📩 Manage Enquiries</h2>
                <p style={{ position: "relative", zIndex: 1 }}><b>View, delete, or restore student enquiries.</b></p>
            </div>

            {/* Table Container */}
            <div style={{
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                overflowX: "auto",
                margin: "20px",
                minHeight: "200px"
            }}>
                {loading ? (
                   <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                                       <PuffLoader color="#36d7b7" size={100} />
                                   </div>
                ) : (
                    <table style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "14px",
                        textAlign: "left"
                    }}>
                        <thead>
                            <tr style={{
                                background: "#00796b",
                                color: "white",
                                textAlign: "center",
                                fontWeight: "bold"
                            }}>
                                <th style={{ padding: "10px" }}>S.No</th>
                                <th style={{ padding: "10px" }}>Subject</th>
                                <th style={{ padding: "10px" }}>Message</th>
                                <th style={{ padding: "10px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((enquiry, index) => (
                                    <tr key={index} style={{
                                        background: index % 2 === 0 ? "#f9f9f9" : "#e3f2fd"
                                    }}>
                                        <td style={{ padding: "12px", textAlign: "center" }}>
                                            {((currentPage - 1) * limit) + index + 1}
                                        </td>
                                        <td style={{ padding: "12px", textAlign: "center" }}>
                                            {enquiry.subject}
                                        </td>
                                        <td style={{ padding: "12px", textAlign: "center" }}>
                                            {enquiry.message}
                                        </td>
                                        <td style={{ padding: "12px", textAlign: "center" }}>
                                            {enquiry.delete ? (
                                                <button style={{
                                                    background: "#e74c3c",
                                                    color: "white",
                                                    padding: "10px 15px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    transition: "0.3s",
                                                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
                                                }}
                                                    onMouseOver={(e) => e.target.style.background = "#c0392b"}
                                                    onMouseOut={(e) => e.target.style.background = "#e74c3c"}
                                                    onClick={() => deleteEnquiry(enquiry._id, false)}>
                                                    🔄 Undo
                                                </button>
                                            ) : (
                                                <button style={{
                                                    background: "#2ecc71",
                                                    color: "white",
                                                    padding: "10px 15px",
                                                    borderRadius: "8px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    transition: "0.3s",
                                                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
                                                }}
                                                    onMouseOver={(e) => e.target.style.background = "#27ae60"}
                                                    onMouseOut={(e) => e.target.style.background = "#2ecc71"}
                                                    onClick={() => deleteEnquiry(enquiry._id, true)}>
                                                    🗑️ Delete
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ padding: "12px", textAlign: "center" }}>
                                        ❌ No enquiries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4} style={{ textAlign: "center", padding: "12px" }}>
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
