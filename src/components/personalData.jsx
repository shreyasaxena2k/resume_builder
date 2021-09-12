import "./css/form.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Preview from "./preview"
import { detailCreator } from "../redux/actions/detailsAction"
import { useHistory } from "react-router"
let PersonalData = () => {
    let details = useSelector(state => state.details)
    let dispatch = useDispatch()
    let history=useHistory()
    console.log(details)
    let {fname,lname,email,phone,city,state}=details
    return <>
        <div className="personal-container">
            <div className="personal-form">
                <div class="row m-4">
                    <h2>Personal Detail</h2>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({fname:e.currentTarget.value}))
                        }} value={fname} type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({lname:e.currentTarget.value}))
                        }} value={lname} type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({email:e.currentTarget.value}))
                        }} value={email} type="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({phone:e.currentTarget.value}))
                        }} value={phone} type="number" class="form-control" placeholder="Phone Number" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({city:e.currentTarget.value}))
                        }} value={city} type="text" class="form-control" placeholder="City" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e)=>{
                            dispatch(detailCreator({state:e.currentTarget.value}))
                        }}value={state}  type="text" class="form-control" placeholder="State" />
                    </div>
                </div>
                <div onClick={()=>{
                    history.push("/qualification")
                }} className="btn btn-primary m-4">Next</div>
            </div>
  
            <Preview />
        </div>
    </>
}

export default PersonalData