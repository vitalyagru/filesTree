import React from 'react';
import Portal from './Portal';
import Backdrop from './Backdrop';
import { IModalProps } from './types';
import s from '../../style/Modules/Modal.module.css';

const Modal:React.FC<IModalProps> = React.memo( ({ opt:{show, title},onClose, children}) => (<Portal>
   {show && <>
        <Backdrop onClose={onClose} />
        <div className={s.modal}>
            <header className={s.modal__header}>{title}</header>
            <section className={s.modal__content}>
                {children}
            </section>
            <button className={s.modal__close} onClick={()=>onClose()}>
                <i className="icofont-close-line-squared-alt"></i>
            </button>
        </div>
        
   </>} 
</Portal>) )

export default Modal;