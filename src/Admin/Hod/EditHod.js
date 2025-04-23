import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../Components/Services/ApiServices";

export default function EditHod() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [previousImage, setPreviousImage] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const { userId } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        // Fetch all departments
        ApiServices.allDepartment()
            .then((res) => {
                if (res.data.success) {
                    setData(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });

        // Fetch single HOD details
        ApiServices.getSingleHod({ userId: userId })
            .then((res) => {
                if (res.data.success) {
                    setName(res.data.user.name);
                    setDepartmentId(res.data.departmentId);
                    setPreviousImage(res.data.data.image);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [userId]);

    const changeImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleForm = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("userId", userId);
        data.append("name", name);
        data.append("departmentId", departmentId);
        if (image) {
            data.append("image", image);
        }

        ApiServices.updateHod(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    nav("/admin/manage_Hod");
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
                            <h2 className="mb-0">Edit HOD</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <center>
                    <h1 className="mb-4">Edit HOD</h1>
                    <div
                        className="card shadow-lg bg-light w-50 mt-4"
                        style={{ borderRadius: "10px" }}
                    >
                        <div className="card-body">
                            {previousImage && (
                                <div className="text-center mb-3">
                                    <img
                                        src={`${BASE_URL}${previousImage}`}
                                        style={{
                                            height: "100px",
                                            width: "100px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "2px solid #ddd",
                                        }}
                                        alt="Previous"
                                    />
                                </div>
                            )}
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
                                        <i className="fas fa-building"></i> Department
                                    </label>
                                    <select
                                        value={departmentId}
                                        onChange={(e) => setDepartmentId(e.target.value)}
                                        className="form-control"
                                       
                                    >
                                        <option value="" disabled>
                                            Choose department
                                        </option>
                                        {data.map((el) => (
                                            <option key={el._id} value={el._id}>
                                                {el.departmentName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-image"></i> Upload New Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={changeImage}
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
