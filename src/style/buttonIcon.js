import styled from 'styled-components';

export default styled.button`
    font-size: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: color .3s;  
    
    .icofont-plus {
        font-size:10px;
    }
    
    :hover i{
        color: ${props => props.hoverColor || '#000'};
    }
`;