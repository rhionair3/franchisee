import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import '../../public/assets/styles/global.css';

import Layout from './main';
import Dashboard from './pages/dashboard/index';
import MasterGerobak from './pages/master/screens/Gerobak/index';
import Employee from './pages/master/screens/Employee/index';
import Franchisee from './pages/franchisee/index';
import Koki from './pages/koki/index';
import Gerobak from './pages/gerobak/index';
import Sertifikat from './pages/sertifikat/index';
import Training from './pages/training/index';



const GetChildren = props => props.children;
const FranchiseApp = () => (
  <BrowserRouter>
      <GetChildren>
          <Layout>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/master/gerobak" component={MasterGerobak} />
              <Route exact path="/master/employee" component={Employee} />
              <Route exact path="/franchisee" component={Franchisee} />
              <Route exact path="/koki" component={Koki} />
              <Route exact path="/gerobak" component={Gerobak} />
              <Route exact path="/training" component={Training} />
              <Route exact path="/sertifikat" component={Sertifikat} />
          </Layout>
      </GetChildren>
  </BrowserRouter>
);

render( <FranchiseApp /> , document.getElementById('root'));