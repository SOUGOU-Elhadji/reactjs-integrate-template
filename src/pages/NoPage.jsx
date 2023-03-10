import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NoPage extends Component {
  render() {
    return (
        <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
        {/* <a href="index.html">&larr; Back to Dashboard</a> */}
        <Link className="collapse-item" to="/">&larr; Back to Home</Link>
      </div>
    )
  };
}
