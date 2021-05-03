import React, { useEffect, useState } from 'react';
import './App.css';
import { Data } from './Data/Data.js'
import NewSchedule from './Components/NewSchedule/NewSchedule'

function App() {
	const [schedules, setSchedules] = useState(Data);
	const [addNew, setAddNew] = useState(false);

	const removeSchedule = (id) => {
		let newSchedules = schedules.filter((s) => s.id !== id);
		setSchedules(newSchedules);
	}

	const clearList = () => {
		setSchedules([]);
	}

	const addToList = () => {
		setAddNew(true);
	}

	const AddSchedule = (schedule, time) => {
		let newSchedule = {
			id: new Date().getSeconds().toString(),
			title: schedule,
			time: time
		};
		let newSchedules = [...schedules, newSchedule];
		setSchedules(newSchedules);
		setAddNew(false);
	}

	return (
		<div className="to-do-app">
			<div className="main-div">
				<div className="title">To do app</div>
				{addNew ||
					<div className="to-do-list">

						{schedules.map((s) => {
							return <div key={s.id} className="schedule">
								<div>
									<p>{s.title}</p>
									<h6>{s.time}</h6>
								</div>
								<button className="btn-2" onClick={() => removeSchedule(s.id)}>X</button>
							</div>
						})}

					</div>
				}
				{addNew ||
					<div>
						<button onClick={clearList} className="btn btn-red">Clear list</button>
						<button onClick={addToList} className="btn btn-green">Add new</button>
					</div>
				}
				{addNew && <NewSchedule AddSchedule={AddSchedule}></NewSchedule>}
			</div>
		</div>
	);
}

export default App;
