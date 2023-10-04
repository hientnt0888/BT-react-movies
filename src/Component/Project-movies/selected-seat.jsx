import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GHEDADAT } from '../../redux/reducers/Project-movies/creator'

class SelectedSeat extends Component {

    state = {
        listReservedSeat: [],
        arrayEmpty: [],
    }

    arraySeat = this.props.arraySeat;


    setListEmpty = (aa) => {
        const arrayObjSeat = []
        this.arraySeat.map((obj) => {
            return obj.danhSachGhe.map((LS) => {
                return arrayObjSeat.push(LS)
            })
        })
        this.state.arrayEmpty = arrayObjSeat.filter((itemA) => {
            return !aa.some((itemB) => {
                return itemB.soGhe === itemA.soGhe
            })
        })
        this.setState({
            arrayEmpty: this.state.arrayEmpty
        })

    }

    setTableEmptySeat = () => {
        const i = this.state.arrayEmpty.map((obj) => {
            return obj.soGhe
        })
        return <tr>
            <td style={{ textAlign: "unset" }}>{i.join(" ").replace(/(([^ ]+ ){10}[^ ]+)/g, "$1\n")}

            </td>
        </tr >


    }

    checkReserved = (seat) => {
        const check =  this.state.listReservedSeat.findIndex((obj) => {
            return seat.soGhe == obj.soGhe
        })
        if (check !== -1) {
            alert("Chỗ ngồi đã được đặt")
        } else {
            this.state.listReservedSeat.push(seat)
            alert("Đặt chỗ thành công")
        }
    }

    setTableSelectSeat = () => {
        return this.props.selectSeat.map((seat) => {
            let { soGhe, gia } = seat
            return <tr key={soGhe}>
                <td>{soGhe}</td>
                <td>{gia}</td>
                <td><button className='btn btn-warning'
                    onClick={() => {
                        this.props.dispatch(GHEDADAT(seat))
                        // this.state.listReservedSeat.push(seat)
                        this.checkReserved(seat)
                        this.setListEmpty(this.state.listReservedSeat)
                    }}

                >Đặt</button></td>
            </tr>

        })
    }
    cancel = async (seat) => {
        let newstate = this.state.listReservedSeat.filter((content) => {
            return content !== seat
        })
        await this.setState({
            listReservedSeat: newstate,
        })
        this.setListEmpty(this.state.listReservedSeat)

        alert("Bạn vừa hủy số ghế: " + seat.soGhe)
    }
    setTableReservedSeat = () => {
        return this.state.listReservedSeat.map((seat) => {
            let { soGhe, gia } = seat
            return <tr key={soGhe}>
                <td>{soGhe}</td>
                <td>{gia}</td>
                <td><button className='btn btn-warning' onClick={() => {
                    this.cancel(seat)
                }}>Hủy</button></td>
            </tr>
        })
    }


    render() {
        return (
            <div>
                <div>
                    <button type="button" className="gheDuocChon" data-toggle="collapse" href="#ghedadat">Ghế đã đặt</button>
                </div>
                <div>
                    <button type="button" className="gheDangChon" data-toggle="collapse" href="#ghedangchon">Ghế đang chọn</button>
                </div>
                <div>
                    <button type="button" className="gheConTrong" data-toggle="collapse" href="#ghecontrong"
                        onClick={() => {
                            this.setListEmpty(this.state.listReservedSeat)
                        }}
                    >Ghế còn trống</button>
                </div>


                <div id="ghedangchon" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế bạn chọn</h2>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Đặt ghế</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.setTableSelectSeat()}
                        </tbody>
                    </table>
                </div>
                <div id="ghedadat" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế bạn đã đặt</h2>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.setTableReservedSeat()}
                        </tbody>
                    </table>
                </div>
                <div id="ghecontrong" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế còn trống</h2>
                    <table className="table table-bordered table-hover" >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.setTableSelectSeat()} */}
                            {this.setTableEmptySeat()}
                        </tbody>
                    </table>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return { selectSeat: rootReducer.movieReducer }
}

export default connect(mapStateToProps)(SelectedSeat)