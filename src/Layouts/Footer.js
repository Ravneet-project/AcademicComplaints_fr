export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="mb-4">
              <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
            </p>
            <p><b><em>
            Every voice matters, every complaint is heard,
            and every issue is resolved—because at our university, we believe in action, not just words.</em></b>
            </p>
            <p>
              <a href="#">Learn More</a>
            </p>
          </div>

          <div className="col-lg-3">
            <h3 className="footer-heading">
              <span>Our Campus</span>
            </h3>
            <ul className="list-unstyled">
              <li><a href="#">Academic</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Our Interns</a></li>
              <li><a href="#">Our Leadership</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Human Resources</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3 className="footer-heading">
              <span>Our Courses</span>
            </h3>
            <ul className="list-unstyled">
              <li><a href="#">Math</a></li>
              <li><a href="#">Science & Engineering</a></li>
              <li><a href="#">Arts & Humanities</a></li>
              <li><a href="#">Economics & Finance</a></li>
              <li><a href="#">Business Administration</a></li>
              <li><a href="#">Computer Science</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h3 className="footer-heading">
              <span>Contact</span>
            </h3>
            <ul className="list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Support Community</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Share Your Story</a></li>
              <li><a href="#">Our Supporters</a></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <p>
                Copyright © All rights reserved 
                <i className="icon-heart" aria-hidden="true"></i> by {"Academic Complaints "}
               
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
