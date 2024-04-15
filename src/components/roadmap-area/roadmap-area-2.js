import React from "react"

// road map card
function SingleRoadMapCard({
  company,
  step,
  title,
  desc,
}) {
  return (
    <div className="roadmap__card style-two">
      <span>{step}</span>
      <div className="roadmap__percent">
        <span>#</span>
      </div>
      <div className="roadmap__step">
        <span className="tg-text-gradient d-inline-flex">{company}</span>
      </div>
      <h3 className="roadmap__heading">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

const RoadMapAreaTwo = () => {
  const title = 'Professional Experiences'
  const data = [
    {
      step: '2023', title: 'Front End Engineer', company: 'Hexis', desc: 'Designing and developing user interfaces with React components. Implementing state management and handling data flow in React applications.'
    },
    { step: '2021 - 2023', title: 'Front End Developer + UI Designer', company: 'Aubay', desc: 'Used understanding technical fundamentals to promote better component lifecycle practices. Application prototyping from Figma and validation. Unit Tests. UX Designer with focus on user-centered design principles.' },
    { step: '2020 - 2021', title: 'Front End Developer', company: 'Dextra', desc: 'Development of WEB applications using React. Focus in the user experience and process optimization.' },
    { step: '2018 - 2020', title: 'Front End Developer', company: '4intelligence', desc: 'Development of WEB applications with UI / UX, prototyping and application validation, reconstruction of visual identity, optimization of programming, graphic arts and functional tests.' },
  ];

  return (
    <section
      id="roadmap"
      className="roadmap-area roadmap-style-two section-pt-70 section-pb-80"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-10">
            <div className="roadmap__wrapper-two">

              {data.map((value) => (
                <SingleRoadMapCard step={value.step} title={value.title} desc={value.desc} company={value.company} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapAreaTwo
