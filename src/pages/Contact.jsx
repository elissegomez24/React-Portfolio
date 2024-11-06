import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (!name || !email || !message) {
            // Optionally set error when fields are empty
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email address is invalid!');
        } else {
            setError(''); // Clear error if all validations pass
        }
    }, [name, email, message]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!error) {
            // Prepare email data for EmailJS
            const templateParams = {
                from_name: name, // Sender's name
                to_name: 'Recipient Name', // Recipient's name 
                message: message, // Message from the form
                reply_to: email, // Reply-to email address
            };

            // Send the email using EmailJS service with the template ID and your user ID
            emailjs.send('service_zjcjly8', 'template_3v35wb3', templateParams, 'pzDySYgB7a7YTPodj')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccess('Your message has been sent successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                })
                .catch((err) => {
                    console.error('EmailJS Error:', err);
                    setError('Failed to send the email. Please try again later.');
                });

        } else {
            console.log('Form submission prevented due to validation errors');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
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
