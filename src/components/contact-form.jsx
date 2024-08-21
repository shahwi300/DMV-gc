import React, { useState } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    .input-item{
        position: relative; margin-bottom: 30px;

        label{position: absolute; top: 15px;  color: #838383; left: 5px; padding: 2px 10px;  z-index: 3; transition: 0.1s all; pointer-events: none}
        .border_{position: absolute; height: 1px; bottom: -1px; left: -1px; width: calc(100% + 2px); border-bottom: 1px solid #838383; transition: 0.1s all;}

        .form-control{
            background: var(--section-bg); border-radius: 0; min-height: 50px; z-index: 2; position: relative; 
            &::-webkit-inner-spin-button{-webkit-appearance: none;}
    
            &:focus + .border_, &:focus ~ .border_{height: calc(100% + 2px); border: 1px solid #838383}
            &:focus + label, &:focus ~ label{top: -13px; background: var(--section-bg); left: 10px; font-size: 14px}
    
            &.active ~ .border_{height: calc(100% + 2px); border: 1px solid #838383}
            &.active ~ label{top: -13px; background: var(--section-bg); left: 10px; font-size: 14px}
        }
        
    }

`;

function ContactForm() {

    const [inputActive, setInputActive] = useState();

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setInputActive(inputValue !== '' ? e.target.classList.add('active') : e.target.classList.remove('active'));
      console.log(inputActive)
    };

  return (
    <Form action="https://formspree.io/f/mbjnoawe" method="POST">
        <div className={`input-item`}>
            <input type="text" name='name' className='form-control' onChange={handleInputChange}/>
            <label>Name</label>
            <div className='border_'></div>
        </div>
        <div className={`input-item`}>
            <input type="number" name='number' className='form-control' onChange={handleInputChange}/>
            <label>Phone</label>
            <div className='border_'></div>
        </div>
        <div className={`input-item`}>
            <input  type="emial" name="email" className='form-control' onChange={handleInputChange}/>
            <label>Email</label>
            <div className='border_'></div>
        </div>
        <div className={`input-item`}>
            <textarea  type="Message" name='message' className='form-control' onChange={handleInputChange}/>
            <label>Message</label>
            <div className='border_'></div>
        </div>
        <div className='form-button-holder'>
            <button className="btn button-primary btn-c-rounded" type="submit">Submit</button>
        </div>
    </Form>
  )
}

export default ContactForm;