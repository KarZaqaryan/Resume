export const addHobbies = 'addHobbies';
export const deleteHobbies = 'deleteHobbies';

export function addHobbiesFunc (value){
    return {
        type: 'addHobbies',
        payload: value
    }
}

export function RemoveHobbiesFunc (value){
    return {
        type: deleteHobbies,
        payload: value
    }
}