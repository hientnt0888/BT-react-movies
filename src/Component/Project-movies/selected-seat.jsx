import React, { Component } from 'react'

export default class SelectedSeat extends Component {
    render() {
        return (
            <div>
                <h2>Danh sách ghế bạn chọn</h2>
                {/* <button>Ghế đã đặt</button>
                <button className='gheDangChon'></button><span></span>
                <button>Ghế chưa đặt</button> */}
                <div>
                    <button type="button" className="gheDuocChon"/>
                    <span>Ghế đã đặt</span>
                </div>
                <div>
                    <button type="button" className="gheDangChon"/>
                    <span>Ghế đang chọn</span>
                </div>
                <div>
                    <button type="button" className="ghe"/>
                    <span>Ghế chưa đặt</span>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Số ghế</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Hủy</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        )
    }
}
