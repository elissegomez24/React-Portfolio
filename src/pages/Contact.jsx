import { useState, useEffect } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!name || !email || !message) {
            // setError('All fields are required!');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email address is invalid!');
        } else {
            setError(''); // Clear error if all validations pass
        }
    }, [name, email, message]); // Runs every time the name, email, or message changes

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error) {
            console.log('Form submitted', { name, email, message });
            setName('');
            setEmail('');
            setMessage('');
        } else {
            console.log('Form submission prevented due to validation errors');
        }
    };
    

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <textarea 
                    cols="30" 
                    rows="10" 
                    placeholder="Your Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required
                ></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}
