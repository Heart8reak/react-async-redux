import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getData } from '../redux/actions/index'


const DataList = ({ stockData }) => {
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        {stockData.map(stock => (
            <div key={stock.id.toString()}>
                {stock.symbol}
                {stock.historical}
            </div>
        ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        stockData: state.stockData,
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps, 
    { getData }
    )(DataList)