import React from 'react'

export default function BookingForm() {
    return (
        <section className='book-form' id="book-form">
            <form action="">
                <div className="inputBox">
                    <span>When to?</span>
                    <input type="text" name="name" id="name" placeholder='place name' />
                </div>
                <div className="inputBox">
                    <span>When?</span>
                    <input type="date" name="name" id="name" />
                </div>
                <div className="inputBox">
                    <span>how many?</span>
                    <input type="number" name="name" id="name" placeholder='number of travelers' />
                </div>
                <input type="submit" className='btn' value="book now" />
                
            </form>
        </section>
    )
}
