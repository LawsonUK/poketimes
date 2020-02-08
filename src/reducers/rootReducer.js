const InitState = {
  posts: [
    { id: "1", title: "Title 1", body: "Body text 1" },
    { id: "2", title: "Title 2", body: "Body text 2" },
    { id: "3", title: "Title 3", body: "Body text 3" }
  ]
}

const rootReducer = (state = InitState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state
}

export default rootReducer
