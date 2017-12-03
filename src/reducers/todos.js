

export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                id: Math.random,
                user: action.user,
                email: action.email,
                comment: action.comment
            }]
        default:
            return state;
    }

}
