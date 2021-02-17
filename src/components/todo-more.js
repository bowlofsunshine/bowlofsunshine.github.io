import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Todo1 from '../images/todo1.png';
import Todo2 from '../images/todo2.png';
import Todo3 from '../images/todo3.png';

export class TodoCS extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <div className="todo-more">
                    <h3 className="todo-more-header">Todo List App</h3>
                    {/* overview */}
                    <p className="overview-headline">Overview</p>
                    <p className="overview-para">This Todo App is a web app powered by Vue CLI, consisting of a single view where users will be able to create, update, complete, and delete todo items from a list. </p>
                    <img className="todo1" src={Todo1} alt="todo1" />
                    {/* P&C */}
                    <p className="pnc-headline">Purpose &amp; Context</p>
                    <p className="pnc-para">Todo App is a project that I built for my Full-Stack immersion web development course at CareerFoundry. </p>
                    {/* Objective */}
                    <p className="objective-headline">Objective</p>
                    <p className="objective-para">The purpose of this project was to have a better well-rounded understanding of different frameworks, and be able to display the various framework knowledge on my portfolio. The problem that I wanted to solve was to learn a new framework and develop an application to be up and running in one day. </p>
                    {/* Duration */}
                    <p className="duration-headline">Duration</p>
                    <p className="duration-para">My goal was to learn a new framework and create an application the same day, of which I did. Wuhu!</p>
                    {/* Approach */}
                    <p className="approach-headline">Approach</p>
                    <span className="approach-line"></span>
                    {/* Server-Side */}
                    <p className="server-headline">Server-Side</p>
                    <p className="server-para1">I created a single-file component containing a template, script and style section. I defined the Todo List model and added methods to accept a data parameter for my instance to add tasks to the todo list. Interpolation is used to render a Todo label to each added task.
                    After finalizing that tasks can be added to the Todo List, I then added the elements necessary to implement removing, editing, and marking the task as completed. </p>
                    <p className="server-para2">To allow the task to be marked as completed, I added a completed property to the Todo model and a checkbox onto each task to be toggled when users click the box. </p>
                    <p className="server-para3">The possibility to delete is completed by adding a delete button that when click will trigger a remove method. </p>
                    <p className="server-para4">To implement the functionality of editing, I created a property so that when double clicking the task or by clicking the edit button, the user can edit the task. </p>
                    <p className="server-para5">In addition to the basic todo methods, I also added the ability to drag the task into a different place so the user can order their tasks as they please, by downloading and implementing a drag and drop component. </p>
                    <img className="todo2" src={Todo2} alt="todo2" />
                    {/* Client-Side */}
                    <p className="client-headline">Client-Side</p>
                    <p className="client-para">To build the interface that makes the app usable for users to add, delete, move, edit and complete tasks, I incorporated Material Design by using Vue Material.
                    Using Vue Material, I added checkboxes and symbols to better help the user understand what they are doing, as well as a general layout and theme to make it easier on the eye.
                    I also added client-side storage so that even after leaving the website, given cookies etc. have not been cleared, when returning to the website the users list will still be there. </p>
                    <img className="todo3" src={Todo3} alt="todo3" />
                    {/* Challenges */}
                    <p className="chall-headline">Challenges</p>
                    <p className="chall-para">The biggest challenge was learning a new framework in such a short period of time and then building the app while still learning. Once actually building the app, the most challenging part was learning the v-for &amp; v-bind directives, but once I understood them fully the project was free flowing from there. </p>
                    {/* Tools Used */}
                    <p className="tools-headline">Tools Used</p>
                    <p className="tools-para">Vue.js <br></br>
                        Material Design UI</p>
                </div>
            </div>
        )
    }
}

export default TodoCS;