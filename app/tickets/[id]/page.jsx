import React from 'react';
const getTickets = async (id) => {
    const res = await fetch(" http://localhost:4000/tickets/" + id, {
        next: {
            revalidate: 60
        }
    })   // secon argument is object 
    return res.json(


    )
}

const TicketsDetails = async ({params}) => {
    const ticket = await getTickets(params.id)
    return (
        <div>
           <main>
        <nav>
            <h2>Tickets details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>{ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority} bg-red-300 text-red-600 g-blue-300 text-blue-600`} >
                    {ticket.priority} priority
                </div>
        </div>
           </main>
        </div>
    );
}

export default TicketsDetails;
