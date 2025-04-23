import HodFooter from "./HodFooter"
import HodHeader from "./HodHeader"
import { Outlet } from "react-router-dom"
export default function HodMaster(){
    return(
        <>
        <HodHeader/>
    
        <Outlet/>
       
        <HodFooter/>
        </>
    )
}