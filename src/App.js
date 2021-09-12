import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/home'
import NavBar from './components/navbar'
import Qualification from "./components/qualification"
import Personal from './components/personalData'
import {auth,firestore} from './firebase'
import {useEffect} from 'react'
import { userCreator } from "./redux/actions/userAction"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log(state)

  useEffect(() => {
    let unsub=auth.onAuthStateChanged(async (user)=>{
      dispatch(userCreator(user))
      if(user)
      {
        let {uid,email}=user;
        let docRef=firestore.collection("users").doc(uid)
        let doc= await docRef.get()

        if(!doc.exists){
          docRef.set({
            email,
          })
        }
      }
      console.log(user)
    })
    return () => {
      unsub()
    }
  }, [])
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/qualification">
          <Qualification />
        </Route>
        <Route path="/personal">
          <Personal />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />

        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
