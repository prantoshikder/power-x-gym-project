import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HomeBody from './components/HomeBody/HomeBody';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SubHeader from './components/SubHeader/SubHeader';
import PriceBody from './components/PriceBody/PriceBody';

import OurClasses from './components/OurClasses/OurClasses/OurClasses';
import ClassDetails from './components/OurClasses/ClassDetails/ClassDetails';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Payment from './components/Payment/Payment';
import Success from './components/Success/Success';

function App() {
  return (
    
      <Router>
        <Switch>

          <Route exact path='/'>
            <Navbar />
            <Header />
            <HomeBody />
            <Footer />
          </Route>
           {/* project */}

          <Route path='/class'>
            <Navbar />
            <SubHeader header='OUR CLASSES' />
            <OurClasses></OurClasses>
            {/* <ClassDetails></ClassDetails> */}
            <Footer />
          </Route>


          <Route path='/classDetails/:ClassesCard'>
            <Navbar />
            <SubHeader header='' />
            {/* here we will add details about our courses */}
            <ClassDetails></ClassDetails>
            <Footer />
          </Route>


          <Route path='/price'>
            <Navbar />
            <SubHeader header='PRICING PLANS' />
            <PriceBody />
            <br></br>
            <Footer />
          </Route>


          <Route path='/membership'>
            <Navbar />
            <SubHeader header='YOUR GYM MEMBERSHIP' />
             <PersonalDetails></PersonalDetails>
            <Footer />
          </Route>


          <Route path='/payment'>
            <Navbar />
            <SubHeader header='YOUR GYM MEMBERSHIP' />
           
             <Payment></Payment>
            <Footer />
          </Route>

          <Route path='/success'>
            <Navbar />
            <SubHeader header='THANKS FOR ADMISSION' />
            <Success></Success>
            <Footer />
          </Route>
          
          <Route path='*'>
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    
  );
}

export default App;
