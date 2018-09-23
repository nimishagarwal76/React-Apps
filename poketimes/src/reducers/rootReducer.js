const initState = {
    posts : [
        {id:1, title:'NTG', body:'lorem ipsum'},
        {id:2, title:'DTG', body:'lorema ipsuma'}
    ]
}
const rootReducer = (state = initState, action)=>{
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter((post)=>{
            return Number(action.id) !== Number(post.id)
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state; 
}

export default rootReducer;