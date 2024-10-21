import React from "react"

const CtaArea = () => {
  return (
    <section className="cta-area">
      <div
        className="cta-bg"
      // style={{ backgroundImage: "url(/assets/img/bg/bk3.png)" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content text-center">
              <img
                src="assets/img/objects/circle-01.png"
                width="24"
                alt="Object"
                style={{ top: '0%', left: '-16%' }}
              />
              <img
                src="assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{ bottom: '16%', right: '-8%' }}
              />
              <img
                src="assets/img/objects/ethereum-02.png"
                width="40"
                alt="Object"
                style={{ top: '0%', right: '-16%' }}
              />
              <img
                src="assets/img/objects/circle-03.png"
                width="48"
                alt="Object"
                style={{ bottom: '16%', left: '-8%' }}
              />
              <h2 className="title">Let's connect</h2>
              <a href={'https://calendly.com/fernandacarneiroavelar1995/fernanda-avelar-call'} className="btn gradient-btn">
                Schedule a call
              </a>
              <ul className="list-wrap footer__social">
                <a href="https://www.linkedin.com/in/fernanda-avelar/" className="d-none d-sm-block">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/fernanda-avelar">
                  <i className="fab fa-github"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaArea
