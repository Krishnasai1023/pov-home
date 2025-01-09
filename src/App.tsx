// App.tsx
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import grievanceImage from "./assets/4751419.jpg";
import member1 from "./assets/Member1.jpg";
import member2 from "./assets/Member2.jpg";
import member3 from "./assets/Member3.jpg";
import member4 from "./assets/Member4.jpg";
import member5 from "./assets/member5.jpg";

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const teamMembers = [
    {
      name: "Gopi Krishna Sai Vallabaneni",
      role: "President",
      img: member1,
      social: {
        linkedin: "https://linkedin.com/in/gopi-krishna",
        hackerrank: "https://hackerrank.com/gopi",
        email: "2200031732@kluniversity.in",
      },
    },
    {
      name: "Amith Samuel Konikala",
      role: "Vice President",
      img: member2,
      social: {
        linkedin: "https://linkedin.com/in/amith-samuel",
        hackerrank: "https://hackerrank.com/amith",
        email: "amith.samuel@example.com",
      },
    },
    {
      name: "Deepak Reddy Yaramala",
      role: "Technical Lead",
      img: member3,
      social: {
        linkedin:
          "https://www.linkedin.com/in/yaramala-sai-deepak-reddy-71b43228b/",
        hackerrank: "https://www.hackerrank.com/profile/h2200032786",
        email: "2200032786@kluniversity.in",
      },
    },
    {
      name: "Vishal Sri Manikanta Kaligineedi",
      role: "Head of Designing",
      img: member4,
      social: {
        linkedin: "https://www.linkedin.com/in/k-vishal-srivatsav-4bb395258/",
        hackerrank: "https://www.hackerrank.com/profile/kvragasudha1980",
        email: "2200032583@kluniversity.in",
      },
    },
    {
      name: "Manikanta Reddy Duggempudi",
      role: "H O Social-Activities",
      img: member5,
      social: {
        linkedin:
          "https://www.linkedin.com/in/duggempudi-manikantareddy-016158264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        hackerrank: "https://www.hackerrank.com/profile/h2200031311",
        email: "2200031311@kluniversity.in",
      },
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/grievances", formData);
      alert("Grievance submitted successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting grievance");
    }
  };

  let projects = [
    {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot that provides instant assistance and answers to user queries.",
      img: "https://source.unsplash.com/300x200/?image,recognition",
    },
    {
      title: "Image Recognition System",
      description:
        "A system that leverages machine learning to identify objects in images.",
      img: "https://source.unsplash.com/300x200/?image,recognition",
    },
    {
      title: "Predictive Analytics",
      description:
        "A project focused on using AI to forecast trends and patterns in data.",
      img: "https://source.unsplash.com/300x200/?analytics,data",
    },
    {
      title: "Virtual Reality Experience",
      description:
        "A cutting-edge VR application that immerses users in a virtual environment.",
      img: "https://source.unsplash.com/300x200/?vr,virtualreality",
    },
  ];
  projects = [];

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const taglines = [
    "Unleash your creativity with AI-driven solutions.",
    "Collaborate with like-minded innovators.",
    "Learn, share, and grow together in the world of AI.",
    "Join us and be a part of the future of technology.",
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/prompt-o-ventures",
    twitter: "https://twitter.com/promptoventures",
    instagram:
      "https://www.instagram.com/klu_prompt_o_ventures?igsh=MW5kbnJ2MXpua3FqcA==",
    email: "mailto:promptoventures@gmail.com",
    telegram: "https://t.me/+INwWKR08Vug2OTg9",
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a
            href="https://sac.kluniversity.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sacwebsite-8d0b5.appspot.com/o/HeroVideo%2FOfficialSacLogo.png?alt=media&token=8a73bd93-832c-4d5d-819d-0e371d12b01c"
              alt="KL SAC Logo"
              className="header-logo"
            />
          </a>
          <a
            href="https://sac.kluniversity.in/Clubpage/15"
            target="_blank"
            rel="noopener noreferrer"
            className="club-link"
          >
            Prompt-O-Ventures
          </a>
        </div>

        <div className="header-right">
          <span onClick={() => scrollToSection("home")}>Home</span>
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("sil")}>SIL</span>
          <span onClick={() => scrollToSection("team")}>Team</span>
          <span onClick={() => scrollToSection("quotes")}>Quotes</span>
          <span onClick={() => scrollToSection("projects")}>Projects</span>
          <span onClick={() => scrollToSection("grelavences")}>Grievances</span>
          <span onClick={() => scrollToSection("explore-more")}>Join</span>
        </div>
      </header>
      {/* Other Sections */}
      <section id="home" className="hero">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/10/14/47/robot-3010309_960_720.jpg"
          alt="Robot"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Prompt-O-Ventures</h1>
          <p>
            Mastering prompt engineering through collaboration and hands-on AI
            projects.
          </p>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="q">
          <div className="q1">
            <h1>What is Prompt-O-Ventures</h1>
            <p>
              Mastering prompt engineering through collaboration and hands-on AI
              projects.
            </p>
            <p>
              Unlocking AI creativity through prompt engineering, collaboration,
              and hands-on projects.
            </p>
          </div>
        </div>

        <h2>ABOUT US</h2>
        <p className="about-text">
          Meet the team behind Prompt-O-Ventures. We collaborate, innovate, and
          inspire to bring AI-driven solutions to life. Our dedication and
          expertise make us leaders in prompt engineering.
        </p>
        <div className="about-team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="image-wrapper circle">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-icons">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={member.social.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-hackerrank"></i>
                </a>
                <a href={`mailto:${member.social.email}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SIL Section */}
      <section id="sil" className="sil-section">
        <div className="sil-header">
          <h2>Social Immensive Learning</h2>
          <p>
            Explore the impact of SIL through engaging and impactful events.
          </p>
        </div>
        <div className="sil-cards-row">
          <div className="sil-card">
            <img
              src="https://i.imghippo.com/files/qcB5778HX.png"
              alt="Event 1"
            />
            <h3>Event 1</h3>
            <p>Date: Jan 1, 2025</p>
            <p>Venue: Auditorium A</p>
          </div>
          <div className="sil-card">
            <img
              src="https://i.imghippo.com/files/z4915zAo.png"
              alt="Event 2"
            />
            <h3>Event 2</h3>
            <p>Date: Feb 15, 2025</p>
            <p>Venue: Hall B</p>
          </div>
          <div className="sil-card">
            <img
              src="https://i.imghippo.com/files/LtiU8332yo.png"
              alt="Event 3"
            />
            <h3>Event 3</h3>
            <p>Date: Mar 10, 2025</p>
            <p>Venue: Open Grounds</p>
          </div>
          <div className="sil-card">
            <img
              src="https://i.imghippo.com/files/PBk9530zB.png"
              alt="Event 4"
            />
            <h3>Event 4</h3>
            <p>Date: Apr 5, 2025</p>
            <p>Venue: Conference Room</p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="team-container">
          <div className="team-text">
            <h2>Our Team</h2>
            <blockquote>
              "Alone we can do so little; together we can do so much." – Helen
              Keller
            </blockquote>
          </div>
          <div className="team-image-container">
            <img
              src="https://i.imghippo.com/files/WiQ8124kU.png"
              alt="Teamwork"
              className="team-image"
            />
          </div>
        </div>
      </section>
      <section id="quotes" className="quotes-section">
        <div className="quotes-grid">
          <h2>INSPIRATION</h2>

          <div className="quote-card">
            <p className="quote-text">
              "This next generation of AI will reshape every software category
              and every business, including our own. Although this new era
              promises great opportunity, it demands even greater responsibility
              from companies like ours."
            </p>
            <p className="quote-author">- Satya Nadella</p>
          </div>
          <div className="quote-card">
            <p className="quote-text">
              "AI will be the most transformative technology of the 21st
              century. It will affect every industry and aspect of our lives."
            </p>
            <p className="quote-author">- Jensen Huang</p>
          </div>
          <div className="quote-card">
            <p className="quote-text">
              "AI and machine learning are transforming the way organizations
              analyze and derive insights from data. By leveraging Snowflake's
              cloud data platform, companies can unlock the full potential of
              their data to drive innovation and competitive advantage."
            </p>
            <p className="quote-author">- Snowflake</p>
          </div>
          <div className="quote-card">
            <p className="quote-text">
              "Today's dynamic technology and business landscape means every
              developer needs to be an AI developer. The innovations we're
              launching at SAP are supporting the developers at the heart of the
              AI revolution and providing them with resources they need to
              transform the way businesses run."
            </p>
            <p className="quote-author">- Juergen Mueller, CTO at SAP, 2023</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <p>Projects Are Ongonig.We will Update Soon.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(index)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description.slice(0, 50)}...</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject !== null && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={projects[selectedProject].img}
                alt={projects[selectedProject].title}
                className="modal-img"
              />
              <h3>{projects[selectedProject].title}</h3>
              <p>{projects[selectedProject].description}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </section>
      <section id="grelavences" className="grelavences-section">
        <div className="hi">
          <h2>Grelavences Section</h2>
          <p>Your feedbacks are more helpfull for us, Thankyou.....</p>
        </div>
        <div className="grelavences-top">
          {/* Vertical 1: Form */}
          <div className="grelavences-form">
            <h2>Submit Your Query</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your issue or query..."
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Vertical 2: Image */}
          <div className="grelavences-image">
            <img src={grievanceImage} alt="Grievance Illustration" />
          </div>
        </div>
        <section id="explore-more" className="explore-more-section">
          <h2>Explore More</h2>
          <h2>Let's Become a Team From Now....</h2>
          <div className="taglines">
            {taglines.map((tagline, index) => (
              <p key={index} className="tagline">
                {tagline}
              </p>
            ))}
          </div>
          <div className="social-icons">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a href={socialLinks.email}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href={socialLinks.telegram}>
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
          <p>links will be updated soon</p>
        </section>

        {/* Horizontal 2: Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Feel free to reach out to us through the following contact details:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> promptoventures@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9347301082 , +91 9059958878
            </li>
            <li>
              <strong>Address:</strong> KL SAC | KL UNIVERSITY |
              GreenFields,Vaddeswaram,522502.
            </li>
          </ul>
        </div>
      </section>
      <footer id="footer" className="footer-section">
        <div className="footer-content">
          <h3>Motive of Establishing The Club</h3>
          <p>Creating Awareness and Educating Students on Prompt Engineering</p>
          <p>
            To Reduce the no.of Requests on models, Training on Effective Use of
            Artificial Intelligence
          </p>
          <p>
            &copy; 2025 Prompt-O-Ventures. Designed & Developed By Deepak Reddy
            Yaramala & Krishna Sai Vallabaneni.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
