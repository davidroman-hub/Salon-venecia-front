import Layout from './Layout'
import React,{Fragment} from 'react'
import ContactLinks from './contactLinks'
import Footer from './Footer'


const  Header = ({children}) => {
    return (
        <Fragment>
          <Layout />
                {children}
                <ContactLinks />
            <Footer/>
        </Fragment>
    )
}

export default Header