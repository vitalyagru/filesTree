import React from 'react';
import ButtonIcon from '../../style/buttonIcon';
import { IRootProps } from './types';
import { TypesChild } from '../../entities/Tree';
import RootContent from '../../style/RootContent';

const  Root:React.FC<IRootProps>  = ( {addObject} ) =>  {
    return (
        <RootContent >
            ROOT/
            <ButtonIcon onClick={()=>addObject('','',TypesChild.File)} hoverColor="#3498ff">
                <i className="icofont-plus"></i>
                <i className="icofont-file-alt"></i>
            </ButtonIcon>
            <ButtonIcon onClick={()=>addObject('','',TypesChild.Directory)}  hoverColor="#09d3ac" >
                <i className="icofont-plus"></i>
                <i className="icofont-folder"></i>
            </ButtonIcon>
        </RootContent>
        );
}

export default Root;
