import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import HoloLens from "../assets/img/Holo.png";
import Job from "../assets/img/JobPred.png";
import ssmart from "../assets/img/smartfridge.jpg";
import portfolio from "../assets/img/Portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Augmented Reality Assistant for Astronauts",
      description: "Designed innovative GUI’s for  NASA’s SUITS",
      imgUrl: HoloLens,
    },
    {
      title: "CareerFit.AI",
      description: "AI Analysis to Predict Job Prospects",
      imgUrl: Job,
    },
    {
      title: "Smart Refrigerator",
      description: "ML System to identify Grocery Items",
      imgUrl: ssmart
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio for all my achievments",
      imgUrl: portfolio,
    },
    //{
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects reflect a blend of innovation and technical expertise. I designed an augmented reality assistant for NASA’s SUITS competition using C#, Unity, and the HoloLens 2, which enhanced astronaut safety by providing critical real-time data. With CareerFit.AI, I achieved a 98.72% accuracy in predicting job prospects by leveraging Python for data analysis. My work on the Smart Refrigerator integrated IoT and machine learning, using Raspberry Pi and ImageNet to create a system that monitors grocery availability, nutritional value, and even suggests recipes, all while alerting users through the Twilio API.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
