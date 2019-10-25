import React from 'react';
import Container  from '../../style/container';
import Content  from '../../style/content';
import Header  from '../../style/Header';
import Tree from  '../Tree';
import data from '../../db.json';

console.log(data);
localStorage.setItem('db',JSON.stringify(data));

const App: React.FC = () => {
  return (
    <Container>
        <Header> Files tree </Header>
        <Content>
           Api Tree
          <Tree data={data} />
        </Content>
    </Container>
  );
}

export default App;
