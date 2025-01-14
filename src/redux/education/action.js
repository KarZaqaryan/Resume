export const addEducation = 'add_education';
export const deleteEducation = 'delete_education';

export function addEducationFunc(value) {
    return {
        type: addEducation,
        payload: value,
    }
}

export function RemoveEducationFunc(value){
    return {
        type: deleteEducation,
        payload: value,
    }
}