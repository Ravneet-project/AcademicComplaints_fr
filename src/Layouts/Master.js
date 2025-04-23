import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Master(){
    return(
        <>
        <Header/>
        <div className="py-5 my-5">
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}