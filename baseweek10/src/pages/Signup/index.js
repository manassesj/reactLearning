import React, { useState } from "react";
import '../../styles/global.css';

import { withRouter } from "react-router-dom";

import api from "../../services/api";

function SignUp() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/users/register', {
            first_name,
            last_name,
            email,
            password

        })

        console.warn(response.data);

    }

    return (
        <div className="container">
            <strong>Cadastrar</strong>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name" name="first_name"
                        placeholder="First Name"
                        value={first_name}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    );

}

export default withRouter(SignUp);