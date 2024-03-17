import React, { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:500/register', { name, company, number, email, country })
            .then((data) =>(data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="container">
                <h2>Signup Form</h2>
                <form onSubmit={handleForm} id="form-page">
                    <div className="form-group">
                        <label htmlFor="customer-name">Customer Name</label>
                        <input type="text" id="customer-name" name="customer-name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" id="company-name" name="company-name" onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" id="phone-number" name="phone-number" onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Select Country</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
