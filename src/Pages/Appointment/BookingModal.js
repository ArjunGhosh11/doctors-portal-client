import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots, _id } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                        <input name='date' value={format(date, 'PP')} disabled type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={_id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input name='email' type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" class="input input-bordered w-full max-w-xs btn btn-secondary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;