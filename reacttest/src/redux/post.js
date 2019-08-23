import * as ActionTypes from "./ActionTypes";

export const Posts = (
  state = {
    isLoading: true,
    errMess: null,
    posts: [],
    edit:[]
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
       
     var posts =action.payload.map(post => {
         post.editing =false;
         return post;

      });



      return {
        ...state,
        isLoading: false,
        errMess: null,
        posts: posts
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

      case ActionTypes.EDIT_POST:
        return {
         
          isLoading: false,
          errMess: null,
          posts:state.posts.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)

        };

    default:
      return state;
  }
};
