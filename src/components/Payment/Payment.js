import React from 'react';
import amex from '../../images/credit-cards_amex.png'
import mastercard from '../../images/credit-cards_mastercard.png'
import visa from '../../images/credit-cards_visa.png'
import paypal from '../../images/Bitmap.png'

const Payment = () => {
    return (
        <section className='payment  mt-3 mb-5 pb-5'>

            {/* ACTIVITY */}

            <div className='activity'>
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
                    <h3 className='bg-warning'>2</h3>
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
                <h6 className='mr-5  text-muted'>personal Detail</h6>
                <h6 className='mr-5 ml-3 text-muted'>Bank Payment</h6>
                <h6 className='mr-5 text-muted'>Membership Created</h6>
            </div>

            {/* Credit Card  */}

            <div className='container credit-card mt-5' style={{border: '1px solid lightgrey', padding: '30px'}}>
                <div className='form'>
                    <div className="form-check form-inline ml-0 pl-0">
                        <input className="form-check-input position-static" type="radio" name="blankRadio" value="option1" aria-label="Credit Card" />
                        <label className='ml-2 mt-1 '>
                            <h5><b>Credit Card</b></h5>
                            <br />
                        </label>
                        <div className='ml-auto'>
                            <img src={mastercard} alt='' />
                            <img src={visa} className='mx-3' alt='' />
                            <img src={amex} alt='' />
                        </div>
                    </div>
                    <p className='text-muted ml-4'>Safe money transfer using your bank account, Visa, Maestro, Discover, American Express</p>
                </div>
                <div className="form-row my-5 py-3">
                    <div className="form-group col-md-12">
                        <label htmlFor="careNumber"><b>CARD NUMBER</b></label>
                        <br />
                        <input type="text" className="form-control" placeholder='00000 00000 00000' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName"><b>NAME NO CARD</b></label>
                        <br />
                        <input type="name" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="date"><b>EXPIRY DATE</b></label>
                        <br />
                        <input type="date" className="form-control" placeholder='MM/YY' />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="lastName"><b>CVV CODE</b></label>
                        <br />
                        <input type="name" className="form-control" />
                    </div>
                </div>
            </div>

            {/* PAYPAL */}

            <div className='container paypal mt-5 pb-5' style={{border: '1px solid lightgrey', padding: '40px'}}>
                <div className='form'>
                    <div className="form-check form-inline">
                        <input className="form-check-input position-static" type="radio" name="blankRadio" value="option1" aria-label="Credit Card" />
                        <label className='ml-3 mt-1 '>
                            <h5><b>Paypal</b></h5>
                        </label>
                        <div className='ml-auto'>
                            <img src={paypal} alt='' />
                        </div>
                    </div>
                    <p className='text-muted ml-5'>You will be redirected to paypal website to complete your purchase securely</p>
                </div>
            </div>
            <button  type="button" class="btn px-5  btn-warning" style={{borderRadius: '0', float:'left', marginLeft:'105px', marginTop: '15px'}}><a href="/membership"> Back</a></button>
            <button  type="button" class="btn px-5  btn-warning" style={{borderRadius: '0', float:'right', marginRight:'105px', marginTop: '15px'}}><a href="/success"> NEXT</a></button> 

        </section>
    );
};

export default Payment;