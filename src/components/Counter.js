import React from "react";

const Counter = ({counterId,isOnline,currentServing,onServeNext}) =>{
    const [status,setStatus] = React.useState(isOnline?'online':'offline');

    const handleServeNext = ()=>{
        if(status === 'online'){
            onServeNext(counterId);
        }
    };

    const handleStatus= () =>{
        setStatus(status === 'online'?'offline':'online');
    };
    const color = status === 'online' && currentServing? 'red': status === 'online'? 'green':'gray';
    const label = status === 'offline'?'offline': currentServing ? currentServing : 'waiting';

    return(
        <div style={{ 
            position: 'relative', // Position relative to place the dot
            border: '1px solid black', 
            padding: '10px', 
            margin: '10px',
            backgroundColor: '#fff',
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
                backgroundColor: color, // Dynamic color for the dot
            }}></div>
            <button onClick={handleServeNext} disabled= {status === 'offline'}>Serve Next</button>
            <button onClick={handleStatus}>{status === 'online'? 'offline':'online'}</button>
        </div>
    );
};

export default Counter;