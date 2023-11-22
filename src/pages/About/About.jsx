import React from 'react';
import { words } from './aboutString';
import { v4 as uuidv4 } from 'uuid';
import './About.scss';

export function About(props) {
    const { sideBarOpen, alert } = props;

    const successAlert = () => {
        const alertPayload = {
            id: uuidv4(),
            type: 'success',
            message: 'This is a test success message.',
        };
        alert(alertPayload);
    }

    const errorAlert = () => {
        const alertPayload = {
            id: uuidv4(),
            type: 'error',
            message: 'This is a test error message.',
        };
        alert(alertPayload);
    }

    const warnAlert = () => {
        const alertPayload = {
            id: uuidv4(),
            type: 'warn',
            message: 'This is a test warning message.',
        };
        alert(alertPayload);
    }

    const infoAlert = () => {
        const alertPayload = {
            id: uuidv4(),
            type: 'info',
            message: 'This is a test info message.',
        };
        alert(alertPayload);
    }
    return (
        <section id='about-section' style={{width: sideBarOpen ? '85%' : '97%'}}>
            <div id='about-title-div' className='about-title'>
                <h1>Welcome to <span id='company-name'>Task Master</span></h1>
            </div>
            <div id='about-wrapper-div' className='about-wrapper-div'>
                <div id='about-content' className='about-content'>
                    <p>Click the buttons below to see the 4 types of alert messages.</p>
                    <button className="main-button" onClick={successAlert}>Success</button>
                    <button className="main-button" onClick={errorAlert}>Error</button>
                    <button className="main-button" onClick={warnAlert}>Warning</button>
                    <button className="main-button" onClick={infoAlert}>Info</button>
                    <br />
                    <p>{words()}</p>
                    <p>{words()}</p>
                    <p>{words()}</p>
                    <p style={{ paddingBottom: '3em' }}>{words()}</p>
                </div>
            </div>
        </section>
    )
}
