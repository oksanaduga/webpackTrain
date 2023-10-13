const SET_REPOS = 'SET_REPOS';

const defaultState = {
    items: [],
    isfetching: true,
}

export function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
            }
        default:
            return state;
    }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos })
