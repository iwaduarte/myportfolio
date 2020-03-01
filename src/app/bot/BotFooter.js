import React, {useState} from 'react';

const footerStates = ["Stop, this is serious! We need talk.",
    `Nice... 😠 Can we talk now?`,
    `❤ To access the portfolio one must interact with the bot. Otherwise you could try on LinkedIn or GitHub 🤙`];
const iterator = footerStates[Symbol.iterator]();
const links = ["https://goodreads.com/quotes/tag/seriousness", null, "https://github.com/iwaduarte"];
const linkIterator = links[Symbol.iterator]();
const firstFooterStates = iterator.next().value; // executes only once

const BotFooter = props => {

    const [link, setLink] = useState(0);
    const [weNeedTalk, setWeNeedTalk] = useState(firstFooterStates);

    return <footer className={"bot-footer"}>
        <div className="flex-items m-auto">
            <a onClick={() => {
                const footerState = iterator.next();
                !footerState.done && setWeNeedTalk(footerState.value);

                const footerLink = linkIterator.next();
                !footerLink.done && setLink(footerLink.value);

            }}
               target={"_blank"} href={link}>{weNeedTalk}</a>
        </div>
        <hr/>
        <div className="flex-items m-auto">
            Copying your terrible idea.
            Like at least
        </div>
    </footer>
};

export default BotFooter;