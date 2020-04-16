import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getData } from '../redux/actions/index'


const DataList = ({ stockData }) => {
    useEffect(() => {
        getData()
    }, [])
    // {console.log(stockData)}
    return (

        <>
            {stockData.map(stock => (
                <div key={stock.date} className="App">
                    {/* {stock.date}
                {stock.open}
                {stock.close} */}
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Open</th>
                                <th>Close</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{stock.date}</td>
                                <td>{stock.open}</td>
                                <td>{stock.close}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        stockData: state.stockData,
        isFetchingData: state.isFetchingData,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(DataList)