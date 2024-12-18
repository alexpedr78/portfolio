import React from "react";
import styled from "styled-components";

const ProjectSection = styled.section`
  border-radius: 5px;
  text-align: center;
  padding: 50px 0;
  background-color: rgb0;
`;
//  background-color: ${(props) =>
//   props.theme === "light" ? "#f0f0f0" : "#1e1e1e"};
// transition: background-color 0.3s;
const Title = styled.h2`
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  font-size: 2.5rem;
  margin-bottom: 20px;
`;
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid ${(props) => (props.theme === "light" ? "#ddd" : "#444")};
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#f4f4f9")};
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px; // Reduced padding for a smaller button
  font-size: 0.9rem; // Reduced font size
  background-color: ${(props) =>
    props.theme === "light" ? "#007bff" : "#555"};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#0056b3" : "#333"};
  }
`;
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px; // Limit image height for consistency
  border-radius: 8px;
  margin-bottom: 15px;
`;
const ProjectTags = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: ${(props) =>
    props.theme === "light" ? "#e0e0e0" : "#444"};
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

function Projects() {
  return (
    <ProjectSection id="projects">
      <Title>Projects</Title>
      <ProjectGrid>
        <ProjectCard>
          <h3>"Megalith"</h3>
          <ProjectImage src="/megalith.jpg" alt="Megalith Project" />
          <ProjectTags>
            <Tag>React.js</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Express.js</Tag>
            <Tag>Next.js</Tag>
          </ProjectTags>
          <p>
            A web application to catalog megalithic sites across France.
            Includes admin functionality for adding, editing, and deleting
            sites. I am currently re-doing it in Next.js version.
          </p>
          <p>Hosted on Netlify.</p>
          <ProjectLink href="https://megalith.netlify.app/" target="_blank">
            Try it
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <h3>"CleanMotherEarth"</h3>
          <ProjectImage src="/mountain.jpg" alt="Megalith Project" />
          <ProjectTags>
            <Tag>React.js</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Express.js</Tag>
            <Tag>Next.js</Tag>
          </ProjectTags>
          <p>
            A web app connecting volunteers to clean up waste. Users can create
            accounts, organize events, and help reduce waste impact. I started
            with React, still the one in production but i will swith to a next
            Version soon.
          </p>
          <p>Planned updates include messaging and comment features.</p>
          <ProjectLink href="https://clean-earth.netlify.app/" target="_blank">
            Try it
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <h3>"CleanMotherEarth (Mobile)"</h3>
          <ProjectTags>
            <Tag>React Native</Tag>
            <Tag>Android</Tag>
            <Tag>iOS</Tag>
          </ProjectTags>
          <p>
            A mobile version of CleanMotherEarth with added messaging, comment
            features, and a more modern design.
          </p>
          <ProjectLink
            href="https://github.com/alexpedr78/CleanMotherEarthApp"
            target="_blank"
          >
            GitHub Repo
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <h3>"CloudToken"</h3>
          <ProjectTags>
            <Tag>React Native</Tag>
            <Tag>Smart Contracts</Tag>
            <Tag>Solidity</Tag>
          </ProjectTags>
          <p>
            A project combining React Native AR with blockchain smart contracts.
            Still under development with exciting potential.
          </p>
          <p>Link to the repo coming soon...</p>
        </ProjectCard>
      </ProjectGrid>
    </ProjectSection>
  );
}

export default Projects;
