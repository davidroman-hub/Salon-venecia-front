import React from 'react'
import './contactLinks.scss'
import {Router, withRouter,Link} from 'react-router-dom'

const MusicLinks = ({match}) => {

     
    const isActive = path => {
        if(match.path === path) {
            return {color:'#EE46B8'}
        } else{
            return {color:'#EE46B8'}
        }
    };
    return (
        <footer>
            <div className = 'social'>
                <a  href="mailto:salonvenecia@hotmail.com">
                    <i class="far fa-envelope"></i>
                </a>

                <a href='tel:+5215527271330' >
                <i class="fas fa-phone"></i>
                </a>

            

            </div>
            
        </footer>
    )
}

export default withRouter(MusicLinks)