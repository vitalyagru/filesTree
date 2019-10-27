import { JSXElement } from "@babel/types";

export type OptModal = {
    show: boolean
    title: string 
}

export interface IModalProps {
    opt: OptModal 
    onClose: Function
}

export interface IBackDropProps{
    onClose: Function
}