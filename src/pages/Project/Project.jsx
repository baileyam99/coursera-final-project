import React from 'react';
import './Project.scss';

// Page to view project details
export function Project(props) {
    // Get props
    const { sideBarOpen } = props;

    return (
        <section id="project-section" style={{width: sideBarOpen ? '85%' : '97%'}}>
            <div id="project-title-div" className="project-title">
                <h1>React Fundamentals | Coursera</h1>
            </div>

            <div id="project-wrapper-div" className="project-wrapper-div">
                <div id="project-content" className="project-content">
                    <p>
                        This project was made as part of the <a href="https://www.coursera.org/learn/react-fundamentals" target="_blank" rel="noreferrer">React Fundamentals</a> Coursera Course. This course is an introductory course that teaches about React and building user interfaces. This specific project was created by Alex Bailey as part of the final assignment for this course. The requirements are as follows:
                    </p>

                    <h4>Step 1: User Interface Design</h4>
                    <p style={{marginTop: 5}}>
                        Create a visually appealing dashboard layout with components like task lists, task cards, filters, and a sidebar for navigation, very similar to task management website used by enterprises like Trello, Click, etc. Design an intuitive interface that enhances usability and productivity.
                    </p>

                    <h4>Step 2: Component State Management</h4>
                    <p style={{marginTop: 5}}>
                        Utilize React state and props to manage the state of individual components. Use state to store and update task data, including titles, descriptions, due dates, and completion status.
                    </p>

                    <h4>Step 3: React Hooks for Side Effects and Stateful Logic</h4>
                    <p style={{marginTop: 5}}>
                        Implement React Hooks like useEffect and useState to handle side effects such as API requests and manage stateful logic like sorting tasks or applying filters.
                    </p>

                    <h4>Step 4: Redux for Advanced State Management (not applicable to this specific project)</h4>
                    <p style={{marginTop: 5}}>
                        Integrate Redux for advanced state management if your application requires it. Redux helps manage global application state, handle asynchronous actions, and provides a centralized store for components to access.
                    </p>

                    <h4>Step 5: DOM Manipulation Techniques</h4>
                    <p style={{marginTop: 5}}>
                        Enhance user interactions by implementing DOM manipulation techniques such as event listeners. For example, enable drag-and-drop functionality to reorder tasks or utilize tooltips for additional task information.
                    </p>

                    <h4>Step 6: Responsive Design</h4>
                    <p style={{marginTop: 5}}>
                        Ensure your application is responsive by using CSS frameworks like Bootstrap or Flexbox. Create a layout that adapts to different screen sizes and devices, providing a seamless user experience across desktop, tablet, and mobile devices.
                    </p>

                    <p>The review criteria is as follows:</p>
                    <div>
                        <ul>
                            <li>
                                Does the application demonstrate a clear understanding of React fundamentals, such as components, props, and state management?
                            </li>
                            <li>
                                Is the application structured in a modular and organized manner, with reusable components and proper component hierarchy?
                            </li>
                            <li>
                                Does the application effectively utilize React Router for handling routing and navigation?
                            </li>
                            <li>
                                Does the application effectively utilize React hooks (e.g., useState, useEffect) for managing component state and side effects?
                            </li>
                            <li>
                                Does the application effectively handle form input and update the component state accordingly?
                            </li>
                            <li>
                                Is the application implementing proper form validation, ensuring that user input meets the required criteria?
                            </li>
                            <li>
                                Does the application provide appropriate user feedback and error messages for form validation errors?
                            </li>
                        </ul>
                    </div>

                    <p style={{paddingBottom: '3em'}}>
                        I hope you have enjoyed viewing and assessing my project. I put a lot of time and effort into it. I hereby certify that this work is my own and its creation does not break Coursera honor code policy.
                    </p>
                </div>
            </div>
        </section>
    );
};
