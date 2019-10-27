import React, { useCallback } from 'react';
import Container  from '../../style/container';
import Content  from '../../style/content';
import Header  from '../../style/Header';
import Tree from  '../Tree';
import {IBranch, IDirectory, TypesChild} from '../../entities/Tree';
import {normalizeData, addEntity, deleteEntity} from '../../utils/dbFunc';
import Modal from '../Modal';
import Data from '../../db.json';
import { OptModal } from '../Modal/types';
import Form from '../Form';
import Button from '../../style/button';
import Root from '../Tree/Root';
import TreeContent from '../../style/treeContent';

const App: React.FC = () => {

  const [data, updateData] = React.useState(normalizeData(Data));

  const [modalOpt, updateModal] = React.useState({show:false, title: 'Directory'} as OptModal)
  const onCloseModal =() => updateModal( {...modalOpt, show:false}) 

  
  const addObject = (path:string, name:string, type: TypesChild) => {
    updateModifyObject({path, type})
    updateModal({...modalOpt, show:true, title:  type === TypesChild.Directory ? 'Directory' : 'File' })
  }

  const [modifyObject, updateModifyObject] = React.useState({path:'', type: TypesChild.Directory})
  const handlerAddObject = (name:string) => {  
    onCloseModal(); 
    updateData( addEntity(data, modifyObject.path, modifyObject.type, name));
  }

  const deleteObject = (path:string) =>{
    updateData( deleteEntity(data,path));
  }

  return (
    <Container>
        <Header> Files tree </Header>
        <Content>
           <Modal opt={modalOpt} onClose={onCloseModal}> 
              <Form  onSubmit={handlerAddObject}/>
           </Modal>
          <Root {...{addObject}}/>
          <TreeContent>
            <Tree data={data} {...{addObject,deleteObject}} />
          </TreeContent>

        </Content>
    </Container>
  );
}

export default App;
