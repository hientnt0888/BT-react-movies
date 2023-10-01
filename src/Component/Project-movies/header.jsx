import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Đặt vé xem phim</h1>
        <h5>Màn hình</h5>
        <div className="screen"></div>
      </div>
    )
  }
}
