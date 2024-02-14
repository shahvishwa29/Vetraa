import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <div className='footer_main_div'>
                <div>
                © 2021 Vetra -
                    <a href='https://laborasyon.com/' className='laborasyon'>Laborasyon</a>
                </div>
                <div>
                    <nav class="nav gap-4">
                        <a href="https://themeforest.net/licenses/standard" class="nav-link link_footer">Licenses</a>
                        <a href="#" class="nav-link link_footer">Change Log</a>
                        <a href="#" class="nav-link link_footer">Get Help</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer
