export const TOGGLE_FILTER_YEAR = 'TOGGLE_FILTER_YEAR';
export const TOGGLE_FILTER_SEGMENT = 'TOGGLE_FILTER_SEGMENT';
export const TOGGLE_FILTER_NAME = 'TOGGLE_FILTER_NAME';

export function toggleYear (option){
    return {type:TOGGLE_FILTER_YEAR,payload:{option:option}};
}

export function toggleSegment (option){
    return {type:TOGGLE_FILTER_SEGMENT,payload:{option:option}};
}

export function toggleName(option){
    return {type:TOGGLE_FILTER_NAME,payload:{option:option}};
}

