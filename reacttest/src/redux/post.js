import * as ActionTypes from "./ActionTypes";

export const Posts = (
  state = {
    isLoading: true,
    errMess: null,
    posts: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        posts: action.payload
      };

    case ActionTypes.POSTS_LOADING:
      return { ...state, isLoading: true, errMess: null, posts: [] };

    case ActionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        posts: []
      };

    case ActionTypes.ADD_POST:
      var post = action.payload;
      post.id = state.posts.length;
      post.userId = "10";
      return { ...state, posts: state.posts.concat(post) };

    case ActionTypes.DELETE_POST:
      var postdelete = action.payload;
      return {
       
        isLoading: false,
        errMess: null,
        posts: state.posts.filter((post)=>post.id !== postdelete.id)
      };

    default:
      return state;
  }
};
