import React from 'react';

const ScheduleDate = ({scheduleData}) => {
    return (
        <div className="col-md-6 mt-2 text-center">
            <div style={{padding: '10px',boxShadow: '0px 0px 10px gray'}}>
                <h5 className="text-black font-weight-bold mt-2">{scheduleData.day}</h5>
                <p className="text-warning">{scheduleData.time}</p>
            </div>
        </div>
    );
};

export default ScheduleDate;