import React from "react";
import logo from './logo.svg';
//import logo from 'src/logo.svg';

interface IProps {
    modificationDate?: Date,
    savingStatus?: string
}

interface IState {
    status: string
}

class Icon extends React.Component<IProps,IState>{
    render(): React.ReactNode {
        return <img src={logo} className="App-logo" alt="logo" />
    }

}

export default Icon;