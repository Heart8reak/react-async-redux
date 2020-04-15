import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../redux/actions/index'

const DataForm = props => {
    // const [form, setForm] = useState('')
    const handleGetData = e => {
        e.preventDefault()
        props.getData()
    }
    return (
        <>
        {props.isFetchingData ? (
            <div>**We are retreiving your data**</div>
        ) : (
            <button
            onClick={handleGetData}
            >
                Lookup
            </button>
        )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(DataForm)