import React from  'react';
import Input from '../../style/input';
import Error from '../../style/errorHint';
import { IFormControlProps } from './types';

const InputControl:React.FC<IFormControlProps> =  ({setValid,setName}) => {
    const [touched, setTouched] = React.useState(false)
    const [error, setError] = React.useState('')

    const [value, setValue] = React.useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(!touched) setTouched(true);
        let error = onCheckErrors(e.target.value)
        setValid(!error);
        setError(error);
        setValue(e.target.value);
        setName(e.target.value);
    }   
    const onCheckErrors = (value:string) =>  {
        let error = '';
        if(!value) error = 'Required';
        return error ;
    } 

    return (
        <>
            <div style={{height:'20px'}}>{touched && error  && <Error>{error}</Error> }</div>
            <Input type="text" value={value} onChange={onChange} />
        </>
    )
}


export default InputControl;