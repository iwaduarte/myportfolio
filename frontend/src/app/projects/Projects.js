import React from 'react';
import style from './Projects.module.css';
import Card from '../_components/Card/Card';
import Title from '../_components/Title/Title';
import Container from '../_components/Container/Container';

const { project } = style;

const { easy, hard, medium } = { easy: ['easy', '#2D6871'], medium: ['medium', '#F9F871'], hard: ['hard', '#5D3134'] };

const Projects = () => (
  <Container className={project}>
    <Title titleName="Projects" />
    <div>
      <Card tags={['easy', 'javascript', 'node.js', 'aws']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec sodales tortor. Nunc ac pretium est. Donec
        neque enim, aliquet vitae magna id, vestibulum placerat arcu. Suspendisse potenti.  
      </Card>
      <Card />
      <Card />
    </div>
  </Container>
);

export default Projects;
