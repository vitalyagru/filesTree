export enum TypesChild {
    Directory,
    File
}

export interface IBranch {
    name: string;
    path: string;
}
export interface IDirectory extends IBranch {
    type: TypesChild.Directory,
    children: Array<IDirectory | IFile> | [],
}
export interface IFile extends IBranch {
    type: TypesChild.File
}
