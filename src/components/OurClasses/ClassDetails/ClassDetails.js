import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClassFakeData from '../ClassFakeData/ClassFakeData';
import DetailsClass from '../DetailsClass/DetailsClass';

const ClassDetails = () => {
    const {ClassesCard} = useParams();
    const [classDetails, setClassDetails] = useState(ClassFakeData);
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        const classes = classDetails.filter(tD => tD.title.toLowerCase() === ClassesCard.toLowerCase());
        setDetails(classes);
    }, [ClassesCard])

    return (
        <div className="container">
            <div>
                {
                    details.map(details => <DetailsClass details={details}></DetailsClass>)
                }
            </div>
        </div>
    );
};

export default ClassDetails;