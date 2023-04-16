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

const OrderedArticles = ({ posts = [] }) => {
  const { blogCardsArray } = posts.reduce(
    (acc, post, key) => {
      const { author, categories, guid, thumbnail, title, description } = post;

      const { decreaseOdd, decreaseEven, blogCardsArray } = acc;
      const isOdd = key % 2 !== 0;
      const offset = posts.length / 2;
      const newBlogCardsArray = blogCardsArray.concat(
        <BlogCard
          order={isOdd ? key + (offset - decreaseOdd) : key - (offset - decreaseEven)}
          src={thumbnail}
          title={title}
          key={key}
          content={htmlExtractText(description)}
          author={author}
          tags={categories}
          link={guid}
        />
      );
      return {
        decreaseOdd: isOdd ? decreaseOdd + 1 : decreaseOdd,
        decreaseEven: !isOdd ? decreaseEven - 1 : decreaseEven,
        blogCardsArray: newBlogCardsArray
      };
    },
    { decreaseOdd: 1, decreaseEven: 4, blogCardsArray: [] }
  );

  return blogCardsArray;
};

const Articles = () => {
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
          <OrderedArticles posts={posts} />
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
