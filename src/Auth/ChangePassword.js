import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../Components/Services/ApiServices";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [data, setData] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userId, setUserId] = useState("");
    const nav = useNavigate();
    useEffect(() => {
        fetchSingleStudent();
    }, []);

    const fetchSingleStudent = () => {
        const Userdata = {
            userId: sessionStorage.getItem("userId"),
        };
        ApiServices.getSingleStudent(Userdata)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    setUserId(res.data.data.userId._id);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const handleForm = (e) => {
        e.preventDefault();
           
        const data = {
            userId,
            oldPassword,
            newPassword,
            confirmPassword,
        };

        ApiServices.changePassword(data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    setData(res.data);
                    nav("/login")
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
  

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Change Password</h2>
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="oldPassword" className="form-label">Old Password</label>
                            <input
                                type="password"
                                id="oldPassword"
                                className="form-control"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Password Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
