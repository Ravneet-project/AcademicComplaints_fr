import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ApiServices, { BASE_URL } from "../../Components/Services/ApiServices";

export default function ViewHOD() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
 

  useEffect(() => {
    
    ApiServices.allHod()
      .then((res) => {
        

        if (res.data.success) {
          setData(res.data.data);
         
          toast.success("HODs loaded successfully!");
        } else {
          toast.error("Failed to load HODs!");
        }
      })
      .catch(() => toast.error("Error fetching data!"));
  }, []);

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
              <h2 className="mb-0 text-white">HOD</h2>
              <p className="text-white" style={{ fontSize: "18px" }}>
                "God does not give us everything we want, but He does fulfill His promises,
                leading us along the best and straightest paths to Himself."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-4" style={{ fontWeight: "bold", color: "#004d66" }}>
          HODs
        </h1>
        <div className="row">
          {data.length === 0 ? (
            <p className="text-center">No HODs found.</p>
          ) : (
            data.map((hod, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card text-center shadow-lg"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    background: "white",
                    padding: "15px",
                    position: "relative",
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
                    {hod.userId?.name}
                  </div>
                  <div className="card-body">
                    <img
                      src={ hod.image}
                      alt="HOD Profile"
                      className="img-fluid rounded-circle mb-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid #00c6a2",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                    <p style={{ fontSize: "16px", color: "#333", fontWeight: "500" }}>
                      <strong>Email:</strong> {hod.userId?.email}
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", fontWeight: "500" }}>
                      <strong>Department:</strong> {hod.departmentId?.departmentName}
                    </p>
                  </div>
                  <div
                    className="card-footer"
                    style={{
                      backgroundColor: selectedIndex === index ? "#008cba" : "#f1f1f1",
                      height: "10px",
                      borderTop: "2px solid #00c6a2",
                      transition: "background 0.3s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
