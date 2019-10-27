import {  TypesChild, IDirectory, IFile} from '../entities/Tree';

export const normalizeData = (data:any): Array<IDirectory | IFile>  => {
    
    let arrayBranch  = [];

    const getChilren = (data:any, path:string): Array<IDirectory | IFile>  => {
      let children = [];
      
      if (Array.isArray(data)){
        let index = 0;
        for(let item of data){
          if(typeof item ==='string'){
            children.push({ 
                name: item, 
                type:TypesChild.File, 
                path: path + '.' + String(index)
              } as IFile )
          }
          else{
            let name = Object.keys(item)[0];
            let directory:IDirectory = {
                name, 
                type:TypesChild.Directory, 
                path: path + '.' + index,
                children:  getChilren(data[index][name],path + '.' + index)
              };
            children.push(directory)
          }   
          index++;
        }
          
      }

      return children;
    }
  
    let index = 0;
    for(let name of Object.keys(data) ){
      let directory:IDirectory = { 
          name, 
          type:TypesChild.Directory, 
          path: String(index), 
          children: getChilren(data[name], String(index))
        }
      arrayBranch.push(directory)
      index++;
    }

    return arrayBranch;
  } 
  
  export const addEntity = (data:Array<IDirectory | IFile>, _path:string, type: TypesChild, name: string):Array<IDirectory | IFile> => {
    let _data = JSON.parse(JSON.stringify(data))

    let directoryChildren = getDirectoryFromPath(_data,_path);
    let entity;
    let path = _path ? _path + '.'+directoryChildren.length : ''+directoryChildren.length;
    if(type === TypesChild.File)
      entity = {name, type, path};
    else 
      entity = {name, type, path, children:[]};
    
    directoryChildren.push(entity);

    return _data;

  }

  const getDirectoryFromPath = ( data:Array<IDirectory>, path:string):IDirectory | any => {
    if(!path) return data;

    let indexs = path.split('.');
    let first = Number(indexs.shift());

    if(indexs.length)
      return  indexs.reduce( (a: any, b:string) => {
          if('children' in a[Number(b)])
            return  a[Number(b)].children
          else throw Error('Incorrect Data');   
      } , data[first].children );

    return data[first].children;
  }

  export const deleteEntity = (data:Array<IDirectory | IFile>, path:string):Array<IDirectory | IFile> => {
    let _data = JSON.parse(JSON.stringify(data));
    let _path = path.split('.');
    let deleteIndex = Number(_path.pop());
    let directoryChildren = getDirectoryFromPath(_data,_path.join('.'));
    directoryChildren.splice(deleteIndex,1);

    return normalizeIndex(_data);
  }


const normalizeIndex = (data:Array<IDirectory | IFile>, _path: string = ''): Array<IDirectory | IFile>  => {
  return data.map( (entity,index) => {
    let path  = _path ? _path + '.'+index : _path + index;
    if(entity.type === TypesChild.Directory)
      return {
        ...entity,
        path,
        children: normalizeIndex( entity.children, path)
      };
    else
      return {
        ...entity,
        path,
      };  
    }
   )
}  