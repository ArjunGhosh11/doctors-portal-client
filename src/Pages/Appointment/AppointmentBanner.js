import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundOrigin: 'padding-box' }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                <div>
                    <DayPicker
                        className='shadow-xl p-5 rounded-lg m-10 mr-20'
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;