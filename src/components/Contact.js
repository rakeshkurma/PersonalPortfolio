import React from 'react'
import './contact.css'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'
import insta from './images/instagram.svg'
import Socials from './Socials'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    let [msg, setMsg] = useState([]);
    const onFormSubmit = (obj) => {
        handleSubmit(msg.push(obj));
        console.log(msg);
        //     axios.post("http://localhost:3999/admin/signup",obj)
        //     .then((res)=>{
        //         //if(res.status===201){
        //             if(res.data?.Message==="User Already Exists") userState=true;
        //             else userState = false;
        //             setMsg(res.data?.Message);
        //             console.log(res);
        //             // props.fun();
        //             //navigate("/admin")
        //         //}
        //     })
        //     .catch((err)=>console.log(err))
        //         console.log(obj)
    }
    return (
        <div className='container parent'>
            {/* { msg.length==0*/}
            <h2> Don't Hesitate to text</h2>

            <form name="form" role="form" className="login-form" onSubmit={handleSubmit(onFormSubmit)}>
                <div class="form-floating mb-3" style={{ marginLeft: '20rem' }}>
                    <input className="form-control" type="email" style={{ width: '70%' }} placeholder="Email id" {...register("email", { required: true, minLength: '8' })} />
                    <label for="floatingInput">Email Id</label>
                    {errors.email?.type === 'minLength' && <p className="text-danger">*Email Id must be atleast 8 characters</p>}
                    {errors.email?.type === 'required' && <p className="text-danger">*Email Id is required</p>}
                </div>
                <br />
                <div class="form-floating mb-3" style={{ marginLeft: '20rem' }}>
                    <input className="form-control" type="text" style={{ width: '70%' }} placeholder="Subject" {...register("subject", { required: true, minLength: '10' })} />
                    <label for="floatingInput">Subject</label>
                    {errors.subject?.type === 'minLength' && <p className="text-danger">*subject must be atleast 10 characters</p>}
                    {errors.subject?.type === 'required' && <p className="text-danger">*subject is required</p>}
                </div>
                <br />
                <div class="form-floating mb-3" style={{ marginLeft: '20rem' }}>
                    {/* <textarea className="form-control"/> </textarea> */}
                    <textarea class="form-control" id="exampleFormControlTextarea1" style={{ width: '70%' }} rows="3" {...register("message", { required: true, minLength: '30' })}></textarea>
                    <label for="floatingInput">Message</label>
                    {/* <input className="form-control" type="password" placeholder="Password"  {...register("password", {required:true,minLength:'8'})}/> */}
                    {/* <label for="floatingInput">Password</label> */}
                    {errors.message?.type === 'minLength' && <p className="text-danger">*Message must be atleast 30 characters</p>}
                    {errors.message?.type === 'required' && <p className="text-danger">*Message is required</p>}
                </div>
                <button type="submit" class="btn btn-primary">SIGN IN</button>
                {/* { userState ? <p className="text-danger">{msg}</p>: <p className="text-success">{msg}</p>} */}

            </form>


            {/* <form className='form'>
            <div class="form-group">
                <span>Email Address</span>
                <input type="email" class="form-control"  placeholder="name@example.com"></input>  
            </div>
            <div class="form-group">
                <span>Subject</span>
                <input type="text" class="form-control" placeholder="Subject"></input>  
            </div>

            <div class="form-group">
                <span>Message for me</span>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-success'>Send</button>
        </form> */}
            <Socials className='bottom' style={{ position: 'absolute', bottom: '0px' }} />
        </div>
    )
}

export default Contact