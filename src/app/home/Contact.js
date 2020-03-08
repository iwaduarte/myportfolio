import React from 'react';

const Contact = props => <>
    <form className="flex-container direction-column space-evenly m-auto profile-form">

        <div className="email ">
            <label className="small-font-2 bold"> Your Email: </label>
            <input className="home-input-field" type="text"/>
        </div>
        <div className="subject   ">
           <label className="small-font-2 bold"> Subject: </label>
            <input className="home-input-field" type="text"/>
        </div>
        <div className="body mt-1 mb-0 ">
         <label className="d-block small-font-2 bold"> Quick message: </label>
            <textarea className="home-input-field textarea mt-1 mb-0" name="Body" id="" cols="50" rows="3"/>
        </div>
        <button className="videos-button mt-0" type="submit "> Submit </button>


    </form>

</>;

export default Contact;