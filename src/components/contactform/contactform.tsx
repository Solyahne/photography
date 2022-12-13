import { useState } from "react"

export default function ContactForm(): JSX.Element {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e: any) => {
        e.preventDefault(); 
        const { name, email, message } = e.target.elements; 
        let details = {
            name: name.value,
            email: email.value, 
            message: message.value
        }; 

        let response = await fetch("http://localhost:5500/mail", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(details),
        }); 

        setStatus("Submit"); 
        let result = await response.json(); 
        alert(result.status); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom et prénom :</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message : </label>
                <textarea name="message" id="message" maxLength={500} required></textarea>
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};