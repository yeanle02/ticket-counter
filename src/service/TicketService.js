import React from "react";
import CustomerView from "../components/CustomerView";
import Counter from '../components/Counter';
import ManagerView from "../components/ManagerView";

/**
 * Providing service for all the tickets
 * @returns 
 */
const TicketService = () =>{
    const [lastTicket,setLastTicket] = React.useState(0);
    const [nowServing,setNowServing] = React.useState(null);
    const [queue,setQueue]= React.useState([]);
    const [counters,setCounters]= React.useState([
        {id:1,currentServing : null,isOnline:true },
        {id:2,currentServing : null,isOnline:true },
        {id:3,currentServing : null,isOnline:true },
    ]);
    const [view,setView]= React.useState("customer");

    //function for customer to take a ticket
    const takeTicket = () =>{
        const newTicket = (lastTicket|0) + 1;
        console.log('newTicket',newTicket);
        setLastTicket(newTicket);
        setQueue([...queue,newTicket]);
        console.log("Queue:", queue);
        console.log("Counters:", counters);
    }


    //function for manager to serve the next ticket in the queue
    const serveTicket = (counterId)=>{
        if(queue.length >0){
            const nextTicket = queue.shift();
            setQueue([...queue]);


            setCounters(counters.map(counter=> counter.id === counterId?{...counter,currentServing:nextTicket}:counter));
            setNowServing(nextTicket);
            console.log("Queue:", queue);
            console.log("Counters:", counters);
        }
    };

    

    return(
        <div>
            <button onClick={() => setView(view === "customer" ? "manager" : "customer")}>
                Switch to {view === "customer" ? "Manager" : "Customer"} View
            </button>
            {view === 'customer' ?(<CustomerView 
            nowServing={nowServing}
            lastTicket={lastTicket}
            takeTicket={takeTicket}/>):(
                    <ManagerView 
                    counters={counters}
                    serveTicket={serveTicket}
                    />

            )}
  
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {counters.map(counter => (
                <Counter
                    key={counter.id}
                    counterId={counter.id}
                    isOnline={counter.isOnline}
                    currentServing={counter.currentServing}
                    onServeNext={serveTicket}
                    isManager={view ==="manager"}
                />
                ))}
          </div>
        </div>
    );
};
export default TicketService;