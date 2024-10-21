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

  const calculateDays = () => {
    const startDate = new Date("2018-01-01");
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${daysDifference}`;
  };

  const coffeeCups = calculateDays() * 2.37051;

  const data = {
    countOne: `+${Math.ceil(coffeeCups)}`,
    countOneTitle: "Cups of coffee",
    countTwo: "6 years",
    countTwoTitle: "Experience",
    countThree: `x${calculateDays()}`,
    countThreeTitle: "Days working",
  }

  return (
    <section className="fact-area section-pt-60 section-pb-30">
      <div className="container">
        <div className="fact__items-wrap position-relative">
          <img
            className="shape"
            src="/assets/img/objects/circle-01.png"
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
            <SingleFactItem
              count={data.countThree}
              meta={data.countThreeTitle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactArea
