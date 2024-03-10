
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4 me-4" to="/">
          Shopfinity
        </NavLink>
        <ul className="navbar-nav d-flex flex-row align-items-center me-auto mb-2 mb-lg-0">
          <li className="nav-item me-3">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="buttons">
          <NavLink to="/authentication" className="btn btn-outline-dark me-2">
            <i className="fa fa-sign-in"></i>
            Login
          </NavLink>
          <NavLink to="/authentication" className="btn btn-outline-dark me-2">
            <i className="fa fa-user-plus"></i>
            Register
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark">
            <i className="fa fa-cart-plus"></i>
            My Cart ({cartItemCount})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
