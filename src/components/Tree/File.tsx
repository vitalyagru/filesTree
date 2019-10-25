import React from 'react';

interface IProps {
    name: string;
}

interface IState {
    opts?: object;    
}


class File extends React.Component<IProps,IState> {

    render () {
        const {name} = this.props;

        return (
            <div>{name}</div>
            
        );
    }
}

export default File;
