import React,{Fragment,useState} from 'react';
import {Link, Router, withRouter} from 'react-router-dom'
import Logo from '../pages/images/Logo.png'
import {isAuth,signout} from './helpers'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/home.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


  const Naavbar = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);;
    }
    return (
        <div>
             <Navbar light expand="md" style={{backgroundColor: "#fff"}} className=''>
                <Link href="/">
                <img alt='logo' width='60px' height='70px' src={Logo}/>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>

            {!isAuth () && (     
              <Fragment>            
                        <NavItem style={{cursor:'pointer'}}>
                          <Link to='/'>
                            <NavLink>HOME</NavLink>
                          </Link>
                        </NavItem>
                        <NavItem  style={{cursor:'pointer'}}>
                            <Link to="/bodas">
                              <NavLink>
                              BODAS
                              </NavLink>
                            </Link>
                        </NavItem>  
                       <NavItem  style={{cursor:'pointer'}}>
                         <Link to="/quince">
                           <NavLink>
                           XV AÑOS
                           </NavLink>
                         </Link>
                     </NavItem>
                     <NavItem  style={{cursor:'pointer'}}>
                        <Link to="/jardin">
                          <NavLink>
                           JARDIN
                          </NavLink>
                        </Link>
                    </NavItem> 
                    <NavItem  style={{cursor:'pointer'}}>
                        <Link to="/empresarial">
                          <NavLink>
                           EMPRESARIAL
                          </NavLink>
                        </Link>
                    </NavItem>
                 
                    </Fragment>
            )}
                   
                 
                  
                    {/* {JSON.stringify(isAuth())} */}
                  {( isAuth() && (
                    <Fragment>
                        <NavItem  style={{cursor:'pointer'}}>
                            <Link to="/admin/dashboard">
                              <NavLink>
                               Administración
                              </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem  style={{cursor:'pointer'}}>
                               <span className="nav-link"
                                 style={{cursor: 'pointer'}}
                                 onClick={()=>{
                                    signout(()=>{
                                        history.push('/')
                                    })
                                }}>Cerrar Sesión</span>

                         </NavItem>
                        
                    </Fragment>
                    )
                  )}
                  
                        <NavItem  style={{cursor:'pointer'}}>
                        <Link href="/user">
                          <NavLink>
                        
                           </NavLink>
                        </Link>
                      </NavItem>
              

                      <NavItem>
                        <NavLink >
                       
                        </NavLink>
                  </NavItem>
                  
                  
            
                    
                    <UncontrolledDropdown nav inNavbar>
                      {/* <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu> */}
                    </UncontrolledDropdown>
                  </Nav>
                  {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
              </Navbar>
        </div>
    )
  }



// const NavBar = ({children,match,history,router}) => {

    
// const isActive = path => {
//     if(match.path === path) {
//         return {color:'#EE46B8'}
//     } else{
//         return {color:'#fff'}
//     }
// };

//     const nav = () => (
        
//         <div className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: "#fff"}} >
//    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//    <div className='nav-color' class="nav-link" to='/'>
//         <img alt='logo' width='60px' height='70px' src={Logo}/>
//     </div>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//           <Link to='/' className="nav-link my-2 my-lg-0" >
//           HOME
//           </Link>       
//       </li>
//       <li class="nav-item active">
//           <Link to='/' className="nav-link my-2 my-lg-0" >
//           BODAS
//           </Link>       
//       </li>
//       <li class="nav-item active">
//           <Link to='/' className="nav-link my-2 my-lg-0" >
//           XV AÑOS
//           </Link>       
//       </li>
//       <li class="nav-item active">
//           <Link to='/' className="nav-link my-2 my-lg-0" >
//          JARDIN
//           </Link>       
//       </li>
     


//     {isAuth () && isAuth().role ==='admin' && (
//     <Fragment>
//     <li className="nav-item">
//             <span className="nav-link"
//             style={{cursor: 'pointer', color: '#fff'}}
//             onClick={()=>{
//                 signout(()=>{
//                     history.push('/')
//                 })
//             }}>Cerrar Sesión</span>
//       </li>
//       <li className="nav-item">
//       <Link className="nav-link" style={isActive('/admin/dashboard')} to="/admin/dashboard">
//           {isAuth().name}
//     </Link>    
//               </li>   

//     </Fragment>
//       )}

//     </ul>
  
//   </div>
//         </div>

//     )
    



//     return (
//         <Fragment>
//             {nav()}
//             <div className="container">
//                 {children}
//             </div>
//         </Fragment>
//     )
// }

export default withRouter(Naavbar)