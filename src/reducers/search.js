
export default function searchTerm(state = [], action) {
    switch (action.type) {
        case 'SEARCH_TERM':
            return [...state, {
                id: Math.random,
                query: action.query,
            }]
        default:
            return state;
    }

}
