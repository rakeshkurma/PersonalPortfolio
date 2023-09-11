import React from 'react'
import html from './images/html.png'
import './skills.css'
import c from './images/c.png'
import cpp from './images/cpp.png'
import java from './images/java.png'
import css from './images/CSS3.png'
import js from './images/js.png'
import bootstrap from './images/bootstrap.png'
import react from './images/react.png'
import node from './images/node.png'
import express from './images/express.png'
import dsa from './images/dsa.png'
import mongodb from './images/mongodb.png'
import mysql from './images/mysql.png'


function Skills() {
    return (
        <div >
            <h2>My Skills</h2>
            <table>
                <tr>
                    <td><p >Programming Languages :</p></td>
                    <td>
                        <img className='shine' src={c} />
                        <img className='shine' src={cpp} />
                        <img className='shine' src={java} />
                    </td>
                </tr>
                <tr>
                    <td><p >Tech Stack :</p></td>
                    <td>
                        <img className='shine1' src={html} />
                        <img className='shine1' src={css} />
                        <img className='shine1' src={js} />
                        <img className='shine1' src={bootstrap} />
                        <img className='shine1' src={react} />
                        <img className='shine1' src={node} />
                        <img className='shine1' src={express} />
                    </td>
                </tr>
                <tr>
                    <td><p >Database :</p></td>
                    <td>
                        <img className='shine' src={mysql} />
                        <img className='shine' src={mongodb} />
                    </td>
                </tr>
                {/* <tr>
                    <td><p >DSA:</p></td>
                    <td>
                        <img className='shine' src={dsa} />
                    </td>
                </tr> */}
            </table>


            {/* <div className='container2'>
            <div className='programming'>
                <p >Programming Languages:</p>
                <img src={c} />
                <img style={{mixBlendMode:"multipy"}} src={cpp} />
                <img src={java} />
            </div>
            <div className='tech'>
                Tech Stack:
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={bootstrap}/>
                <img src={react}/>
                <img src={node}/>
                <img src={express}/>
            </div>
        </div> */}
        </div>
    )
}

export default Skills