import React, { Component, Fragment } from 'react'

export default class RowChair extends Component {
    setRow = () => {
        return this.props.danhSachGhe.map((seat) => { 
            let {soGhe, gia, daDat} = seat;
            return <td key={soGhe}><input type="checkbox" value={soGhe} /></td>
         })
    }
    render() {
        return (
            <Fragment>
                {this.setRow()}
            </Fragment>
        )
    }
}
