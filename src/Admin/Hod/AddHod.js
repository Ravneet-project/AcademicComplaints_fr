import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiServices from "../../Components/Services/ApiServices";
import axios from "axios";

export default function AddHod() {
    const [formData, setFormData] = useState([]); // State for department data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null); // Image state
    const [departmentId, setDepartmentId] = useState(""); // Department ID state
    const nav = useNavigate();

    // Fetch department data from the API
    useEffect(() => {
        ApiServices.allDepartment() // Ensure this API call returns the correct departments
            .then((res) => {
                if (res.data.success === true) {
                    setFormData(res.data.data); // Set department data into state
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);

    const handleForm = async(e) => {
        e.preventDefault();
        const formData = new FormData();
formData.append("file", image);
formData.append("upload_preset", "AcademicComplaints"); // Replace with your upload preset

try {
const response = await axios.post(
`https://api.cloudinary.com/v1_1/dfjp2cbmi/image/upload`, // Replace with your Cloudinary cloud name
formData
);
console.log(response);
// Create FormData object for the API call
// Validate that departmentId and image are provided
if (!departmentId || !image) {
    toast.error("Department and Image are required.");
    return;
}


const data ={
 name: name,
email: email,
password:password,
image: response.data.secure_url,
departmentId: departmentId
}


// Send the data to the API
ApiServices.addHod(data) // Ensure API is expecting form-data
    .then((res) => {
        if (res.data.success) {
            toast.success("Teacher Added Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setImage(null);
            setDepartmentId("");
            nav("/admin");
        } else {
            toast.error(res.data.message.join(", "));
        }
    })
    .catch((err) => {
        toast.error(err.message);
    });

// setYrl(response.data.secure_url);
// alert("Images uploaded successfully");
//add your api code here for your project
} catch (error) {
console.error("Error uploading image:", error);
// alert("failed to upload image");
}

    }
        

    return (
        <>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <h2 className="mb-0">Manage</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <center>
                    <h1 className="mb-4">Add Hod</h1>
                    <div className="card shadow-lg bg-light w-50 mt-4">
                        <div className="card-body">
                            <form onSubmit={handleForm} className="p-4">
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-building"></i> Name
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
                                        <i className="fas fa-comment-dots"></i> Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                       
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-building"></i> Password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                       
                                    />
                                </div>

                                {/* Department dropdown */}
                                <select
                                    value={departmentId}
                                    onChange={(e) => setDepartmentId(e.target.value)}
                                    className="form-control"
                                   
                                >
                                    <option selected disabled value="">
                                        Choose department
                                    </option>
                                    {formData.length > 0 ? (
                                        formData.map((el, index) => (
                                            <option key={index} value={el._id}>
                                                {el.departmentName}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Loading departments...</option>
                                    )}
                                </select>

                                {/* Image upload */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="fas fa-image"></i> Image
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <button className="btn btn-primary w-100 hover-effect">Add</button>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}
