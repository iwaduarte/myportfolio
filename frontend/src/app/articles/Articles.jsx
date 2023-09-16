import React, { useState } from 'react';
import Container from '../_components/Container/Container';
import Title from '../_components/Title/Title';
import BlogCard from '../_components/BlogCard/BlogCard';
import style from './Articles.module.css';

const { articles, languageSelector, languageItem, bold } = style;

const FilteredArticles = ({ posts = [], selectedLanguage }) => {
  return posts.reduce((acc, post, key) => {
    const { author, tags, slug, image, title, description, language } = post;

    if (language === selectedLanguage)
      acc.push(
        <BlogCard src={image} title={title} key={key} content={description} author={author} tags={tags} link={slug} />
      );

    return acc;
  }, []);
};

const Articles = ({ posts }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  return (
    <Container>
      <Title titleName="Articles" />
      <div className={languageSelector}>
        <span
          className={`${languageItem} ${selectedLanguage === 'english' ? bold : ''}`}
          role="img"
          aria-label="English Flag"
          onClick={() => setSelectedLanguage('english')}
        >
          EN
        </span>
        |
        <span
          className={`${languageItem} ${selectedLanguage === 'portuguese' ? bold : ''}`}
          role="img"
          aria-label="Brazilian Flag"
          onClick={() => setSelectedLanguage('portuguese')}
        >
          PT-BR
        </span>
      </div>
      <div className={articles}>
        <FilteredArticles posts={posts} selectedLanguage={selectedLanguage} />
      </div>
    </Container>
  );
};
export default Articles;
