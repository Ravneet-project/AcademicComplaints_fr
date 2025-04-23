import { Link } from "react-router-dom"

export default function Home(){
    return(

<>
        
  <div className="hero-slide owl-carousel site-blocks-cover">
    <div
      className="intro-section"
      style={{ backgroundImage: 'url("assets/images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
            <h1>Academics Complaints</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      className="intro-section"
      style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
            <h1>You Can Say Anything</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div />
  
    <div className="site-section">
  <div className="container">
    <div className="row mb-5 justify-content-center text-center">
      <div className="col-lg-4 mb-5">
        <h2 className="section-title-underline mb-5">
          <span>Why Academics Works</span>
        </h2>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6">
        <p className="lead">
          Academics provides a structured environment that encourages critical thinking, creativity, and collaboration. 
          With dedicated faculty and innovative curricula, students are equipped to tackle real-world challenges and excel in their fields.
        </p>
      </div>
      <div className="col-lg-6">
        <img src="/assets/images/academic_success.jpeg" alt="img" className="img-fluid rounded mb-4" />
      </div>
    </div>
  </div>
</div>

  
  <div
    className="section-bg style-1"
    style={{ backgroundImage: 'url("/assets/images/about_1.jpg")' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="section-title-underline style-2">
            <span>About Our University</span>
          </h2>
        </div>
        <div className="col-lg-8">
          <p className="lead">
          Where knowledge meets innovation, and dreams turn into reality
           shaping the leaders of tomorrow.
          </p>
          <p>
          Education is more than just learning—it's a journey of discovery,
           growth, and innovation. We believe in nurturing minds, empowering ideas, and shaping futures with 
           excellence. Every challenge is an opportunity, every lesson a stepping stone toward greatness. 
           Here, knowledge meets passion, and together, we create a brighter tomorrow.
          </p>
          <p>
            <a href="/About">Read more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* // 05 - Block */}
  <div className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4">
          <h2 className="section-title-underline">
            <span>Testimonials</span>
          </h2>
        </div>
      </div>
      <div className="owl-slide owl-carousel">
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_1.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!”
            </p>
          </div>
        </div>
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_2.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!
            </p>
          </div>
        </div>
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_4.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!”
            </p>
          </div>
        </div>
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_3.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!
            </p>
          </div>
        </div>
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_2.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!”
            </p>
          </div>
        </div>
        <div className="ftco-testimonial-1">
          <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
            <img
              src="/assets/images/person_4.jpg"
              alt="img"
              className="img-fluid mr-3"
            />
            <div>
              <h3>Allison Holmes</h3>
              <span>Designer</span>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              mollitia. Possimus mollitia nobis libero quidem aut tempore dolore
              iure maiores, perferendis, provident numquam illum nisi amet
              necessitatibus. A, provident aperiam!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="section-bg style-1"
    style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-mortarboard" />
          <h3>Our Philosphy</h3>
          <p><b><em>
          Education is the most powerful weapon which you can use to change the world. 
          It is not just about acquiring knowledge but about developing wisdom, character,
           and a lifelong curiosity. True education shapes not only the mind but also the heart and soul.</em></b>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-school-material" />
          <h3>Academics Principle</h3>
          <p><b><em>
          A strong foundation in academics is built on discipline, perseverance, and an insatiable 
          thirst for knowledge. Learning is a journey, not a destination. Every challenge faced is
           an opportunity to grow, and every lesson learned is a step toward a brighter future.</em></b>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <span className="icon flaticon-library" />
          <h3>Key of Success</h3>
          <p><b><em>
          Success is not measured by how high you climb, but by how many lives you uplift along the way. 
          Hard work, determination, and resilience pave the way to achievement.
           The key to success lies in consistency, courage, and a willingness to keep learning and evolving.</em></b>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="news-updates">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="section-heading">
            <h2 className="text-black">News &amp; Updates</h2>
            <a href="#">Read All News</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="post-entry-big">
                <Link to={"/news_single"} className="img-link">
                  <img
                    src="/assets/images/blog_large_1.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#">June 6, 2019</a>
                    <span className="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">Updates</a>
                  </div>
                  <h3 className="post-heading">
                    <Link to={"/news_single"}>
                      Campus Camping and Learning Session
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="post-entry-big horizontal d-flex mb-4">
                <Link to={"/news_single"} className="img-link mr-4">
                  <img
                    src="/assets/images/blog_1.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#">June 6, 2019</a>
                    <span className="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">Updates</a>
                  </div>
                  <h3 className="post-heading">
                    <Link to={"/news_single"}>
                      Campus Camping and Learning Session
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="post-entry-big horizontal d-flex mb-4">
                <Link to={"news_single"} className="img-link mr-4">
                  <img
                    src="/assets/images/blog_2.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#">June 6, 2019</a>
                    <span className="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">Updates</a>
                  </div>
                  <h3 className="post-heading">
                    <Link to={"/news_single"}>
                      Campus Camping and Learning Session
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="post-entry-big horizontal d-flex mb-4">
                <Link to={"/news_single"} className="img-link mr-4">
                  <img
                    src="/assets/images/blog_1.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#">June 6, 2019</a>
                    <span className="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">Updates</a>
                  </div>
                  <h3 className="post-heading">
                    <a href="news-single.html">
                      Campus Camping and Learning Session
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="section-heading">
            <h2 className="text-black">Campus Videos</h2>
            <a href="#">View All Videos</a>
          </div>
          <a href="/assets/https://vimeo.com/45830194"
            className="video-1 mb-4"
            data-fancybox=""
            data-ratio={2}
          >
            <span className="play">
              <span className="icon-play" />
            </span>
            <img src="/assets/images/course_5.jpg" alt="img" className="img-fluid" />
          </a>
          <a
            href="/assets/https://vimeo.com/45830194"
            className="video-1 mb-4"
            data-fancybox=""
            data-ratio={2}
          >
            <span className="play">
              <span className="icon-play" />
            </span>
            <img src="/assets/images/course_5.jpg" alt="img" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    className="site-section ftco-subscribe-1"
    style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <h2>Subscribe to us!</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,
          </p>
        </div>
        <div className="col-lg-5">
          <form action="" className="d-flex">
            <input
              type="text"
              className="rounded form-control mr-2 py-3"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary rounded py-3 px-4" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

    )
}