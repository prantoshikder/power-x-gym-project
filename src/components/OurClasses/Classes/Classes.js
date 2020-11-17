import React, { useState } from 'react';
import ClassFakeData from '../ClassFakeData/ClassFakeData';
import ClassesCard from '../OurClassesCard/ClassesCard';

const Classes = () => {
    const [classesData, setClassesData] = useState(ClassFakeData);
    return (
        <div className="classes-part pt-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    {
                        classesData.map(classesData => <ClassesCard classesData={classesData}></ClassesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;