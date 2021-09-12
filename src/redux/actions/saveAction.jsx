import { firestore } from "../../firebase"

export const saveResumeCreator=()=>{
    return{
        type:"SAVE_RESUME",
     

    }
}
export const saveErrCreator=(err)=>{
    return{
        type:"SAVE_ERR",
        payload:err,
    }
}
export const saveCompletedCreator=(id)=>{
    return{
        type:"SAVE_RESUME",
        payload:id,


    }
}

export const saveResume=(uid,details,code)=>{
    // let u = uid;
    // console.log(uid+" "+details);
    return((dispatch)=>{
        dispatch(saveResumeCreator())
        firestore.collection("resume").add({
            uid,
            details,
            code,
        }).then((docRef)=>{
            return docRef.get()
        }).then((doc)=>{
            dispatch(saveCompletedCreator(doc.id))
        }).then((err)=>{
            dispatch(saveErrCreator(err))
        })
    })
}