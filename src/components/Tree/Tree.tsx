import React from 'react';
import Directory from '../Directory/Directory';
import File from '../File';
import {TypesChild} from '../../entities/Tree';
import {ITreeProps} from './types';

const Tree: React.FC<ITreeProps> = React.memo( ({ data, marginLeft = 0, addObject, deleteObject}) =>  {
    return (
        <ul style={{marginLeft:marginLeft+'px'}}>
            {data.map( (branch, i) => ( 
                branch.type === TypesChild.Directory
                ?
                <Directory  
                    key = {branch.path+i}
                    name={branch.name} 
                    path={branch.path}  
                    {...{marginLeft,addObject, deleteObject}}
                    data= {branch.children ? branch.children : []}
                />
                : 
                <File  
                    key = {branch.path+i}
                    name={branch.name} 
                    path={branch.path}
                    {...{deleteObject}}  
                />  
                ) )}
        </ul>     
    );
} );

export default Tree;
