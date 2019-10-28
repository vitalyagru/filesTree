import React from 'react';
import Tree from '../Tree';
import Folder from '../../style/StyledCompoonent/Folder';
import { TypesChild } from '../../entities/Tree';
import ButtonIcon from '../../style/StyledCompoonent/ButtonIcon';
import {IDirectoryProps} from './types';

const  Directory:React.FC<IDirectoryProps>  = ({ name, data, path, marginLeft, addObject, deleteObject }) => {
    
    const [show, setShow ] = React.useState(false)
    const onClick = () => setShow(!show)

    const onAddFile = () => addObject(path,TypesChild.File);
    const onAddFolder = () => addObject(path, TypesChild.Directory);
    const onDeleteFolder = () => deleteObject(path);
        
    return (
        <div>

            <Folder  className="hoverParent">
                 
                <span onClick={onClick} >
                <i className={`icofont-${show ?'folder-open' : 'folder'}`}></i>
                    {name}
                </span>
                <div className="hoverChild Folder-buttons">
                    <ButtonIcon onClick={()=>onAddFile()} hoverColor="#3498ff">
                        <i className="icofont-plus"></i>
                        <i className="icofont-file-alt"></i>
                    </ButtonIcon>
                    <ButtonIcon onClick={()=>onAddFolder()}  hoverColor="#09d3ac" >
                        <i className="icofont-plus"></i>
                        <i className="icofont-folder"></i>
                    </ButtonIcon>
                    <ButtonIcon onClick={()=>onDeleteFolder()} hoverColor="#ff0000">
                        <i className="icofont-ui-delete"></i>
                    </ButtonIcon>
                </div>   
            </Folder>
            
            
            {show && <Tree  data={data} marginLeft={marginLeft || 20 } {...{addObject,deleteObject}}  />}
        </div>            
    );
    
}

export default Directory;
