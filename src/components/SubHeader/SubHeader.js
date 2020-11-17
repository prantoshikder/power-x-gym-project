import React from 'react';
import './SubHeader.scss'

const SubHeader = (props) => {
    return (
        <div>
            <section className="subHeaderSection d-flex align-items-center">
                <div className="container ">
                    <div className="cusSubHeader">
                        <h1>{props.header}</h1>
                    </div>
                   
                    
                </div>
            </section>
        </div>
    );
}

export default SubHeader;
