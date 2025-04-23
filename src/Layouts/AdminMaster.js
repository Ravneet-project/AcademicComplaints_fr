import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <div className="py-3 my-5">
            <Outlet/>
        </div>

        <AdminFooter/>
       
        </>
    );
}