import "./css/preview.css"
import {useSelector} from "react-redux"
let Preview=()=>{
   let{fname,lname,email,phone,city,state,college,cgpa,degree,year} = useSelector(state => state.details)
    let templateCode=useSelector(state=>state.template)
    return <>
    <div className="previewContainer">
        <p className={`template-${templateCode}`}>{fname}</p>
        <p className={`template-${templateCode}`}>{lname}</p>
        <p className={`template-${templateCode}`}>{email}</p>
        <p className={`template-${templateCode}`}>{phone}</p>
        <p className={`template-${templateCode}`}>{city}</p>
        <p className={`template-${templateCode}`}>{state}</p>
        <p className={`template-${templateCode}`}>{college}</p>
        <p className={`template-${templateCode}`}>{cgpa}</p>
        <p className={`template-${templateCode}`}>{degree}</p>
        <p className={`template-${templateCode}`}>{year}</p>
    </div>
    </>
}

export default Preview