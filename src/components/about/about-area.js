import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">Who is she?</h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/objects/color.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Design AND build
                  </span>
                  <h2 className="title">
                    Senior <br /> Frontend Developer
                  </h2>
                </div>
                <p>
                  Specialized in building scalable, high-performance web applications.
                  Strong background in UI/UX design, collaborating with cross-functional teams to deliver user-friendly and responsive interfaces.
                </p>
                <div className="about__facts-list">
                  <div className="about__fact-item">
                    <h3 className="count">x{Math.floor(Math.random() * 100) + 1}</h3>
                    <p>
                      Googled "how to center a div"
                    </p>
                  </div>
                  <div className="about__fact-item">
                    <h3 className="count">{(Math.random() * 0.89 + 0.1).toFixed(2)}s</h3>
                    <p>To find a missing semi-colon</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <img src="/assets/img/others/features-02.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Sync and Track
                  </span>
                  <h2 className="title">Multiple Chains, One Home</h2>
                </div>
                <p>
                  With proficiency in modern tools, I ensure code quality, performance optimization, and maintainable component-driven development.
                  My expertise extends across diverse environments, utilizing testing frameworks alongside CI/CD practices to streamline development processes.
                </p>
                <div className="about__facts-list">
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-02"></i>
                    </div>
                    <p>Collections Indexed every 5mins.</p>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-window"></i>
                    </div>
                    <p>Difference in Floor & Estimated Value</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutArea
