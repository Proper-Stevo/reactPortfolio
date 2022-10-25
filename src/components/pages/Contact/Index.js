import React, { useState } from 'react'
import "./Contact.css";

const InputContact = (props) => {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  e.preventDefault();

  setName(e.target.fname.value);
  setEmail(e.target.femail.value);

  console.log(name);
  props.addContact(name,email);

};

  return (
    <div>
      <p>
        Please Contact Me Here!
      </p>
      <form className="form">
        <input
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <button type="button" onClick={InputContact}>
          Submit
        </button>
      </form>
    </div>
  );
  }
export default InputContact;