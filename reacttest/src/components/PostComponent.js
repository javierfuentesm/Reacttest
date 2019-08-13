import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade, Stagger } from "react-animation-components";

function RenderPost({ post }) {
  return (
    <div key={post.id} className="col-12 mt-5">
      
        <Media tag="li">
         

          <Media body className="ml-5">
            <Media heading>{post.title}</Media>
            <p>{post.body} </p>
          </Media>
        </Media>
    </div>
  );
}

function Post(props) {
  return (
    <div className="container">
    
        <div className="col-12">
          <h2>Carga de Posts</h2>
        </div>
        <div className="col-12">
          <Media list>
            <Stagger in>
              {props.posts.posts.map(post => {
                return <Fade in><RenderPost post={post} /></Fade>;
              })}
            </Stagger>
          </Media>
        </div>
      </div>
  );
}

export default Post;
