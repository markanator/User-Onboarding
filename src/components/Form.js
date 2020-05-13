import React, { useState } from 'react';

import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    userName: yup
    .string()
    .required("Please Enter Your Name"),
    userEmail: yup
    .string()
    .email('Must be a valid email address')
    .required('Please Enter Email!'),
    userPass: yup
    .string()
    .required('Please Enter a Password'),
    terms: yup.bool().oneOf([true], 'Please agree to terms of Use')
});


function Form () {
    // managaing state for our forms
    const [formData,setFormData] = useState({
        userName:'',
        userEmail:'',
        userPass:'',
        terms: false
    });

    //managing state for validation ERRORs
    const [errorState, setErrorState] = useState({
        userName:'',
        userEmail:'',
        userPass:'',
        terms: ''
    });

    // func to submit form once done
    const submitForm = e => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    // handles changes within the 
    const handleChange = e =>{
        // get errors otherwise
        e.persist();
        // quick thruthy check for yes/no vs data
        let val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // lets set the data
        setFormData({...setFormData, [e.target.name]: val});

        console.log('INPUT CHANGED: ', e.target.name, val);
    };


    return (
        <div>
            <p>Hello world!</p>
            <form onSubmit={submitForm}>
                <label>Name: 
                    <input
                    type="text"
                    name='userName'
                    placeholder="Jose Sanchez"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label><br />
                <label>Email: 
                    <input type="email" name='userEmail' 
                    placeholder="Jose@sanchez.com"
                    value={formData.email}
                    onChange={handleChange}/>
                </label><br />
                <label>Password: 
                    <input type="password" name='userPass'
                    placeholder="*********" 
                    value={formData.password}
                    onChange={handleChange}/>
                </label><br />
                <label> I have read and agree to the Terms and Conditions: 
                    <input type="checkbox" name='terms' value={formData.terms}
                    onChange={handleChange}/>
                </label><br />
                <button>Submit</button>
            </form>



        </div>
    );
}

export default Form;