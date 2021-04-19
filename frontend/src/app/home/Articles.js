import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const articlesArr = [][Symbol.iterator](); //medium articles or personal blog development which is easier (less hassle)

const Articles = props => {
  const [article, setArticle] = useState(articlesArr);

  const handleClick = () => {
    setArticle(articlesArr.next());
    console.log('New article...');
  };

  return (
    <div className="article flex-container wrap ">
      <FaChevronLeft
        onClick={handleClick}
        size="50"
        color="rgb(108,103,134)"
        className="mx-1 fa-arrow pointer scale-hover"
      />
      {article.length ? (
        article.map(article => <div> {article}</div>)
      ) : (
        <div className="self-center">
          Articles are being made... Wait a little my friend.
          <span className="profile-emoji" role="img" aria-label="wink-emoji">
            {' '}
            😉{' '}
          </span>
        </div>
      )}
      <FaChevronRight
        onClick={handleClick}
        size="50"
        color="rgb(108,103,134)"
        className="mx-1 fa-arrow pointer scale-hover"
      />
    </div>
  );
};

export default Articles;
