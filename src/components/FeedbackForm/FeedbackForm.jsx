import { useState } from 'react';

import './FeedbackForm.css';

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [error, setError] = useState({});

    // === Handle Feedback-Form Submission ===
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validation()) {
            console.log("Form Validation Failed");
        } else {
            localStorage.setItem("feedback-form", JSON.stringify(formData));
            alert("Form Submitted ");
            // Reset form
            setFormData({ name: "", email: "", subject: "", message: "" });
            setError({});
        }

    }

    // === Validate Form ===
    const validation = () => {

        const { name, email, subject, message } = formData;
        const newErrors = {};
        let formValid = true;

        // Patterns
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!name.trim()) {
            console.log("Name is required");
            newErrors.name = "Name is Required";
            formValid = false;
        }
        if (!email.trim()) {
            console.log("Email is required");
            newErrors.email = "Email is Required";
            formValid = false;
        }
        else if (!emailPattern.test(email)) {
            newErrors.email = "Invalid Email Format";
            formValid = false;
        }
        if (!subject.trim()) {
            newErrors.subject = "Subject is Required";
            formValid = false;
        }
        if (!message.trim()) {
            newErrors.message = "Message is Required";
            formValid = false;
        }

        setError(newErrors);
        return formValid;
    }

    return (
        <div className='container feedback-form'>
            <div className="form-container">
                <h2>Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        {error.name && <p className='error-message'>{error.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        {error.email && <p className='error-message'>{error.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Enter Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                        {error.subject && <p className='error-message'>{error.subject}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} ></textarea>
                        {error.message && <p className='error-message'>{error.message}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default FeedbackForm