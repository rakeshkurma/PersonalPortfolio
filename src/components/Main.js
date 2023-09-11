import React from 'react'
import './main.css'
import mypic from './myPic.jpg'
import Skills from './Skills'
import Projects from './Projects'
function Main() {
    return (
        <div>
            <div className='container1'>
                
                <div className="info">
                    <div className='name1'>Hey <span className='emoji'>&#128075;&#127996;</span> It's me</div>
                    <div className='name'>-RAKESH KURMA</div>
                    <div style={{fontStyle:"italic"}}><p>Currently I'm pursuing my Final year in <span style={{fontWeight: "bold"}}>Computer Science and Engineering</span></p>
                    <p> from <span style={{fontWeight: "bold", margin:'0%'}}>"Jawaharlal Nehru Technological University Kukatpally, Hyderabad"</span></p>
                    </div>
                </div>
                <div><div className="photo hover14 ">
                    <figure><img className='image' src={mypic} alt='this  img'/></figure>
                </div></div>
            </div>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Main