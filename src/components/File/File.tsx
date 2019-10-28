import React from 'react';
import Icon from './IconType'
import ButtonIcon from '../../style/StyledCompoonent/ButtonIcon';
import FileStyle from '../../style/StyledCompoonent/File';
import {IFileProps} from './types';

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
