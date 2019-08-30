import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addPost = (title, body) => ({
  type: ActionTypes.ADD_POST,
  payload: {
    title: title,
    body: body,
    editing: false
  }
});

export const postsFailed = errmess => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errmess
});

export const addPosts = posts => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts
});

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING
});

export const fetchPosts = () => dispatch => {
  dispatch(postsLoading(true));

  return fetch(baseUrl + "posts")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(posts => dispatch(addPosts(posts)))
    .catch(error => dispatch(postsFailed(error.message)));
};

//Recibe el id del post que vamos a eliminar
export const deletePost = id => ({
  type: ActionTypes.DELETE_POST,
  payload: {
    id: id
  }
});

//Recibe los datos del psot que editamos

export const editPost = post => ({
  type: ActionTypes.EDIT_POST,
  payload: post
});
