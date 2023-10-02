import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"

class RowChair extends Component {
    

    pushVitri = (seat) => {
        // this.props.a.push(seat)
        // console.log(this.a, "â")
        let index = this.props.array.findIndex((vitri) => { 
            return seat.soGhe === vitri.soGhe
         })
         if (index == -1) {
            this.props.array.push(seat)
         } else {
            this.props.array.splice(index, 1)
         }
         return this.props.array
    }

    setRow = () => {
        return this.props.danhSachGhe.map((seat) => {
            let { soGhe, gia, daDat } = seat;
            return <td key={soGhe}><input type="checkbox" id={soGhe} value={soGhe} onClick={() => {
               const arraya = this.pushVitri({
                    soGhe,
                    gia,
                    daDat,
                })
                const action = {
                    type: "pushArray",
                    payload: arraya
                }
                // console.log("🚀 ~ file: row-chair.jsx:29 ~ RowChair ~ returnthis.props.danhSachGhe.map ~ array:", array)
                this.props.dispatch(action)
            }} /></td>
        })
    }
    render() {
        // console.log(this.props.array)
        // console.log(this.props.a, "aaaa")
        console.log(this.props.arrayy)
        return (
            <Fragment>
                {this.setRow()}
            </Fragment>
        )
    }
}


export default connect()(RowChair) 