import React, {useState} from 'react';

const BotFooter = props => {
    const [weNeedTalk, setWeNeedTalk] = useState("Stop, this is serious! We need talk");

    return <footer className={"bot-footer"}>
        <div className="flex-items m-auto">
            <a onClick={() => setWeNeedTalk("Nice bot. Can we talk now")}
               href="https://goodreads.com/quotes/tag/seriousness" target={"blank"}>{weNeedTalk}</a>
        </div>
        <hr/>
        <div className="flex-items m-auto">
            Copying your terrible idea.
            Like at least
        </div>
    </footer>
};

export default BotFooter;