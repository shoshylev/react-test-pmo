import React, { useEffect, useState } from 'react';
import { Validators } from '../helpers/validationHelper';
function DisplayField(props) {
    const fieldIndex = props.fieldName.toLowerCase();
    const getFieldValue = (fieldName) =>  props.data[fieldName] || '';
    const [fieldValue, setFieldValue] = useState('');
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

    useEffect(() => setFieldValue(getFieldValue(fieldIndex, props.rowIndex)),
     [props.rowIndex, props.data]
     );

    return <div>
        <label>{props.fieldName}:</label>
        <input 
            name={props.fieldName + props.rowIndex}
            defaultValue={fieldValue}
            onChange={handleWebsiteChange}
        />
        {!valueValid &&(<label>not valid</label>)}
    </div>;
}

export default DisplayField;