import React from "react";
import style from "./Projects.module.css";
import Card from "../_components/Card/Card";
import Title from "../_components/Title/Title";
import Container from "../_components/Container/Container";

const { project } = style;

// const { easy, hard, medium } = { easy: ['easy', '#2D6871'], medium: ['medium', '#F9F871'], hard: ['hard', '#5D3134'] };

const Projects = () => (
  <Container className={project}>
    <Title titleName="Projects" />
    <div>
      <Card
        tags={[
          "moderate",
          "express-sire",
          "generator",
          "node",
          "npm",
          "cli",
          "ci/cd",
        ]}
        src={"/good-day-sire.png"}
        codeUrl="https://github.com/iwaduarte/express-sire"
        demoUrl="https://www.npmjs.com/package/express-sire"
      >
        NPM packages created to replace express-generator. You can read more
        about the reasoning behind at the medium article:
        https://medium.com/p/bc2cd5376ff7
      </Card>
      <Card
        tags={["moderate", "javascript", "node.js", "aws", "ses", "react.js"]}
        src={"/portfolio.png"}
        codeUrl="https://github.com/iwaduarte/myportfolio"
        demoUrl="self"
      >
        This portfolio website has everything one needs to know about Iwá Duarte
        @developer. It was developed from scratch using only react, css and
        html. All animations, buttons and grid were designed as a proof of
        concept.
      </Card>
      <Card
        tags={["easy", "javascript", "react.js", "style-components"]}
        src={"/movieme.png"}
        codeUrl="https://github.com/iwaduarte/movieme"
      >
        A web site to search for movie and recommendations based on your tastes.
        It contains the top 250 IMDB rated movies. From there user would rate
        movies until recommendation start showing "must see pictures".
      </Card>
      <Card
        tags={[
          "moderate",
          "express.js",
          "graphQL",
          "aws",
          "serverless",
          "react.js",
          "style-components",
        ]}
        src={"/smff.png"}
        codeUrl="https://github.com/iwaduarte/semeufuscafalasse"
        demoUrl="https://semeufuscafalasse.iwaduarte.dev/"
      >
        Game initially developed as a technical challenge for the Upnid company
        and consists of several technology stacks. Node, Express, GraphQL,
        Serverless, React, Styled Components etc.
      </Card>
    </div>
  </Container>
);

export default Projects;
