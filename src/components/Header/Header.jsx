import React,{useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import { motion } from 'framer-motion'
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/user-icon.png'
import CapITLogo from '../../assets/images/cap.png'

import { Container, Row } from 'reactstrap';

const nav__links = [

  {
    path: 'home',
    display: 'Home'
  },

  {
    path: 'Offers',
    display: 'Offers'
  },

  {
    path: 'companies',
    display: 'Companies'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll', ()=>{
      if(
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
      ) {
      headerRef.current.classList.add('sticky__header')
     }else{
      headerRef.current.classList.add('sticky__header')
    }
  });
};
  useEffect(()=>{

    stickyHeaderFunc()

    return()=> window.removeEventListener('scroll' , stickyHeaderFunc)
  });

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>InternConnect</h1>
            </div>
          </div>

          <div className='navigation'>
            <ul className="menu">

              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ""} >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='nav__icons'>

            <span className='img1'><motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
            </span>
            <span>
            <div className="cap">
            <img src={CapITLogo} alt="logo" />
            </div>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
};

export default Header;
