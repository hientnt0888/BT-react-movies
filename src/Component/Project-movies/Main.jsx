import React, { Component, Fragment } from 'react'
import Header from './header'
import ListSeat from './list-seat'
import "../../css/style.css"
import SelectedSeat from './selected-seat'
export default class Main extends Component {
  render() {
    return (
      <>
        <div className='bg-img'>
          <div className="overlay"></div>
        </div>
        <div className='row'>
          <div className="col-7">
            <div className="container">
            <Header />
            <ListSeat />
            </div>
          </div>
          <div className="col-5">
            <SelectedSeat />
          </div>
        </div>
      </>
    )
  }
}
