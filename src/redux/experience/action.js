import {ExperianceInitialState} from "./experianceSlice";

export const addExperance="add_item"
export const deleteExperance= 'deleteItem'


export function AddExperanceFunc(value){

    return{
        type: addExperance,
        payload:value
    }
}export function RemoveExperanceFunc(value){

    return{
        type: deleteExperance,
        payload: value
    }
}