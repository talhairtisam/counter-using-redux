import React from 'react';
import { decrementAction } from '../redux/action';
import { connect } from 'react-redux';

const buttonStyle = {
    padding: '15px',
    border: 'none',
    backgroundColor: '#0ffff0',
    borderRadius: '5px',
    cursor: 'pointer'
}

const Decrement =({ decrement })=>{
    return (
        <div>
            <button 
            style={buttonStyle}
            onClick={()=>decrement()}
            >DECREMENT</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => dispatch(decrementAction())
    }
}
export default connect(null,mapDispatchToProps)(Decrement);