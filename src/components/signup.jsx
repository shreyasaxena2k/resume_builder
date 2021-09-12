import React from 'react'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
export default function Signup() {
    let history=useHistory()
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    let user=useSelector((state)=>state.user)
    return (
        <>
        {user?<Redirect to="/home" /> : ""}
        <div className="row">
            <div className="col-4 offset-4 ">
                <h1 className="mt-4 mb-4">Sign Up!</h1>
                <form className="m-4">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={(e)=>{
                            setemail(e.currentTarget.value)
                        }} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e)=>{
                            setpassword(e.currentTarget.value)
                        }} value={password} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input onChange={(e)=>{
                            setconfirmpassword(e.currentTarget.value)
                        }} value={confirmpassword} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button onClick={(e)=>{
                        e.preventDefault();
                        if(password===confirmpassword)
                        {
                            auth.createUserWithEmailAndPassword(email,password)
                        }
                    }} type="submit" class="btn btn-primary">SIGN UP</button>
                    <br />
                    <br />
                    <button onClick={()=>{
                        history.push("/login")
                    }} type="submit" class="btn btn-primary">LOGIN</button>

                </form>
            </div>
        </div>
    </>
    )
}
