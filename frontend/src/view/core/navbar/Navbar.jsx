import React from "react";
import "./navbar.scss";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link custom" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom" to="/profile">Profile</Link>
          </li>
          <li className="nav-item" style={{ marginLeft: 40, textDecoration: 'underline' }}>
            <Link className="nav-link custom" href="#">Login</Link>
          </li>
          <button
            type="button"
            classNameName="btn btn-primary"
            data-toggle="modal"
            data-target="#signin"
          >
            Sign up
          </button>
        </ul>
      </div>

      {/* <div>
        <div className="modal" id="signin">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">Modal body..</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
