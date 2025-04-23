import { Link } from "react-router-dom"
export default function About(){
    return(
        <>
  <div
    className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
    style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-7">
          <h2 className="mb-0">About Us</h2>
          <p>A place where knowledge meets innovation, shaping minds for a brighter tomorrow.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="custom-breadcrumns border-bottom">
    <div className="container">
      <a href="#">Home</a>
      <span className="mx-3 icon-keyboard_arrow_right" />
      <span className="current">About Us</span>
    </div>
  </div>
  <div className="container pt-5 mb-5">
    <div className="row">
      <div className="col-lg-4">
        <h2 className="section-title-underline">
          <span>Academics History</span>
        </h2>
      </div>
      <div className="col-lg-4">
        <p>
        Punjab Technical University (PTU) began its journey as a modest institution dedicated to technical and professional education, 
        and over the years has evolved into a pioneering center of academic excellence. Established to meet the growing demand for 
        skilled professionals, PTU has continuously expanded its academic programs and research initiatives. 
        </p>
      </div>
      <div className="col-lg-4">
        <p>
        With a strong focus on innovation, industry collaboration, and holistic student development, 
        the university has steadily built a reputation for producing competent graduates who contribute significantly to
        regional and national progress. Today, PTU stands as a testament
        to the transformative power of education, merging traditional academic values with modern technological advancements.
        </p>
      </div>
    </div>
  </div>{" "}
  --&gt;
  <div className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <img src="/assets/images/course_4.jpg" alt="img" className="img-fluid" />
        </div>
        <div className="col-lg-5 ml-auto align-self-center">
          <h2 className="section-title-underline mb-5">
            <span>Why Academics Works</span>
          </h2>
          <p>
          Academic work at a university involves a blend of theoretical learning, practical application, and research.
           Students attend lectures, participate in discussions, and engage in hands-on lab work to reinforce concepts.
            Assignments, projects, and exams evaluate their understanding, while internships and industry collaborations 
            provide real-world exposure.
          </p>
          <p>
          Research opportunities, seminars, and extracurricular activities further enrich their 
            academic journey, ensuring a well-rounded education that
           prepares them for future challenges.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <img src="/assets/images/course_5.jpg" alt="img" className="img-fluid" />
        </div>
        <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
          <h2 className="section-title-underline mb-5">
            <span>Personalized Learning</span>
          </h2>
          <p>
          Personalized learning customizes education to match each student's strengths, 
          interests, and pace. It fosters deeper understanding, boosts engagement, and promotes independent thinking, 
          ensuring a more effective and meaningful learning experience.

          </p>
         
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
  <div className="site-section">
    <div className="container">
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-4 mb-5">
          <h2 className="section-title-underline mb-5">
            <span>Our Teachers</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_1.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Craig Daniel</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_2.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Taylor Simpson</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_3.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Jonas Tabble</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_4.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Craig Daniel</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_2.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Taylor Simpson</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
          <div className="feature-1 border person text-center">
            <img src="/assets/images/person_3.jpg" alt="img" className="img-fluid" />
            <div className="feature-1-content">
              <h2>Jonas Tabble</h2>
              <span className="position mb-3 d-block">Math Teacher</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                hendrerit elit
              </p>
            </div>
          </div>
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