import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

let Login=()=> {
    let history=useHistory()
    let user=useSelector((state)=>state.user)
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    return (
        <>
        {user ? <Redirect to ="/home" /> : ""}
        <div className="row">
            <div className="col-4 offset-4 ">
            <h1 className="mt-4 mb-4">Login!</h1>

                <form className="m-4">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input  onChange={(e)=>{
                            setemail(e.currentTarget.value)
                        }} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e)=>{
                            setpassword(e.currentTarget.value)
                        }} value={password}  type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button onClick={(e)=>{
                        e.preventDefault();
                        auth.signInWithEmailAndPassword(email,password)
                    }} type="submit" class="btn btn-primary">LOGIN</button>
                    <br />
                    <br />
                    <button onClick={()=>{
                        history.push("/signup")
                    }}type="submit" class="btn btn-primary">SIGN UP</button>

                </form>
            </div>
        </div>
    </>
    )
}

export default Login