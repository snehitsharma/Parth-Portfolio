import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import Amie from "../assets/img/Amie.png";
import umb from "../assets/img/umb.jpg";
import Capgemini from "../assets/img/cg.jpg";
import unschool from "../assets/img/unschool.png";
import Headstarter from "../assets/img/headstarter.jpeg";


import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from 'react-on-screen';
import { ExperienceCard } from "./ExperienceCard";


export const Experience = () => {

    const Experience = [
        {
          title: "Software Development Intern",
          description: "AMIE, Present",
          imgUrl: Amie,
        },
        {
          title: "Software Engineer Fellow",
          description: "Headstarter, Present",
          imgUrl: Headstarter,
        },
        {
            title: "Research Assistant ",
            description: "UMass Boston, Sep 2023 - Jan 2024",
            imgUrl: umb,
          },
          {
            title: "Software Engineer",
            description: "Capgemini, June 2021- Jan 2023",
            imgUrl: Capgemini,
          },
          {
            title: "Web Development Intern ",
            description: "Unschool, Aug 2020 - Jan 2021",
            imgUrl: unschool,
          },
         
    
        ];
    
        return (
            <section className="experience" id="experience">
              <Container>
                <Row>
                  <Col size={12}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h1>Experience</h1>
                        <p>I bring a diverse range of experience from both academic and industry settings. At AMIE in Boston, I’m currently leading the development of a full-stack web application and fine-tuning AI models for creating an advanced interview bot. During my time as a Research Assistant at UMass Boston, I supervised a team to enhance spacewalk safety by 50% through a cutting-edge GUI for the Microsoft HoloLens2, culminating in our representation at NASA SUITS 2024. At Capgemini in India, I directed a team to optimize a courier management platform, cutting load times in half and driving customer satisfaction to 85%. Additionally, my internship at Unschool involved boosting mobile traffic and user engagement through responsive web designs and feature enhancements.</p>
                        <Tab.Container id="experience-tabs" defaultActiveKey="first">
                          {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                          </Nav> */}
                          <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                              <Row>
                                {
                                  Experience.map((project, index) => {
                                    return (
                                      <ExperienceCard
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
              
              <img className="background-image-left" src={colorSharp} alt="Image" />
              <img className="background-image-right" src={colorSharp2} alt="Image"/>  

            </section>
          )
        }
        