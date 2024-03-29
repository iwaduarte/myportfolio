import React from 'react';
import style from './Projects.module.css';
import Card from '../_components/Card/Card';
import Title from '../_components/Title/Title';
import Container from '../_components/Container/Container';
import Separator from '../_components/Separator/Separator';

const { project } = style;

const Projects = () => (
  <Container className={project}>
    <Title titleName="Open source projects" />
    <div>
      <Card
        tags={['easy', 'plugin', 'serverless-framework', 'organizer', 'serverless-layer-organizer', 'javascript']}
        src={'/assets/serverless-logo.jpeg'}
        codeUrl="https://github.com/iwaduarte/serverless-layer-organizer"
        demoUrl="https://www.npmjs.com/package/serverless-layer-organizer"
      >
        The Serverless Layer Organizer is a plugin for the Serverless Framework designed to enhance the organization of
        serverless layers. This plugin allows you to set custom path prefixes, making deployment easier.
      </Card>
      <Separator />

      <Card
        tags={['moderate', 'crossposting', 'node', 'npm', 'cli', 'posse', 'javascript']}
        src={'/assets/crossposting.webp'}
        codeUrl="https://github.com/iwaduarte/cross-post"
      >
        <strong>Crossposting:</strong> Cross Post a blog to multiple websites. You can read more how I come up the idea
        here in this medium article:
        <a href="/blog/en/08-creating-a-blog/" target="_blank" rel="noreferrer">
          Creating a blog. A complete guide to move towards madness.
        </a>
      </Card>
      <Separator />
      <Card
        tags={['hard', 'react.js', 'styled-components', 'indexeddb', 'chrome-extension', 'firefox-extension']}
        src={'/form-filler.png'}
        codeUrl="https://github.com/iwaduarte/form-filler"
        demoUrl="https://addons.mozilla.org/pt-BR/firefox/addon/form-filler-applier/"
      >
        Form-Filler is a powerful browser extension designed to make your life easier by automatically filling out
        online forms with data from your PDF files, such as CVs or resumes. With a simple and intuitive user interface,
        Form-Filler allows you to add custom properties and a PDF file to be used for filling forms on the web.
      </Card>
      <Separator />
      {/*<Card*/}
      {/*  tags={['moderate', 'react.js', 'styled-components', 'formik']}*/}
      {/*  src={'/pokemon.png'}*/}
      {/*  codeUrl="https://github.com/iwaduarte/pokemon"*/}
      {/*  demoUrl="https://iwaduarte.github.io/pokemon/"*/}
      {/*>*/}
      {/*  Do you like Pokemon? This is a simple project that allows you to search for Pokemon and see their details. It*/}
      {/*  allows the capture of Pokemon using the PokeAPI. The project uses technologies such as Styled-Components,*/}
      {/*  Formik, and React, and is completely responsive.*/}
      {/*</Card>*/}
      {/*<Separator />*/}

      {/*<Card*/}
      {/*  tags={['easy', 'react.js', 'fabricjs', 'canvas']}*/}
      {/*  src={'/image-filter-magic.png'}*/}
      {/*  codeUrl="https://github.com/iwaduarte/image-filter-magic"*/}
      {/*  demoUrl="https://iwaduarte.github.io/image-filter-magic"*/}
      {/*>*/}
      {/*  🌈 Image Filter Magic: A React app using Fabric.js for applying Instagram-like filters (vintage, sepia, blur) to*/}
      {/*  images. It also allows you to download the image with the filter applied. The project uses technologies such as*/}
      {/*  React, Fabric.js, and is completely responsive.*/}
      {/*</Card>*/}
      {/*<Separator />*/}

      {/*<Card*/}
      {/*  tags={['easy', 'react.js', 'financejs', 'html', 'css']}*/}
      {/*  src={'/debt-calculator.png'}*/}
      {/*  codeUrl="https://github.com/iwaduarte/debt-calculator"*/}
      {/*  demoUrl="https://iwaduarte.github.io/debt-calculator"*/}
      {/*>*/}
      {/*  Debt Consolidation Savings Calculator helps you calculate your potential savings by consolidating your existing*/}
      {/*  unsecured debts into a single loan. It is a simple poc for applying the financejs library to a real world*/}
      {/*  problem.*/}
      {/*</Card>*/}
      {/*<Separator />*/}
      <Card
        tags={['moderate', 'express-sire', 'generator', 'node', 'npm', 'cli', 'ci/cd']}
        src={'/good-day-sire.webp'}
        codeUrl="https://github.com/iwaduarte/express-sire"
        demoUrl="https://www.npmjs.com/package/express-sire"
      >
        <strong>Express-sire:</strong> NPM package created to replace express-generator. You can read more about the
        reasoning behind at:
        <a href="/blog/en/03-laziness-to-the-extreme" target="_blank" rel="noreferrer">
          Applying laziness to the extreme: A new code generator for Node.js{' '}
        </a>
      </Card>

      {/*<Separator />*/}
      {/*<Card*/}
      {/*  tags={['easy', 'javascript', 'react.js', 'style-components']}*/}
      {/*  src={'/movieme.webp'}*/}
      {/*  codeUrl="https://github.com/iwaduarte/movieme"*/}
      {/*>*/}
      {/*  A web site to search for movie and recommendations based on your tastes. It contains the top 250 IMDB rated*/}
      {/*  movies. From there user would rate movies until recommendation start showing "must see pictures".*/}
      {/*</Card>*/}
      {/*<Separator />*/}
      {/*<Card*/}
      {/*  tags={['moderate', 'express.js', 'graphQL', 'aws', 'serverless', 'react.js', 'style-components']}*/}
      {/*  src={'/smff.webp'}*/}
      {/*  codeUrl="https://github.com/iwaduarte/semeufuscafalasse"*/}
      {/*  demoUrl="https://semeufuscafalasse.iwaduarte.dev/"*/}
      {/*>*/}
      {/*  Game initially developed as a technical challenge for the Upnid company and consists of several technology*/}
      {/*  stacks. Node, Express, GraphQL, Serverless, React, Styled Components etc.*/}
      {/*</Card>*/}
    </div>
  </Container>
);

export default Projects;
