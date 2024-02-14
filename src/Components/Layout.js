import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>

            <div className='d-flex'>

                <Sidebar />


                <div style={{ width: '74%', marginLeft: '25%' }}>
                    <Header />
                    <div style={{ marginTop: '90px',marginLeft:'5px' }}>
                        <Outlet />
                        {/* <Footer /> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Layout
