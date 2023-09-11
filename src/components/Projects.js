import React from 'react'
import data from '../db.json'
import './projects.css'
import 'bootstrap/dist/css/bootstrap.css'
import Socials from './Socials'
function Projects() {
  console.log(data)
  return (

    <div className='container'> 
    <h2>My Projects</h2>
   
    

    {/* {data.map(project =>
        <tr key={project.id}>
        <td>{project.name}</td>
        <td style={{wordBreak:"break-word"}}><span>{project.about}</span></td>
        <td><a href={project.link} target='_blank'>Github </a></td>
          </tr>
    )} */}
        <div className="row rows">
            {data.map(project =>
            
              <div className="col-sm-4"  key={project.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.about}</p>
                    <a href={project.link} target='_blank' className="btn btn-primary">Github link</a>
                    <a href={project.live} style={{margin:'5%'}} target='_blank' className="btn btn-primary">Live Project</a>
                  </div>
                </div>
              </div>
            )}
        </div>

{/* <Socials/> */}
    </div>
  )
}

export default Projects