import React from 'react';
import Directory from '../Directory/Directory';
import File from './File';
import {TypesChild, IDirectory, IFile} from '../../entities/Tree';

interface IProps {
    data:  Array<IDirectory | IFile>;
    addObject: Function;
    deleteObject:Function;
    marginLeft?: number;
}

interface IState {
    opts?: object;
}


class Tree extends React.PureComponent<IProps,IState> {

    componentDidMount(){
        // debugger;
    }

    render () {
        
        const { data, marginLeft = 0, addObject, deleteObject} = this.props;
        // debugger;
        return (
            <ul style={{marginLeft:marginLeft+'px'}}>
                {data.map( branch => ( 
                    branch.type === TypesChild.Directory
                    ?
                    <Directory  
                        name={branch.name} 
                        path={branch.path}  
                        {...{marginLeft,addObject, deleteObject}}
                        data= {branch.children ? branch.children : []}
                    />
                    : 
                    <File  
                        name={branch.name} 
                        path={branch.path}
                        {...{deleteObject}}  
                    />  
                 ) )}
            </ul>     
        );
    }
}

export default Tree;
