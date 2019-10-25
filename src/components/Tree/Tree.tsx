import React from 'react';
import Directory from './Directory';
import File from './File';

interface IProps {
    data: object
}

interface IState {
    opts?: object;    
}


class Tree extends React.Component<IProps,IState> {

    render () {
        const {data} = this.props;
        const names = Object.keys(data);

        return (
            names.map( x =>  (
                x.includes('.')
                ?
                <File name={x}/>
                :
                <Directory name={x} items={['File2', { directory2 : ['File1']}]} />

            ))
        );
    }
}

export default Tree;
