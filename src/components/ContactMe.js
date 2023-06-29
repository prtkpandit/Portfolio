import React, { useState } from 'react';

const ContactMe = () => {
    const [state, setState] = useState({ status: "" });

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setState({ status: "SUCCESS" });
            } else {
                setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
    return (
        <div className="container" id="cm">
            <div className="row">
                <div className="col text-center" id="cf">
                    <form className="bg-dark" action="https://formspree.io/f/xeqvknap" id="mail-me" method="POST" onSubmit={submitForm}>
                        <h3>
                            Contact Me:
                    </h3>
                        <div className="field">
                            <label><input name="name" type="text" placeholder="Name" /></label>
                        </div>
                        <div className="field">
                            <label><input name="email" type="text" placeholder="Email Address" /></label>
                        </div>
                        <div className="field">
                            <label> <input name="phone" type="number" placeholder="Mobile Number" /></label>
                        </div>
                        <div className="field">
                            <label><textarea name="msg" placeholder="Message"></textarea></label>
                        </div>
                        {state.status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-light">Submit</button>}
                        {state.status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </div>
                <div className="col" id="ct" >
                    <p className="text-center align-middle" >Want to get in touch with me? Be it to request more info about myself or my experience, random questions about the universe and the meaning of life.. just feel free to drop me a line anytime.
                    I promise to reply A.S.A.P.
                <br />Note: No spamming! :)
                </p>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
