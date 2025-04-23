import { Link } from "react-router-dom"
export default function Contact(){
    return(
        <>
  <div
    className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
    style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-7">
          <h2 className="mb-0">Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="custom-breadcrumns border-bottom">
    <div className="container">
      <Link to={"/index"}>Home</Link>
      <span className="mx-3 icon-keyboard_arrow_right" />
      <span className="current">Contact</span>
    </div>
  </div>
  <div className="site-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
          <div className="card-body bg-light p-5">
            <h2 className="text-center text-primary mb-4">Contact Us</h2>
            <form>
              <div className="row mb-4">
                <div className="col-md-6 form-group">
                  <label htmlFor="fname" className="font-weight-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lname" className="font-weight-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 form-group">
                  <label htmlFor="eaddress" className="font-weight-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="eaddress"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="tel" className="font-weight-bold">
                    Tel. Number
                  </label>
                  <input
                    type="text"
                    id="tel"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message" className="font-weight-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control form-control-lg"
                  rows="4"
                  placeholder="Enter your message here"
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  className="section-bg style-1 py-5"
  style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")', backgroundSize: 'cover' }}
>
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="card shadow-sm rounded-lg border-0">
          <div className="card-body bg-white p-4">
            <span className="icon flaticon-mortarboard mb-3" style={{ fontSize: '30px', color: '#ff6f61' }} />
            <h3 className="h5 font-weight-bold text-primary">Our Philosophy</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
              recusandae, iure repellat quis delectus ea? Dolore, amet
              reprehenderit.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="card shadow-sm rounded-lg border-0">
          <div className="card-body bg-white p-4">
            <span className="icon flaticon-school-material mb-3" style={{ fontSize: '30px', color: '#ff6f61' }} />
            <h3 className="h5 font-weight-bold text-primary">Academics Principle</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
              recusandae, iure repellat quis delectus ea? Dolore, amet
              reprehenderit.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="card shadow-sm rounded-lg border-0">
          <div className="card-body bg-white p-4">
            <span className="icon flaticon-library mb-3" style={{ fontSize: '30px', color: '#ff6f61' }} />
            <h3 className="h5 font-weight-bold text-primary">Key of Success</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
              recusandae, iure repellat quis delectus ea? Dolore, amet
              reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>

    )
}