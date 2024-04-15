import React from "react"

function SingleChoseItem({ id, title, desc }) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="choose__item">
        <div className="choose__item-count tg-text-gradient">{id}.</div>
        <div className="choose__item-content">
          <h3 className="title">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const ChoseArea = () => {
  return (
    <section id="choose" className="choose-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">Education</h2>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="row choose__item-lists"
            data-anime="targets: > * > *; opacity:[0, 1]; translateY:[48, 0]; onview: -400; delay: anime.stagger(100);"
          >
            <SingleChoseItem
              id="2016"
              title={
                <>
                  Web <br /> Development
                </>
              }
              desc="Exchange Student at WIT College - Waterford Institute of Technology in Ireland."
            />
            <SingleChoseItem
              id="2018"
              title={
                <>
                  Computer <br /> Engineering

                </>
              }
              desc="Graduated in Computer Engineering at INATEL - National Telecommunications Institute."
            />
            <SingleChoseItem
              id="2022"
              title={
                <>
                  UI <br /> Design
                </>
              }
              desc="Extra Curricular study at Escola Britânica de Artes Criativas & Tecnologia (EBAC)."
            />
            <SingleChoseItem
              id="2023"
              title={
                <>
                  Full Stack <br /> Designer
                </>
              }
              desc="Extra Curricular study at Escola Britânica de Artes Criativas & Tecnologia (EBAC)."
            />



          </div>
          <img
            src="/assets/img/objects/circle-01.png"
            className="top-left"
            width="16"
            alt="Object"
            style={{ top: '-16%', left: '8%' }}
          />
          <img
            src="/assets/img/objects/circle-02.png"
            className="bottom-right"
            width="24"
            alt="Object"
            style={{ bottom: '16%', right: '-8%' }}
          />
          <img
            src="/assets/img/objects/x.png"
            className="bottom-left"
            width="28"
            alt="Object"
            style={{ bottom: '16%', left: '-8%' }}
          />
        </div>
      </div>
    </section>
  )
}

export default ChoseArea
