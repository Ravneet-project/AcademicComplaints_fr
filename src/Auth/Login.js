import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ApiServices from "../Components/Services/ApiServices";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load] = useState(false);
    const nav = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();  

        let loginData = {
            email: email,
            password: password
        };

   
    ApiServices.login(loginData)
            .then((res) => {
                if (res.data.success) {
                    if (res.data.data.status == true) {
                        toast.success(res.data.message)
                        let users = res?.data?.data?.userType
                        sessionStorage.setItem("token", res.data.token)
                        sessionStorage.setItem("userType", res.data.data.userType)
                        sessionStorage.setItem("name", res.data.data.name)
                        sessionStorage.setItem("email", res.data.data.email)
                        sessionStorage.setItem("userId", res.data.data._id)
                        if (users == 1) {
                            nav("/admin")
                        } else if (users == 3) {
                            nav("/student")
                        } else {
                            nav("/hod")
                        }
                    } else {
                        toast.error("Account Blocked!! Contact Admin!")
                    }

                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
               toast.error(err.message)
})
}


    return (
        <>
            <div
                className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
            >
                <div className="container">
                    <div className={load && "d-none"}>
                        <div className="row align-items-end justify-content-center text-center">
                            <div className="col-lg-7">
                                <h2 className="mb-0">Login</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-breadcrumns border-bottom">
                <div className="container">
                    <Link to={"/"}>Home</Link>
                    <span className="mx-3 icon-keyboard_arrow_right" />
                    <span className="current">Login</span>
                </div>
            </div>
            <form onSubmit={handleForm}>
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div
                                    className="card"
                                    style={{
                                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                        borderRadius: "15px",
                                        backgroundColor: "#f8f9fa"
                                    }}
                                >
                                    <div className="card-body">
                                        <h2 className="card-title text-center mb-4">Login</h2>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="username">Email</label>
                                                <input
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) => { setEmail(e.target.value); }}
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => { setPassword(e.target.value); }}
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                           

                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-12 text-center">
                                                <button
                                                    className="btn btn-primary d-block mx-auto"
                                                    style={{
                                                        width: "100%",
                                                        backgroundColor: "#28a745",
                                                        border: "none",
                                                        padding: "12px 20px",
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                        color: "#fff",
                                                        borderRadius: "50px",
                                                        transition: "all 0.3s ease"
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.transform = "scale(1.1)";
                                                        e.target.style.backgroundColor = "#218838";
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.transform = "scale(1)";
                                                        e.target.style.backgroundColor = "#28a745";
                                                    }}
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {load && (
                <PuffLoader
                    color="green"
                    size={50}
                    cssOverride={{ display: "block", margin: "0 auto" }}
                    loading={load}
                />
            )}
        </>
    );
    }

