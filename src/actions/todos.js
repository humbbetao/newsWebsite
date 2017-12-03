export function addComment(user, email, comment){
    return {
        type:'ADD_COMMENT',
        user,
        email,
        comment,
    }
}