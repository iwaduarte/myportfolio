import React, { useState } from 'react';
import Container from '../_components/Container/Container';
import Title from '../_components/Title/Title';
import BlogCard from '../_components/BlogCard/BlogCard';
import style from './Articles.module.css';

const { articles, languageSelector, languageItem } = style;

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
          onClick={() => handleLanguageChange('portuguese')}
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
