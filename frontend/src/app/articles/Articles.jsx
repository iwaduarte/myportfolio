import React, { useEffect, useState } from 'react';
import Container from '../_components/Container/Container';
import Title from '../_components/Title/Title';
import BlogCard from '../_components/BlogCard/BlogCard';
import style from './Articles.module.css';
import axios from 'axios';
import Spinner from '../_components/Spinner/Spinner';

const { articles, spinner, languageSelector, languageItem } = style;

const htmlExtractText = (node, limit = 100) => {
  const tag = document.createElement('div');
  tag.innerHTML = node;
  return tag.innerText.substring(0, limit);
};

const FilteredArticles = ({ posts = [], selectedLanguage }) => {
  return posts
    .filter(post => {
      return post.categories.includes(selectedLanguage);
    })
    .map((post, key) => {
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
    });
};

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  useEffect(() => {
    axios.get('https://email.iwaduarte.dev/get-articles').then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const handleLanguageChange = language => {
    setSelectedLanguage(language);
  };

  return (
    <Container>
      <Title titleName="Articles" />
      <div className={languageSelector}>
        <span
          className={languageItem}
          role="img"
          aria-label="English Flag"
          onClick={() => handleLanguageChange('english')}
        >
          EN
        </span>
        |
        <span
          className={languageItem}
          role="img"
          aria-label="Brazilian Flag"
          onClick={() => handleLanguageChange('brasil')}
        >
          PT-BR
        </span>
      </div>
      <div className={articles}>
        {posts.length ? (
          <FilteredArticles posts={posts} selectedLanguage={selectedLanguage} />
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
