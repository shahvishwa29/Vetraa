import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Listorder from './Components/Listorder/Listorder';
import Detailorder from './Components/Detailorder/Detailorder';
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './Components/Layout';
import Gridview from './Components/Grideview/Gridview';
import Productdetail from './Components/Productdetail/Productdetail';
import Checkout from './Components/Checkout/Checkout';
import Shoppingcart from './Components/Shoppingcart/Shopping';
import Listview from './Components/Listview/Listview';
import Dashboardbuyers from './Components/Dashboardbuyers/Dashboardbuyers';
import Orderbuyers from './Components/Orderbuyers/Orderbuyers';
import Addressbuyers from './Components/Addressbuyers/Addressbuyers';
import Whistlist from './Components/Whistlist/Whistlist';
import Listinvoices from './Components/Listinvoioces/Listinvoices';
import Detailinvoices from './Components/Detailinvoices/Detailinvoices';
import Customer from './Components/Customer/Customer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/listorder" element={<Listorder />} />
          <Route path="/detailorder" element={<Detailorder/>}/>
          <Route path='/listview' element={<Listview/>}/>
          <Route path="/gridview" element={<Gridview/>}/>
          <Route path="/productdetail" element={<Productdetail/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
          <Route path='/shoppingcart'element={<Shoppingcart/>}/>
          <Route path='/dashboardbuyers'element={<Dashboardbuyers/>}/>
          <Route path='/orderbuyers' element={<Orderbuyers/>}/>
          <Route path='/addressbuyers'element={<Addressbuyers/>}/>
          <Route path='/whistlist'element={<Whistlist/>}/>
          <Route path='/listinvoices'element={<Listinvoices/>}/>
          <Route path='/detailinvoices'element={<Detailinvoices/>}/>
          <Route path='/customer'element={<Customer/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

