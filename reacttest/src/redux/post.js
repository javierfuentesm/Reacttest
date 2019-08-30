import * as ActionTypes from "./ActionTypes";

export const Posts = (
  state = {
    isLoading: true,
    errMess: null,
    posts: [],
    edit: []
  },
  action
) => {
  switch (action.type) {
    //Carga los post y los agrega al state
    case ActionTypes.ADD_POSTS:
      var posts = action.payload.map(post => {
        post.editing = false;
        return post;
      });
      return {
        ...state,
        isLoading: false,
        errMess: null,
        posts: posts
      };
    //Si hay un delay en la carga se mostratra que estan cargando
    case ActionTypes.POSTS_LOADING:
      return { ...state, isLoading: true, errMess: null, posts: [] };
    //Si falla la carga se modicia el state y devuelve el error al hacer el fetch
    case ActionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        posts: []
      };
    //Añade el post con lso datos que se recibieron del formulario el post id  se asigna de acuerdo a la longitud de elementos del state
    case ActionTypes.ADD_POST:
      var post = action.payload;
      post.id = state.posts.length;
      post.userId = "10";
      return { ...state, posts: state.posts.concat(post) };

    //Se recibe el id y se usa la funcion filter para regresar los posts donde ta no se encuentre el post con el post.id indicado
    case ActionTypes.DELETE_POST:
      var postdelete = action.payload;
      return {
        isLoading: false,
        errMess: null,
        posts: state.posts.filter(post => post.id !== postdelete.id)
      };

    //Se reciben los datos que se van a cambiar del post  se usa el metodo map para donde se encuentre la coincidencia del post.id recibido con el
    //post id del state  se asignen los nuevos valores deseados

    case ActionTypes.EDIT_POST:
      var postedit = action.payload;

      return {
        posts: state.posts.map(post => {
          if (post.id === postedit.id) {
            return {
              ...post,
              title: postedit.title,
              body: postedit.body,
              editing: !post.editing
            };
          } else return post;
        })
      };

    default:
      return state;
  }
};
