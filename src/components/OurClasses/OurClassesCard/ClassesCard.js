import React from 'react';
import { Link } from 'react-router-dom';
import './ClassesCard.scss'

const ClassesCard = (props) => {
    const {image, title} = props.classesData;
    return (
        <div className="col-md-4">
            <div className="class-item">
                <img src={image} className="w-100" height="220px" alt=""/>
            </div>
            <div className="class-overlay text-center">
                <Link to={`/classDetails/${title}`}>
                        <button className="btn btn-warning">{title}</button>
                </Link>
            </div>
        </div>
    );
};

export default ClassesCard;