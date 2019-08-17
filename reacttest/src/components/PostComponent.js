import React from "react";
import { Media } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
import NewPost from "./NewPostComponent";




function Post(props) {
  return (
    <div className="container">
      <div className="col-12">
        <h2>Carga de Posts</h2>
      </div>
      <NewPost
        resetFeedbackForm={props.resetFeedbackForm}
        addPost={props.addPost}
      />

      <div className="col-12">
        <Media list>
          <Stagger in>
            {props.posts.posts.map(post => {
              return (
                <Fade in>
                  <Media tag="li">
                    <Media body className="ml-5">
                      <Media heading>{post.title}</Media>
                      <p>{post.body} </p>
                      <button
                        onClick={e => props.deletePost(post.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </Media>
                  </Media>
                </Fade>
              );
            })}
          </Stagger>
        </Media>
      </div>
    </div>
  );
}

export default Post;
