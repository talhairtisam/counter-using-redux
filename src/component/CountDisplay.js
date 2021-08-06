import React from 'react';
import { connect } from 'react-redux';


const CountDisplay =({count})=>{
    return (
        <div>
            <p style={{fontSize:'48px',margin:'0px', fontWeight:'bolder'}}>{count}</p>
        </div>
    )
}

const mapStatesToProps = (state) => {
    return {
        count: state.count.count 
    }
}

export default connect(mapStatesToProps)(CountDisplay);