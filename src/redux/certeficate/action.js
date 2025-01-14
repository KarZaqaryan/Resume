export const deleteCerteficate = 'deleteCerteficate';
export const addCerteficate = 'addCerteficate';

export function deleteCerteficateFunc(value) {
    return {
        type: deleteCerteficate,
        payload: value
    }
}

export function addCerteficateFunc(value){
    return {
        type: addCerteficate,
        payload: value
    }
}
