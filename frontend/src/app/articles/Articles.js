import React from 'react';
import Container from '../_components/Container/Container';
import Title from '../_components/Title/Title';
import BlogCard from '../_components/BlogCard/BlogCard';
import style from './Articles.module.css';

const { articles } = style;

//useCRUD data from medium and create blog card
// 1 -open modal with iframe pointing to tutorial

const Articles = props => (
  <Container>
    <Title titleName={'Articles'} />

    <div className={articles}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </Container>
);

export default Articles;
