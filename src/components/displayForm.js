import React, { useState } from 'react';
import { isValidEmail } from '../helpers/testEmail';
import { isValidHttpUrl } from '../helpers/testUrl';
import { json } from './displayTable';
function DisplayForm(props) {
    const [website, setWebsite] = useState(json[props.index].website);
    const [websiteValid, setWebsiteValid] = useState(true);
    const [email, setEmail] = useState(json[props.index].email);
    const [emailValid, setEmailValid] = useState(json[props.index].email);

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

    return <form>
    <label>name:</label>
    <input name="name" value={json[props.index].name}></input>
    <br/>
    <label>website:</label>
    <input type="text" className="form-control" name="website" value={website} onChange={handleWebsiteChange}/>
    {!websiteValid &&(<label>not valid</label>)}
    <br/>
    <label>email:</label>
    <input name="email" value={json[props.index].email} onChange={handleWebsiteChange}></input>
    {!websiteValid &&(<label>not valid</label>)}
    <br/>
    <label>phone:</label>
    <input name="phone" value={json[props.index].phone}></input>
  </form>
}

export default DisplayForm;