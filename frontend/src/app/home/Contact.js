import React, {useState} from 'react';
import axios from 'axios';
const Contact = () => {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [allowSend, setAllowSend] = useState(0);
    const [hasSent, setHasSent] = useState(false);

    const handleChange = (evt, prop) => {
        const mutateFn = {setEmail, setSubject, setMessage};
        mutateFn[prop](evt.target.value);

    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!email || !message) return;

        setAllowSend(prevState => {
            if (prevState < 2)
                return prevState + 1;
            return false;
        });
        setHasSent(true);
        setEmail('');
        setMessage('');
        setSubject('');

        setTimeout(() => {
            setHasSent(false);

        }, 5000);

        console.log('Sending', email, subject, message);
        axios.post('https://email.iwaduarte.dev/send-email', {email, subject, message})
            .then(res => console.log(res));
    };
    if (!allowSend && typeof allowSend === 'boolean') {
        return <div className="flex-container direction-column space-evenly m-auto profile-form">
            <p> Enough messages sent for the day! :)</p>
        </div>;
    }

    return <>
        <form className="flex-container direction-column space-evenly m-auto profile-form">
            {hasSent && <p className="color-red">Thanks for you message! It will be answered as soon as possible.</p>}
            <div className="email ">
                <label className="small-font-2 bold"> Your Email: </label>
                <input onChange={(evt) => handleChange(evt, "setEmail")}
                       value={email}
                       className="home-input-field"
                       type="text"/>
            </div>
            <div className="subject   ">
                <label className="small-font-2 bold"> Subject: </label>
                <input onChange={(evt) => handleChange(evt, "setSubject")}
                       value={subject}
                       className="home-input-field"
                       type="text"/>
            </div>
            <div className="body mt-1 mb-0 ">
                <label className="d-block small-font-2 bold"> Quick message: </label>
                <textarea onChange={(evt) => handleChange(evt, "setMessage")}
                          value={message}
                          className="home-input-field textarea mt-1 mb-0"
                          name="Body" id="" cols="50" rows="3"/>
            </div>
            <button onClick={handleSubmit} className="videos-button mt-0" type="submit "> Submit</button>


        </form>

    </>
};

export default Contact;