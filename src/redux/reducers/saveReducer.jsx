let initialState={
    loading:null,
    err:null,
    id:""
}
let saveReducer=(state=initialState, action)=>{
    switch (action.type){
        case "SAVE_RESUME":
            return{
                ...state,loading:true
            }
        case "SAVE_ERR":
            return{
                ...state,err:action.payload,payload:false
            }
        case "SAVE_RESUME":
            return{
                ...state,id:action.payload,payload:false
            }

         default:
            return{
                state
         }   
    }
}

export default saveReducer;