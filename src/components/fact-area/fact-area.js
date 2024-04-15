import React from "react";

function SingleFactItem({ count, meta }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="fact__item text-center">
        <h2 className="fact__count tg-text-gradient">{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const FactArea = () => {

  const data = {
    countOne: "4,000+",
    countOneTitle: "Cups of coffee",
    countTwo: "6 years",
    countTwoTitle: "Experience",
    countThree: "2,000+",
    countThreeTitle: "Bug fixed",
  }

  return (
    <section className="fact-area section-pt-60 section-pb-30">
      <div className="container">
        <div className="fact__items-wrap position-relative">
          <img
            className="shape"
            src="/assets/img/objects/bitcoin-01.png"
            width="32"
            alt="shape"
            style={{ bottom: "-32%", left: "30%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />

          <img
            className="shape"
            src="/assets/img/objects/ethereum-01.png"
            width="24"
            alt="shape"
            style={{ top: "-25%", right: "25%" }}
            data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;"
          />

          <div
            className="row justify-content-center"
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <SingleFactItem count={data.countOne} meta={data.countOneTitle} />
            <SingleFactItem
              count={data.countTwo}
              meta={data.countTwoTitle}
            />
            {/* <SingleFactItem
              count={data.countThree}
              meta={data.countThreeTitle}
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactArea
