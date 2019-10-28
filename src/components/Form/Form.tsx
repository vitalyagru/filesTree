import React from  'react';
import FormControl from './FormControl';
import Button from '../../style/StyledCompoonent/Button'
import { IFormProps } from './types';


const Form:React.FC<IFormProps> =  ({onSubmit}) => {
    const [valid, setValid] = React.useState(false);
    const [name, setName] = React.useState('');
    
    const onSubmitHandler = () =>{
        if(!valid) return;
        onSubmit(name);    
    } 
    return (
        <form onSubmit={onSubmitHandler}>
            <FormControl setValid={setValid} setName={setName} />
              <div style={{ textAlign:'center', marginTop:'20px'}}>
                <Button onClick={onSubmitHandler} type="submit" disabled={!valid}>OK</Button>
              </div>
        </form>
    )
}


export default Form;