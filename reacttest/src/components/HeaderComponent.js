import React from "react";
import { Jumbotron } from "reactstrap";

function Header(props) {
  return (
    <>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Posts para Edteam</h1>
              <p>Prueba para alta, edición y eliminación de posts</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}
export default Header;
