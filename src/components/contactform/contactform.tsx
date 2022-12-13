import { useState } from "react";
import "./contactform.css";

export default function ContactForm(): JSX.Element {

    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e: any) => {
        e.preventDefault(); 
        const { name, email, message } = e.target.elements; 
        let details = {
            name: name.value,
            email: email.value, 
            message: message.value
        }; 

        let response = await fetch("https://photos.manon-antignac.com/mail", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(details),
        }); 

        setStatus("Envoyer"); 
        let result = await response.json(); 
        alert(result.status); 
    };

    return (
        <form onSubmit={handleSubmit} className="contactform">
            <div className="contactform_component">
                <label htmlFor="name" className="contactform_label">Nom et prénom</label>
                <input type="text" name="name" id="name" required className="contactform_input" />
            </div>
            <div className="contactform_component">
                <label htmlFor="email" className="contactform_label">Email</label>
                <input type="email" name="email" id="email" required className="contactform_input" />
            </div>
            <div className="contactform_component">
                <label htmlFor="message" className="contactform_label">Message</label>
                <textarea name="message" id="message" maxLength={500} required className="contactform_input" ></textarea>
            </div>
            <button type="submit" className="contactform_button">{status}</button>
        </form>
    );
};