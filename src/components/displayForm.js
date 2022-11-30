import React, { useEffect, useState } from 'react';
import { getUserData } from '../helpers/getUser';
import DisplayField from './displayField';
function DisplayForm(props) {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        async function getData(){
            const result = await getUserData(props.rowIndex);
            if (result)
            setUserData(result);
        }
        getData();
      }, [props.rowIndex]);

    return <form>
        { userData && (<div>
            <DisplayField rowIndex={props.rowIndex} fieldName="Name" data={userData}/>
            <DisplayField rowIndex={props.rowIndex} fieldName="Website" data={userData}/>
            <DisplayField rowIndex={props.rowIndex} fieldName="Email" data={userData}/>
            <DisplayField rowIndex={props.rowIndex} fieldName="Phone" data={userData}/>
        </div>
        )}
    </form>;
}

export default DisplayForm;