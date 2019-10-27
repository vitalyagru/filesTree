import React from 'react';
import Tree from '../Tree';
import Folder from '../../style/Folder';
import { TypesChild } from '../../entities/Tree';
import ButtonIcon from '../../style/buttonIcon';

interface IProps {
    name: string;
    path: string;
    data: any;
    addObject: Function;
    deleteObject: Function;
    marginLeft: number;
}

interface IState {
    show: boolean;    
}


const  Directory:React.FC<IProps>  = ({ name, data, path, marginLeft, addObject, deleteObject }) => {
    
    const [show, setShow ] = React.useState(false)
    const onClick = () => setShow(!show)

    const onAddFile = (filename:string) => addObject(path,filename,TypesChild.File);
    const onAddFolder = (folderName:string) => addObject(path,folderName, TypesChild.Directory);
    const onDeleteFolder = () => deleteObject(path);
        
    console.log('path',path)
    return (
        <div>

            <Folder  className="hoverParent">
                 
                <span onClick={onClick} >
                <i className={`icofont-${show ?'folder-open' : 'folder'}`}></i>
                    {name}
                </span>
                <div className="hoverChild Folder-buttons">
                    <ButtonIcon onClick={()=>onAddFile('someFile')} hoverColor="#3498ff">
                        <i className="icofont-plus"></i>
                        <i className="icofont-file-alt"></i>
                    </ButtonIcon>
                    <ButtonIcon onClick={()=>onAddFolder('someFile')}  hoverColor="#09d3ac" >
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
