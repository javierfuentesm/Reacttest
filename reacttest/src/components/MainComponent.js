import React from "react";
import Post from "./PostComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import NewPost from "./NewPostComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addPost,
  postsFailed,
  addPosts,
  fetchPosts
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
  addPost: (title, body) => dispatch(addPost(title, body)),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route
                exact
                path="/post"
                component={() => <Post posts={this.props.posts} />}
              />
              <Route
                exact
                path="/newpost"
                component={() => (
                  <NewPost
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    addPost={this.props.addPost}
                  />
                )}
              />
              <Redirect to="/post" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
