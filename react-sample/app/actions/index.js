import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function onSelect(item) {
    return {
        type: types.SELECT,
        item
    };
}
