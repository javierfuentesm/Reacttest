import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Label,
  Col,
  Row
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxlength = len => val => !val || val.length <= len;
const minlength = len => val => val && val.length >= len;

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isModalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(values) {
    alert("Current state is" + JSON.stringify(values));
    this.props.resetFeedbackForm();
    this.props.addPost(values.title, values.body);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div>
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Añadir nuevo Post</ModalHeader>
          <ModalBody>
            <Form
              model="feedback"
              onSubmit={values => this.handleSubmit(values)}
            >
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
          </ModalBody>
        </Modal>

        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-sign-in fa-lg" />
          Añadir un nuevo Post 
        </Button>
      </div>
    );
  }
}

export default NewPost;
