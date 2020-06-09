import Layout from './Layout'
import React,{Fragment} from 'react'

const  Header = ({children}) => {
    return (
        <Fragment>
          <Layout />
                {children}
            <p>Footer</p>
        </Fragment>
    )
}

export default Header