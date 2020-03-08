import React, {useState} from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const articles = []; //medium articles or personal blog development which is easier (less hassle)

const handleClick = () => {
    console.log('New article...');
};
const Articles = props => {
    const [article, setArticle] = useState([]);

    return < div className="article flex-container self-center ">
        <FaChevronLeft onClick={handleClick} size="50" color="rgb(108,103,134)" className="mx-1 pointer scale-hover"/>
        {articles.length
            ? articles.map(article => <div> {article}</div>)
            : <div className="self-center">Articles are being made... Wait a little my friend.
                <span className="profile-emoji" role="img" aria-label='wink-emoji'> 😉 </span>
            </div>
        }
        <FaChevronRight onClick={handleClick} size="50" color="rgb(108,103,134)" className="mx-1 pointer scale-hover"/>
    </div>

};

export default Articles;