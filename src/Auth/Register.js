import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../Components/Services/ApiServices";
import axios from "axios";

export default function Register() {
  const[formdata, setformData]=useState([]);
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const nav = useNavigate();

  const handleForm = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "AcademicComplaints"); // Replace with your upload preset
    
    try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/dfjp2cbmi/image/upload`, // Replace with your Cloudinary cloud name
    formData
    );
   console.log(response);
   const data = {
           name: name,
           email: email,
           password: password,
           image: response.data.secure_url,
           course: course,
           address:address,
           contact:contact,
           rollNo:rollNo,
   }
           // Send the data to the API
           ApiServices.registerStudent(data) // Ensure API is expecting form-data
               .then((res) => {
                   if (res.data.success) {
                       toast.success("student Added Successfully");
                       setName("");
                       setEmail("");
                       setPassword("");
                       setImage(null);
                       setCourse("");
                       setAddress("");
                       setContact("");
                       setRollNo("");
                       nav("/login");
                   } else {
                       toast.error(res.data.message);
                   }
               })
               .catch((err) => {
                   toast.error(err.message);
               });
    //add your api code here for your project
    } catch (error) {
    console.error("Error uploading image:", error);

    
    }
    
       };

  return (
    <>
      <div
        className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
        style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-end justify-content-center text-center">
            <div className="col-lg-7">
              <h2 className="mb-0">Register</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-breadcrumbs border-bottom">
        <div className="container">
          <Link to={"/login"}>Login</Link>
          <span className="mx-3 icon-keyboard_arrow_right" />
          <span className="current">Register</span>
        </div>
      </div>
      <div className="site-section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-3 shadow-lg" style={{ maxWidth: "480px" }}>
                <div className="card-body">
                  <h4 className="card-title text-center mb-3">Register</h4>
                  <form onSubmit={handleForm}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Roll Number</label>
                        <input
                          type="number"
                          value={rollNo}
                          onChange={(e) => setRollNo(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Course</label>
                        <input
                          type="text"
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Contact</label>
                        <input
                          type="number"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Image</label>
                        <input
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary w-50">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
