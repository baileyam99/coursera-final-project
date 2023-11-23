import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaHammer } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { MdClose } from 'react-icons/md';
import MobileSubMenu from './MobileSubMenu'
import logo from '../../assets/main-icon.png';
import './Sidebar.scss';

// Component for sidebar navigation
export function Sidebar(props) {
    // Get props and initialize state variable
    const { isOpen, changeOpen } = props;
    const [ tablet ] = useState(window.matchMedia('all and (min-device-width: 641px) and (max-device-width: 1024px)').matches);

    // Function to handle opening and closing the sidebar
    const openerHandler = () => {
        changeOpen();
    }
    return (
        <section id="sidebar" style={{width: isOpen ? '15%' : '3%'}} className={isOpen ? '' : 'sidebar-closed'}>
            <div id="nav-control-div" className="nav-control-div">
                <IconContext.Provider value={{className: isOpen ? 'arrow' : 'flip'}}>
                    <h1 className="logo-font" style={isOpen ? {} : {background: 'none', width: 'auto'}}>
                        {isOpen 
                            ? <span>
                                <img src={logo} alt="logo.png" /> 
                                {tablet ? 'TM' : 'Task Master'} 
                            </span> 
                            : ''
                        }
                        <TfiArrowCircleLeft style={{fontSize: 25}} onClick={openerHandler} />
                    </h1>
                </IconContext.Provider>
            </div>
            <hr style={{margin: isOpen ? '8px 1em 20px 1em' : '8px 7px 20px 7px'}} />
            {isOpen && (
                <div id="nav-list" className="nav">
                    <Link to="/">
                        <div id="dashboard-nav" className="nav-button">
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div id="about-us-nav" className="nav-button">
                            <span>About Us</span>
                        </div>
                    </Link>
                    <Link to="/project">
                        <div id="project-nav" className="nav-button">
                            <span>This Project</span>
                        </div>
                    </Link>
                </div>
            )}

            {!isOpen && (
                <div id="nav-list" className="nav">
                    <IconContext.Provider value={{className: 'nav-icons'}}>
                    <Link to="/">
                        <LuLayoutDashboard id="dashboard-nav" />
                    </Link>
                    <Link to="/about">
                        <AiOutlineInfoCircle id="about-us-nav" />
                    </Link>
                    <Link to="/project">
                        <FaHammer id="project-nav" />
                    </Link>
                    </IconContext.Provider>
                </div>
            )}
        </section>
    );
};

// Define the navigation options for the mobile sidebar
const SidebarMobileData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <LuLayoutDashboard id="dashboard-nav" />
    },
    {
        title: 'About Us',
        path: '/about',
        icon: <AiOutlineInfoCircle id="about-us-nav" />
    },
    {
        title: 'Project',
        path: '/project',
        icon: <FaHammer id="project-nav" />
    },
];

// Component for the mobile sidebar
export function SidebarMobile() {
    // Initialize state variables
    const [isOpen, setIsOpen] = useState(false);
    const [visable, setVisible] = useState(true);

    // Function to toggle sidebar button visibility based on how far the user scrolls
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 25){
            setVisible(false)
        } 
        else if (scrolled <= 25){
            setVisible(true)
        }
    };

    // Event listener for scrolling
    window.addEventListener('scroll', toggleVisible);

    // Function to handle opening and closing the sidebar
    const openerHandler = () => {
        setIsOpen(!isOpen);
    }

    // Styled sidebar wrap div
    const SidebarWrap = styled.div`
        width: 100%;
        overflow: auto;
    `;

    return (
        <>
            <div id="nav-bars" className="nav-bars-div" onClick={openerHandler}>
                <Link to="#">
                    <IconContext.Provider value={{className: visable ? 'bars' : 'bars invisible'}}>
                        <FaBars />
                    </IconContext.Provider>
                </Link>
            </div>
            <nav style={{left: isOpen ? '0' : '-100%'}}>
                <SidebarWrap>
                    <div className="close-div">
                        <Link to="#" onClick={openerHandler}>
                            <MdClose />
                        </Link>
                    </div>
                        
                    {SidebarMobileData.map((item, index) => {
                        return <MobileSubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </nav>
        </>
    );
};
