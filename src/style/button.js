import styled from 'styled-components';

export default styled.button`
    background-color: #3498ff;
    color: #fff; 
    border: none;
    height: 40px;
    width:  100px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: .5s;
   :hover:not(:disabled) {
        background-color: #fff;
        color: #3498ff;
        border: 1px solid #3498ff; 
   }
   :disabled{
        background-color: #c6c6c6;
        cursor: not-allowed;
   }
`;