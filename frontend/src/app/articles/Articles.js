import React, { useEffect, useState } from 'react';
import Container from '../_components/Container/Container';
import Title from '../_components/Title/Title';
import BlogCard from '../_components/BlogCard/BlogCard';
import style from './Articles.module.css';
import axios from 'axios';
import Spinner from '../_components/Spinner/Spinner';

const { articles, spinner } = style;

const htmlExtractText = (node, limit = 100) => {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  return tag.innerText.substring(0, limit);
};

//useCRUD data from medium and create blog card
// 1 -open modal with iframe pointing to tutorial

const Articles = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://email.iwaduarte.dev/get-articles').then(({ data }) => {
      setPosts(data);
    });
  }, []);

  return (
    <Container>
      <Title titleName={'Articles'} />
      <div className={articles}>
        {posts.length ? (
          posts.map((post, key) => {
            const { author, categories, guid, thumbnail, title, description } = post;
            return (
              <BlogCard
                src={thumbnail}
                title={title}
                key={key}
                content={htmlExtractText(description)}
                author={author}
                tags={categories}
                link={guid}
              />
            );
          })
        ) : (
          <div className={spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </Container>
  );
};
export default Articles;
