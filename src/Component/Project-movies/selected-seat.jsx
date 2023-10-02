import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectedSeat extends Component {

    setTableSelectSeat = () => {
        return this.props.selectSeat.map((seat) => {
            let { soGhe, gia } = seat
            return <tr key={soGhe}>
                <td>{soGhe}</td>
                <td>{gia}</td>
                <td><button className='btn btn-warning'>Đặt</button></td>
            </tr>
        })
    }


    render() {
        console.log(this.props.selectSeat, "select")
        return (
            <div>
                <div>
                    <button type="button" className="gheDuocChon" data-toggle="collapse" href="#ghedadat">Ghế đã đặt</button>
                </div>
                <div>
                    <button type="button" className="gheDangChon" data-toggle="collapse" href="#ghedangchon">Ghế đang chọn</button>
                </div>
                <div>
                    <button type="button" className="gheConTrong" data-toggle="collapse" href="#ghecontrong">Ghế còn trống</button>
                </div>
                {/* <button>Ghế đã đặt</button>
                <button className='gheDangChon'></button><span></span>
                <button>Ghế chưa đặt</button> */}

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
                            {/* {this.setTableSelectSeat()} */}
                        </tbody>
                    </table>
                </div>
                <div id="ghecontrong" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế còn trống</h2>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Đặt ghế</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.setTableSelectSeat()} */}
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