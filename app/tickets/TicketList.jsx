import Link from 'next/link';
import React from 'react';
const getTickets = async () => {
    const res = await fetch(" http://localhost:4000/tickets", {
        next: {
            revalidate: 0
        }
    })   // secon argument is object 
    return res.json(


    )
}
const TicketList = async () => {
    const tickets = await getTickets()
    
    return (
        <>
        {tickets.map(ticket => (
            <div key={ticket.id} className='card my-5'>
                <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority} bg-red-300 text-red-600 g-blue-300 text-blue-600`} >
                    {ticket.priority} priority
                </div>
                </Link>
              
                
            </div>

))}
{tickets.length === 0 && (
    
    <p>There are no tickets</p>
)}
        </>
    
    );
}

export default TicketList;
