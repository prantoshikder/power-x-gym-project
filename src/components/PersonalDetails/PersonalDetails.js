import React from 'react';
import { useHistory } from 'react-router-dom';
import './PersonalDetails.scss'

const PersonalDetails = () => {

    const history = useHistory();

       const dayPecker = () =>{

            for(let i = 1; i <=31; i++){
                return i;
            }
            
        }

    const handleNext = () =>{
        history.push('/payment')
    }

    return (
        <section className='my-5'>

            {/* ACTIVITY */}

            <div className=' activity'>
                <div className='d-flex flex-column'>
                    <h3 className='bg-warning'>1</h3> 
                </div>
                <div className='mt-4'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                <div className='d-flex flex-column'>
                    <h3>2</h3>
                </div>
                <div className='mt-4'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
                <div className='d-flex flex-column'>
                    <h3>3</h3>
                </div>
            </div>

            <div className=' d-flex flex-row justify-content-center ml-4 pl-5'>
                <h6 className='mr-5   text-muted'>personal Detail</h6>
                <h6 className='mr-5 ml-3  text-muted'>Bank Payment</h6>
                <h6 className='mr-5  text-muted'>Membership Created</h6>
            </div>


            {/* PERSONAL INFORMATION FORM */}

            <form className='container mt-5'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName"><b>First Name</b></label>
                        <br/>
                        <input type="name" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <br/>
                        <input type="name" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4"><b>Email</b></label>
                        <input type="email" className="form-control"  />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone"><b>Phone Number</b></label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
               
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label><b>Date of Birth</b></label>
                        <div className='form-inline'>
                        <select type='Day' class="form-control px-5">
                            <option>Day</option>
                            <option>
                            {
                                     dayPecker() // WORK NOT DONE
                            }
                            </option>        
                        </select>
                        <select type='date' class="form-control mx-4 px-5">
                            <option>Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                        <select placeholder='Year' class="form-control px-5">
                            {/* WORK NOT DONE */}
                            <option >Year</option>   
                        </select>     
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender"><b>Gender</b></label>
                        <select type='text'  className="form-control w-100">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>       
                        </select>       
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label ><b>Address Line 1</b></label>
                        <input type="address" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country"><b>Country/Region</b></label>
                        <input type="country" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label ><b>City</b></label>
                        <input type="address" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country"><b>PostCode</b></label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                
                <button onClick={handleNext} type="button" class="btn px-5  btn-warning" style={{borderRadius: '0', float:'right'}}><b> <a href="/payment"> NEXT</a> </b></button>
            </form>
        </section>
    );
};

export default PersonalDetails;