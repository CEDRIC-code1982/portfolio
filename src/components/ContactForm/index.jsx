// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './styles.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("moqrdwzq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='contactForm'>
            <form className='container' onSubmit={handleSubmit}>

            <label className='fullName' htmlFor="fullname">
                    Full Name
                </label>
                <input
                    className='fullName'
                    id="fullName"
                    type="fullName"
                    name="fullName"
                />
                <ValidationError
                    prefix="Full Name"
                    field="fullName"
                    errors={state.errors}
                />
                <label className='label' htmlFor="email">
                    Email Address
                </label>
                <input
                    className='email'
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label className='message' htmlFor="message">
                    Message
                </label>
                <textarea
                    className='message'
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className='button' type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
