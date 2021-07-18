import React from 'react';
import { incrementAction } from '../redux/action';
import { connect } from 'react-redux';

const buttonStyle = {
    padding: '15px',
    border: 'none',
    backgroundColor: '#31aaff',
    borderRadius: '5px',
    cursor: 'pointer'
}

const Increment =({ increment })=>{
    return (
        <div>
            <button 
            style={buttonStyle}
            onClick={()=>increment()}
            >INCREMENT</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementAction())
    }
}

export default connect(null,mapDispatchToProps)(Increment);