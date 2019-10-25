export const createAction = (name:string, payload:any): object => {
    return {
        type: name,
        payload
    }
}