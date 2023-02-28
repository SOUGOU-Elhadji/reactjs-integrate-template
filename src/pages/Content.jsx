import React, { Component } from 'react'

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';

export default class Content extends Component {
  render() {
    return (
        <>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">

                <Outlet />

              </div>
            </div>
            <Footer />
          </div>
        </div>
        <Scroll />

      </>
    )
  }
}
