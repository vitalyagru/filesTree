export interface IIconTypeProps {
    ext: string;
}
export interface ITypes {
    [key:string] : string
} 

export interface IFileProps {
    name: string;
    deleteObject: Function;
    path: string;
}