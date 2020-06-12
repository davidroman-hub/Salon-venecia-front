import React,{ Fragment} from 'react';
import Layout from './components/Layout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AdminRoute from './Admin/adminRoute'
import Quince from './pages/15anos'
import Boda from './pages/Boda'
import Empresarial from './pages/empresarial'
import Jardin from './pages/Jardin'
import ScrollToTop from './ScrollTop'
// import Pages


import Home from './Home'
import Signin from '../src/components/Signin'
import Dashboard from './Admin/Dashboard'
import DatesList from './Admin/dates.List'
import ManageDate from './Admin/datesRemove'


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTop>
        <AdminRoute exact path="/admin/dashboard" component={Dashboard}/>
        <AdminRoute exact path="/admin/dates-list" component={DatesList}/>
        <AdminRoute exact path="/admin/dates-remove" component={ManageDate}/>
        <Route exact path="/admin" component={Signin}/> 
        <Route exact path="/home" component={Home}/> 
        <Route exact path="/" component={Home}/> 
        <Route exact path="/quince" component={Quince}/> 
        <Route exact path="/bodas" component={Boda}/> 
        <Route exact path="/empresarial" component={Empresarial}/> 
        <Route exact path="/jardin" component={Jardin}/> 
      </ScrollToTop>
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;
