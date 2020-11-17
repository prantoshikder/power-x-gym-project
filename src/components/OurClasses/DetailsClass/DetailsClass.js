import React from 'react';
import ScheduleDate from '../ScheduleDate/ScheduleDate';
import './DetailsClass.scss'

const scheduleData = [
    {
        day: 'Monday',
        time: '8:00 AM - 9:00 AM'
    },
    {
        day: 'Tuesday',
        time: '10:00 AM - 11:00 AM'
    },
    {
        day: 'Wednesday',
        time: '7:00 AM - 8:00 AM'
    },
    {
        day: 'Thursday',
        time: '5:00 PM - 6:00 PM'
    },
    {
        day: 'Friday',
        time: '6:00 AM - 7:00 AM'
    },
    {
        day: 'Saturday',
        time: '7:00 PM - 8:00 PM'
    },
];

const DetailsClass = (props) => {
    const {title, image} = props.details;
    return (
        <div className="details-part">
            <div className="container">
                <h1 className="text-center">{title}</h1>
                <div className="row">
                    <div className="col-md-7">
                        <div className="details">
                            <img src={image} className="w-100" height="400px" alt=""/>
                            <div className="details-con pt-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et facere quae reprehenderit nemo at voluptate repudiandae accusamus sequi assumenda aspernatur ex, impedit officia earum aliquam iste necessitatibus ipsam perspiciatis voluptatibus cum pariatur ducimus mollitia. Dolor incidunt nulla porro at, vero blanditiis modi alias quo nostrum rem similique esse cupiditate, necessitatibus earum! Ab suscipit commodi non expedita, impedit repellat saepe voluptatibus et magnam laboriosam quaerat ad molestias autem, officia, corporis deserunt! Sequi blanditiis, repudiandae, doloribus cupiditate dolores sapiente earum at quaerat ex repellendus amet maxime officiis iste fugiat praesentium minus rerum atque et. Eum quaerat, libero molestiae atque fugit eveniet!</p>
                                <div className="check-box mt-5 mb-5">
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Having Slimmer Shapely Thighs</label>
                                    </div>
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Getting Stronger Body</label>
                                    </div>
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Increased Metabolism</label>
                                    </div>
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Increase Muscular Endurance</label>
                                    </div>
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Maximum Result in Less Time</label>
                                    </div>
                                    <div className="form-group form-check font-weight-bold">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Firm Hips and Tummy</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="class-schedule">
                            <div className="class-schedule-heading">
                                <h2 className="text-uppercase font-weight-bold pt-2 pb-4">class <span className="text-warning">Schedule</span></h2>
                            </div>
                            <div className="row pt-4">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="row">
                                            {
                                                scheduleData.map(scheduleData => <ScheduleDate scheduleData={scheduleData}></ScheduleDate>)
                                            }
                                        </div>
                                    </div>
                                    <div className="joinUs-btn">
                                        <button  className="btn btn-warning font-weight-bold">  <a href="/price">JOIN US</a> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsClass;