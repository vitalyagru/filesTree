import React from 'react';
import Icon from '../File/IconType'
import ButtonIcon from '../../style/buttonIcon';
import FileStyle from '../../style/File';

interface IFileProps {
    name: string;
    deleteObject: Function;
    path: string;
}

const  File:React.FC<IFileProps>  = ( {name, path , deleteObject} ) =>  {
    const ext = name.split('.').pop();
    return (
            <FileStyle className="hoverParent">
                <Icon  ext={ext || ''}/>{name} 
                <ButtonIcon onClick={()=>deleteObject(path)} className="hoverChild" hoverColor="#ff0000" >
                    <i className="icofont-ui-delete"></i>
                </ButtonIcon>
            </FileStyle>
        );
}

export default File;
