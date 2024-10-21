import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

function SingleMintItem({ icon, title, subtitle }) {
  return (
    <div className="col-md-6 col-sm-9">
      <div className="mint__item">
        <div className="mint__icon">
          <img src={`/assets/img/icons/${icon}.png`} alt="icon" />
        </div>
        <div className="mint__content">
          <h3 className="title">{title}</h3>
          <p className="desc">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const MintArea = () => {
  const animate_3 = React.useRef(null);
  React.useEffect(() => {
    animate_3.current = anime({
      targets: ".el",
      opacity: [0, 1], translateY: [24, 0],
      delay: anime.stagger(100),
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine"
    });
  }, []);

  const data = {
    title: 'About me',
    items: [
      {
        title: "Frontend Developer",
        subtitle: "Proficient in developing applications using JavaScript, Typescript, HTML, CSS, SASS, and more."
      },
      {
        title: "UI Designer",
        subtitle: "Proficiency in Adobe XD, Illustrator, After Effects, Photoshop, Premiere, and Figma."
      },
      {
        title: "Multi lingual",
        subtitle: "Fluent in English, Portuguese, and Spanish. Conversational in French, Japanese and Corean."
      },
      {
        title: "Communicative",
        subtitle: "Strong communication skills and Soft Skills. Experience in working with teams and clients."
      },
    ],
  };

  return (
    <section id="minting" className="mint-area section-pt-80 section-pb-50">
      <div className="container">
        {/* <div
          className="row justify-content-center"
          // ref={animate_1}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">{data.title}</h2>
            </div>
          </div>
        </div> */}
        <div
          className="mint__lits-wrapper"
          // ref={animate_2}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
        >
          <img
            className="shape"
            width="16"
            src="/assets/img/objects/circle-01.png"
            alt="shape"
            style={{ top: "-16%", left: "8%" }}
          />

          <img
            className="shape"
            width="24"
            src="/assets/img/objects/circle-02.png"
            alt="shape"
            style={{ bottom: "16%", right: "-8%" }}
          />

          <img
            className="shape"
            width="28"
            src="/assets/img/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />

          <div
            className="row justify-content-center el"
            ref={animate_3}
            // style={{ opacity: "0" }}
            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
          >
            {/* <SingleMintItem
              icon="01"
              title={data.items[0].title}
              subtitle={data.items[0].subtitle}
            />
            <SingleMintItem
              icon="02"
              title={data.items[1].title}
              subtitle={data.items[1].subtitle}
            /> */}
            <SingleMintItem
              icon="03"
              title={data.items[2].title}
              subtitle={data.items[2].subtitle}
            />
            <SingleMintItem
              icon="04"
              title={data.items[3].title}
              subtitle={data.items[3].subtitle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MintArea
