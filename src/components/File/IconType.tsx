import React from 'react';
import { IIconTypeProps,ITypes } from './types';

const typesExt : ITypes = {
    'txt'  : "icofont-file-text",
    'html' : "icofont-file-html5",
    'png'  : "icofont-file-png",
    'exe'  : "icofont-file-exe",
    'lang' : "icofont-file-document",
    'css'  : "icofont-file-css"
}


const  IconType:React.FC<IIconTypeProps>  = ( {ext} ) =>  <i className={typesExt[ext] || "icofont-file-alt"} /> ;

export default IconType;
