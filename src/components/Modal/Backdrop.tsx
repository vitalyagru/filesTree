import React from 'react';
import { IBackDropProps } from './types';
import s from '../../style/Modules/Modal.module.css';

const Backdrop:React.FC<IBackDropProps> = React.memo( 
    ({onClose}) => (<div className={s.backdrop} onClick={()=>onClose()}></div>) );

export default Backdrop;