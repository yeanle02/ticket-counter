import React from 'react';

const CustomerView = ({nowServing,lastTicket,takeTicket}) =>{
    return(
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid black' }}>

            {/* <h2>Customer View</h2> */}
            <p>Now Serving:{nowServing !== null?nowServing :0}</p>
            <p>Last Number:{lastTicket}</p>
            <button onClick={takeTicket}>Take a Number</button>
        </div>
    )
}

export default CustomerView;