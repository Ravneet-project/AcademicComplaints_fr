import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiServices from "../../Components/Services/ApiServices";

export default function ViewDepartment() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetchDept();
  }, []);

  const fetchDept = () => {
    ApiServices.allDepartment(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setData(res.data.data);
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
      <div
        className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
        style={{
          backgroundImage: 'url("/assets/images/bg_1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0 text-white">Departments</h2>
              <p className="text-white" style={{ fontSize: "18px" }}>
                Explore and manage all departments effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-4" style={{ fontWeight: "bold", color: "#004d66" }}>
          Departments
        </h1>
        <div className="row">
          {data.map((department, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  background: "white",
                  textAlign: "center",
                  position: "relative",
                  padding: "15px",
                  boxShadow:
                    selectedIndex === index
                      ? "0px 12px 24px rgba(0, 0, 0, 0.3)"
                      : "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  transform:
                    selectedIndex === index ? "scale(1.08) translateY(-5px)" : "translateY(0)",
                  border: selectedIndex === index ? "3px solid #008cba" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (selectedIndex !== index) {
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedIndex !== index) {
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <div
                  className="card-header text-white"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #00c6a2, #008cba)",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "20px",
                    padding: "15px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {department.departmentName}
                </div>
                <div className="card-body text-center">
                  <p
                    className="card-text"
                    style={{
                      fontSize: "16px",
                      color: "#333",
                      lineHeight: "1.5",
                      padding: "10px",
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    }}
                  >
                    {department.description}
                  </p>
                </div>
                {/* Removed "View Details" from footer */}
                <div
                  className="card-footer"
                  style={{
                    backgroundColor: selectedIndex === index ? "#008cba" : "#f1f1f1",
                    height: "10px", // Keeps footer styling clean
                    borderTop: "2px solid #00c6a2",
                    transition: "background 0.3s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
