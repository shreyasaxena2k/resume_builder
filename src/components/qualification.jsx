import "./css/form.css"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { detailCreator } from "../redux/actions/detailsAction"
import { saveResume } from "../redux/actions/saveAction"
import Preview from "./preview"

let Qualification = () => {
    let history = useHistory()
    let details = useSelector(state => state.details)
    let { degree, college, cgpa, year, isPublic } = details
    let code = useSelector(state => state.template)
    let uid=useSelector(state=>state.user)
    let dispatch = useDispatch()
    return <>
        <div className="qual-container">
            <div className="qual-form">
                <div class="row m-4">
                    <h2>Professional Details</h2>
                    <div class="col-5">
                        <input onChange={(e) => {
                            dispatch(detailCreator({ degree: e.currentTarget.value }))
                        }} value={degree} type="text" class="form-control" placeholder=" Degree" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e) => {
                            dispatch(detailCreator({ college: e.currentTarget.value }))
                        }} value={college} type="text" class="form-control" placeholder="College Name" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e) => {
                            dispatch(detailCreator({ cgpa: e.currentTarget.value }))
                        }} value={cgpa} type="text" class="form-control" placeholder="CGPA" />
                    </div>
                    <div class="col-5">
                        <input onChange={(e) => {
                            dispatch(detailCreator({ year: e.currentTarget.value }))
                        }} vlaue={year} type="number" class="form-control" placeholder="Year of graduation" />
                    </div>
                </div>
                <div onClick={() => {
                    history.push("/personal")
                }} className="btn btn-primary m-4">Back</div>

                <div class="form-check m-4">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        checked={isPublic}
                        onClick={(e) => {
                            dispatch(
                                detailCreator({ isPublic: e.currentTarget.checked })
                            );
                        }}
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Make public
                    </label>
                </div>
            </div>
            {/* <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary m-4"
          >
            Back
          </button> */}
            <Preview />
        </div>
        <button className="btn btn-primary qual-gen">Generate Link</button>
        <button onClick={() => {
            dispatch(saveResume(uid,details, code))
        }} className="btn btn-primary qual-save">Save to Databse</button>
    </>
}
export default Qualification