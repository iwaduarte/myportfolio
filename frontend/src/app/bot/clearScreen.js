import ReactDOM from 'react-dom';
import React from 'react';

export default function clearScreen() {
  const clearMessage = (
    <div>
      <h1 className={'m-auto txt-align-center my-3'}>How about now smart-ass... </h1>
      <span role="img" className=" m-auto  txt-align-center d-block smile-emoji" aria-label="smile-emoji">
        😁
      </span>
    </div>
  );

  return ReactDOM.render(clearMessage, document.getElementById('root'));
}
