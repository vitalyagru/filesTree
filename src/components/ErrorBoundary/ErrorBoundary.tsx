import React from 'react';
import { IErrorBoundaryState } from './types';

export default  class ErrorBoundary extends React.Component<{},IErrorBoundaryState> {

    state = {
        hasError: false
    }    
    
    componentDidCatch() {

        this.setState({hasError: true})
    }

    render(){

        if(this.state.hasError)
            return <h1 style={{color: 'red'}}> Error</h1>;

        return this.props.children;
    }
}