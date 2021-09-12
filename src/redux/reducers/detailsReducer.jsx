let initialState={
    fname:"",
    lname:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    degree:"",
    cgpa:"",
    college:"",
    year:"",
    isPublic:"false"
}
let detailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_DETAILS":
            return {...state,...action.payload}
        default :
        return state    
    }
}

export default detailsReducer