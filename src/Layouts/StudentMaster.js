import { Outlet } from "react-router-dom"
import StudentHeader from "./StudentHeader"
import StudentFooter from "./StudentFooter"
export default function StudentMaster(){
    return(
        <>
        <StudentHeader/>
      
            <Outlet/>
      
        <StudentFooter/>
        
        </>
    )
}