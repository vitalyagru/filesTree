import {IDirectory,IFile} from '../../entities/Tree';

export interface IRootProps {
    addObject: Function
}
export interface ITreeProps {
    data:  Array<IDirectory | IFile>;
    addObject: Function;
    deleteObject:Function;
    marginLeft?: number;
}