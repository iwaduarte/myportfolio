import React, { useState } from 'react';
import clearScreen from './clearScreen';

const footerStates = [
  '🖐 Stop, this is serious! We need talk.',
  `Nice... 😠 Can we talk now?`,
  `❤ To access the portfolio one must interact with the bot. Otherwise you could try on LinkedIn or GitHub 🤙`
];
const iterator = footerStates[Symbol.iterator]();
const links = ['https://goodreads.com/quotes/tag/seriousness', null, 'https://github.com/iwaduarte'];
const linkIterator = links[Symbol.iterator]();
const firstFooterStates = iterator.next().value; // executes only once

const BotFooter = props => {
  const [link, setLink] = useState(0);
  const [weNeedTalk, setWeNeedTalk] = useState(firstFooterStates);

  return (
    <footer className="bot-footer">
      <div className="flex-items self-center ">
        <a
          onClick={() => {
            const footerState = iterator.next();
            !footerState.done && setWeNeedTalk(footerState.value);

            const footerLink = linkIterator.next();
            !footerLink.done && setLink(footerLink.value);
          }}
          target={'_blank'}
          rel="noopener noreferrer"
          href={link}
        >
          {weNeedTalk}
        </a>
      </div>
      <hr />
      <div className="flex-items self-center  ">
        <span className="d-block">
          Copying your terrible idea{' '}
          <span role="img" aria-label="okay-emoji">
            📄
          </span>
        </span>
        <div className="clear-screen" onClick={clearScreen}>
          Like at least
          <span role="img" aria-label="okay-emoji">
            👍{' '}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default BotFooter;
