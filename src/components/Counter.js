import React from "react";

/**
 * Componnet for th counter, using isManager to check the condition and display the fucntion to manager view
 */
const Counter = ({counterId,isOnline,currentServing,onServeNext,isManager}) =>{
    const [status,setStatus] = React.useState(isOnline?'online':'offline');

    //if counter is online, get the next number in the queue
    const handleServeNext = ()=>{
        if(status === 'online'){
            onServeNext(counterId);
        }
    };

    //change the status of counter
    const handleStatus= () =>{
        setStatus(status === 'online'?'offline':'online');

        
    };
    const color = status === 'online' && currentServing? 'red': status === 'online'? 'green':'gray';
    const backgroundColor = status === 'offline' ? '#d4d2d2' : '#fff';

    return(
        <div style={{ 
            position: 'relative', 
            border: '1px solid black', 
            padding: '10px', 
            margin: '10px',
            backgroundColor: backgroundColor,
        }}>
            <h3>Counter {counterId}</h3>
            <p>Current Serving: {currentServing}</p>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: color, 
            }}></div>
            {isManager &&(<>
                <button onClick={handleServeNext} disabled= {status === 'offline'}>Serve Next</button>
                <button onClick={handleStatus}>{status === 'online'? 'offline':'online'}</button>
            </>)}
            {/* <button onClick={handleServeNext} disabled= {status === 'offline'}>Serve Next</button>
            <button onClick={handleStatus}>{status === 'online'? 'offline':'online'}</button> */}
        </div>
    );
};

export default Counter;