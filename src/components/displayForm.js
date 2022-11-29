import React, { useEffect, useState } from 'react';
import { json } from '../helpers/mockData';
import { isValidEmail } from '../helpers/testEmail';
import { isValidHttpUrl } from '../helpers/testUrl';
function DisplayForm(props) {
    const getFieldValue = (fieldName) => props.rowIndex && json[props.rowIndex] && json[props.rowIndex][fieldName] || '';

    const [website, setWebsite] = useState(getFieldValue("website") || '');
    const [websiteValid, setWebsiteValid] = useState(true);
    const [email, setEmail] = useState(getFieldValue("email"));
    const [emailValid, setEmailValid] = useState(true);
    
    const handleWebsiteChange = (e) => {
        if(isValidHttpUrl(e.target.value)){
            setWebsite(e.target.value);
            setWebsiteValid(true);
        }
        else{
            setWebsiteValid(false);
        }
    };

    const handleEmailChange = (e) => {
        if(isValidEmail(e.target.value)){
            setEmail(e.target.value);
            setEmailValid(true);
        }
        else {
            setEmailValid(false)
        }
    };
    console.log(props.rowIndex);

    return <form>
    <label>name:</label>
    <input name="name" defaultValue={props.rowIndex && getFieldValue("name")}></input>
    <br/>
    <label>website:</label>
    <input type="text" className="form-control" name="website" value={website} onChange={handleWebsiteChange}/>
    {!websiteValid &&(<label>not valid</label>)}
    <br/>
    <label>email:</label>
    <input name="email" defaultValue={email} onChange={handleEmailChange}></input>
    {!emailValid &&(<label>not valid</label>)}
    <br/>
    <label>phone:</label>
    <input name="phone" defaultValue={getFieldValue("phone")}></input>
  </form>
}

export default DisplayForm;