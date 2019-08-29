import React from "react";
import { Media, Button, Label, Col, Row } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";

import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxlength = len => val => !val || val.length <= len;
const minlength = len => val => val && val.length >= len;

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    alert("Current state is" + JSON.stringify(values));

    if (values.id == "") {
      this.props.resetFeedbackForm();
      this.props.addPost(values.title, values.body);
      alert("Tu entrada fue agregada con exito" );

    } else {
      this.props.resetFeedbackForm();
      this.props.editPost(values);
      alert("Tu entrada fue editada con exito" );

    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="title" md={2}>
                Titulo
              </Label>
              <Col md={10}>
                <Control.text
                  model=".title"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  validators={{
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".title"
                  show="touched"
                  messages={{
                    required: "Required",
                    minlength: "Must be greater than 2 chaaracters",
                    maxlength: "Must  BE 15 CHARACTERS OR LESS"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="body" md={2}>
                Cuerpo
              </Label>
              <Col md={10}>
                <Control.text
                  model=".body"
                  className="form-control"
                  id="body"
                  name="body"
                  placeholder="Cuerpo"
                  validators={{
                    required,
                    minlength: minlength(3),
                    maxlength: maxlength(15)
                  }}
                />

                <Errors
                  className="text-danger"
                  model=".body"
                  show="touched"
                  messages={{
                    required: "Required",
                    minlength: "Must be greater than 2 chaaracters",
                    maxlength: "Must  BE 15 CHARACTERS OR LESS"
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Button type="submit" color="primary">
                Guardar
              </Button>
            </Row>
          </Form>

          <Media list>
            <Stagger in>
              {this.props.posts.posts.map(post => {
                return (
                  <Fade in>
                    <Media id={post.id} tag="li">
                      <Media body className="ml-5">
                        <Media heading>{post.title}</Media>
                        <p>{post.body} </p>
                        <button
                          onClick={e => this.props.deletePost(post.id)}
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>

                        <button
                          onClick={e => {
                            this.props.changeFeedbackForm(post);
                          }}
                          className="btn btn-warning"
                        >
                          Editar
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
}

export default Post;
