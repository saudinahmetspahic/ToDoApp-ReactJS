import React, { useState } from 'react';
import './NewSchedule.css'

function NewSchedule(props) {
    const [schedule, setSchedule] = useState('');
    const [time, setTime] = useState('');

    const inputChanged = (e) => {
        var option = e.target.name;
        var value = e.target.value;
        if (option === "schedule")
            setSchedule(value);
        if (option === "time")
            setTime(value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.AddSchedule(schedule, time);
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="schedule">Schedule</label>
            <input type="text" id="schedule" name="schedule" value={schedule} onChange={(e) => inputChanged(e)} />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" value={time} onChange={(e) => inputChanged(e)} />

            <button type="submit" className="btn btn-green">Add</button>
        </form>
    );
}

export default NewSchedule;