import React from "react";
import { Link } from "react-router-dom";
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaHammer } from 'react-icons/fa';
import './Sidebar.scss';
import { IconContext } from "react-icons/lib";
import logo from '../../assets/main-icon.png';

export function Sidebar(props) {
    const { isOpen, changeOpen } = props;

    const openerHandler = () => {
        changeOpen();
    }
    return (
        <section id='sidebar' style={{ width: isOpen ? '15%' : '3%'}} className={isOpen ? '' : 'sidebar-closed'}>
            <div id='nav-control-div' className='nav-control-div'>
                <IconContext.Provider value={{ className: isOpen ? 'arrow' : 'flip' }}>
                    <h1 className="logo-font" style={isOpen ? {} : {background: 'none'}}>
                        {isOpen 
                            ? <span><img src={logo} alt='logo.png' /> Task Master </span> 
                            : ''
                        }
                        <TfiArrowCircleLeft style={{ fontSize: 25 }} onClick={openerHandler} />
                    </h1>
                </IconContext.Provider>
            </div>
            <hr style={{ margin: isOpen ? '8px 1em 20px 1em' : '8px 7px 20px 7px'}} />
            {isOpen && (
                <div id='nav-list' className='nav'>
                    <Link to='/'>
                        <div id='dashboard-nav' className='nav-button'>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <div id='about-us-nav' className='nav-button'>
                            <span>About Us</span>
                        </div>
                    </Link>
                    <Link to='/project'>
                        <div id='project-nav' className='nav-button'>
                            <span>This Project</span>
                        </div>
                    </Link>
                </div>
            )}

            {!isOpen && (
            <div id='nav-list' className='nav'>
                <IconContext.Provider value={{ className: 'nav-icons' }}>
                <Link to='/'>
                    <LuLayoutDashboard id='dashboard-nav' />
                </Link>
                <Link to='/about'>
                    <AiOutlineInfoCircle id='about-us-nav' />
                </Link>
                <Link to='/project'>
                    <FaHammer id='project-nav' />
                </Link>
                </IconContext.Provider>
            </div>
            )}
        </section>
    )
}