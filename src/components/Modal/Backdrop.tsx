import React from 'react';
import Portal from './Portal';
import { IBackDropProps } from './types';
import s from './Modal.module.css';

const Backdrop:React.FC<IBackDropProps> = React.memo( 
    ({onClose}) => (<div className={s.backdrop} onClick={()=>onClose()}></div>) );

export default Backdrop;