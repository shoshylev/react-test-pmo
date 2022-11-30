import React from 'react';
import DisplayField from './displayField';
function DisplayForm(props) {
    return <form>
        <DisplayField rowIndex={props.rowIndex} fieldName="Name"/>
        <DisplayField rowIndex={props.rowIndex} fieldName="Website"/>
        <DisplayField rowIndex={props.rowIndex} fieldName="Email"/>
        <DisplayField rowIndex={props.rowIndex} fieldName="Phone"/>
    </form>;
}

export default DisplayForm;