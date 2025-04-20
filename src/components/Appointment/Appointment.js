import React, { useState } from 'react';

const AppointmentForm = (props) => {
    const { formTitle, formSubTitle, formBtn, formBtnClass } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        console.log(name, email, phone, text);
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/rest/website/new_lead`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "data": {
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "text": text
                }
            })
        }).then(data => {
            setName("");
            setEmail("");
            setPhone("");
            setText("");
            alert("Thank you! We'll get back to you");
        }).catch(_ => {
            alert("Something went wrong. Please call us directly")
        })
    }
    return (
        <main>

            {/* <!-- appointment form start --> */}
            <div className="appointment-style white-bg">
                <div className="form-title">
                    <h3 className="title">{formTitle ? formTitle : 'Schedule Your Appointment'}</h3>
                    <p className="desc">{formSubTitle ? formSubTitle : 'We here to help you 24/7 with experts'}</p>
                </div>
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" name="email" placeholder="E-Mail" required value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="text" name="text" placeholder="Phone Number" required value={phone} onChange={e => setPhone(e.target.value)}/>
                    <input type="text" name="text" placeholder="Requirement" rows="3" value={text} onChange={e => setText(e.target.value)}/>
                    <button type="submit" className={formBtnClass ? formBtnClass : 'submit'}>{formBtn ? formBtn : 'Submit Now'}</button>
                </form>
            </div>
            {/* <!-- appointment form end --> */}

        </main>
    );

}

export default AppointmentForm;