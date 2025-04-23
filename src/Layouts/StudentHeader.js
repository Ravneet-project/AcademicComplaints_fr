import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Header(){

  const token=sessionStorage.getItem("token")
  const nav=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    toast.success("Logout successfully")
    nav("/login")
  }
    return(
        <>
    <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <div className="py-2 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 d-none d-lg-block">
                <a href="#" className="small mr-3">
                  <span className="icon-question-circle-o mr-2" /> Have a questions?
                </a>
                <a href="#" className="small mr-3">
                  <span className="icon-phone2 mr-2" /> 10 20 123 456
                </a>
                <a href="#" className="small mr-3">
                  <span className="icon-envelope-o mr-2" /> info@mydomain.com
                </a>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-flex justify-content-end"> {/* Wrap login and register in a flex container */}
                 {
                !!token?
              <>
              
              <Link  className="btn login mr-2" to ={"/ChangePassword"}>Profile settings</Link>
              <a href="#" onClick={logout} className="btn login mr-2">
              <span className="fa fa-user" /> Logout
              </a>
              </>
              :
              <>
              <Link to="/login" className="btn login mr-2">
                <span className="fa fa-user" /> login
              </Link>
              <Link to={"/register"} className="small btn btn-primary px-4 py-2 rounded-0 ml-3">
                  <span className="icon-users" /> Register
                </Link>
              </>
}
                </div>
              </div>
            </div>
          </div>
        </div>
        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <Link to ={"/"} className="d-block">
                  <img src="/assets/images/logo.jpg" alt="img" className="img-fluid" />
                </Link>
              </div>
              
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                      <Link to={"/student"} className="nav-link text-left">
                        Home
                      </Link> 
                    </li>
                    <li>
                      <Link to={"/student/viewdepartment"} className="nav-link text-left">
                        View Department
                      </Link>
                    </li>
                    <li>
                      <Link to={"/student/viewhod"} className="nav-link text-left">
                        View Hod
                      </Link>
                    </li>
                    <li>
                    <Link to={"/student/addcomplaints"} className="nav-link text-left">
                        Add Complaints
                      </Link>
                    </li>
                    <li>
                    <Link to={"/student/Enquiry"} className="nav-link text-left">
                        Enquiry
                      </Link>
                    </li>
                 
                   
                  
                  </ul>
                </nav>
              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                  <a
                    href="#"
                    className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                  >
                    <span className="icon-menu h3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>  
    )
           
}