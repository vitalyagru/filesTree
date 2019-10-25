import React from 'react';
import File from './File';

interface IProps {
    name: string;
    items?: any;
}

interface IState {
    opts?: object;    
}


class Directory extends React.Component<IProps,IState> {

    render () {
        const { name, items } = this.props;
        // if(items)
        //     return (<ul>
        //         {items.map( item => (
        //             typeof item === 'string'
        //             ?
        //             <File  name={item}/>
        //             :
        //             <Directory name={name} />
        //         ))}
        //     </ul>);

        return (
            <div>Directory - {name}</div>            
        );
    }
}

export default Directory;
