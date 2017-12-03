export default function searchTerm(state = [], searchTerm) {
    switch (action.type) {
        case 'SEARCH':
            
            return [...state, {
                id: Math.random,
                user: action.name,
                email: action.email,
                comment: action.email
            }]
        default:
            return state;
    }

}
