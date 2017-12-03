

export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
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
