import { useDispatch,useSelector } from 'react-redux'
import { useHistory,Redirect } from 'react-router-dom'
import { auth } from '../firebase'
import './css/btn.css'
import {templateCreator} from '../redux/actions/templateAction'
let Home = () => {
    let user = useSelector((state) => state.user)
    let code=useSelector((state)=>state.template)
    console.log(code)
    let dispatch = useDispatch()
    let history=useHistory()
    return (
        <>
            <div>{user ? "Home" : <Redirect to="/login" />}</div>

            <div className="template-container">
                <div onClick={()=>{
                    dispatch(templateCreator("A"))
                    history.push("/personal")
                }} className="template">
                    <img src="http://localhost:3000/skin1.svg" alt="" />
                </div>
                <div onClick={()=>{
                    dispatch(templateCreator("B"))
                    history.push("/personal")
                }} className="template">
                    <img src="http://localhost:3000/skin2.svg" alt="" />

                </div>
            </div>
            <button btn-primary className="btn_signout" onClick={() => {
                auth.signOut()
            }}> LOGOUT</button>
        </>
    )
}
export default Home