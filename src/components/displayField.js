import React, { useState } from 'react';
import { json } from '../helpers/mockData';
import { Validators } from '../helpers/validationHelper';
function DisplayField(props) {
    const fieldIndex = props.fieldName.toLowerCase();
    const getFieldValue = (fieldName, rowIndex) => rowIndex && json[rowIndex] && json[rowIndex][fieldName] || '';
    const [fieldValue, setFieldValue] = useState(getFieldValue(fieldIndex) || '');
    const [valueValid, setValueValid] = useState(true);

    const handleWebsiteChange = (e) => {
        if (Validators && !Validators[fieldIndex] || Validators[fieldIndex](e.target.value)){
            setFieldValue(e.target.value);
            setValueValid(true);
        }
        else{
            setValueValid(false);
        }
    };

    return <div>
        <label>{props.fieldName}:</label>
        <input 
            name={props.fieldName + props.rowIndex} 
            defaultValue={props.rowIndex > -1 && getFieldValue(fieldIndex, props.rowIndex)}
            //defaultValue={fieldValue}
            onChange={handleWebsiteChange}
        />
        {!valueValid &&(<label>not valid</label>)}
    </div>;
}

export default DisplayField;