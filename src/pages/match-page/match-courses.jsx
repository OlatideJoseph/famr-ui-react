import * as React from 'react'
import { Link } from 'react-router-dom'
import './match-courses.css'

const MatchCourses = ({ user, defaultUrl }) => {
  document.title = 'Match Course'
	return (
    <div className='match-course'>
      <div className='container-fluid col-md-8'>
        <center>
          <Link
            className='text-primary'
            to='/match-course-file/'
          >
            Have a file ? Match with file
          </Link>
        </center>
        <fieldset className="mt-3 mb-3">
          <legend>Enter Your Detail</legend>
          <form action="#">
            <div className="row">
              <div className="col">
                <label className="form-label " htmlFor="course_name">Choose Your Course</label>
                <select className="form-select form-select-sm" id="course_name" name="course_name" required="">
                  
                </select>
              </div> 
              <div className="col">
                <label className="form-label" htmlFor="jamb_score">Jamb Score</label>
                <input className="form-control" id="jamb_score" max="400" min="180" name="jamb_score"/>
              </div>           
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field1">Subject 1</label>
                <select className=" form-select form-select-sm" id="field1" name="field1" required="">
                  
                </select>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_1">Grade *</label>
                <select className="form-select form-select-sm" id="grade_1" name="grade_1" required="">
                  
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field2">Subject 2</label>
                <select className="form-select form-select-sm" id="field2" name="field2" required="">
                  
                </select>    
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_2">Grade *</label>
                <select className="form-select form-select-sm" id="grade_2" name="grade_2" required="">
                  
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field3">Subject 3</label>
                <select className="form-select form-select-sm" id="field3" name="field3" required="">
                  
                </select>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_3">Grade *</label>
                <select className="form-select-sm form-select" id="grade_3" name="grade_3" required="">
                  
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field4">Subject 4</label>
                <select className="form-select form-select-sm" id="field4" name="field4" required="">
                  
                </select>  
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_4">Grade *</label>
                <select className="form-select form-select-sm" id="grade_4" name="grade_4" required="">
                  
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field5">Subject 5</label>
                <select className="form-select form-select-sm" id="field5" name="field5" required="">
                  
                </select>  
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_5">Grade *</label>
                <select className="form-select form-select-sm" id="grade_5" name="grade_5" required="">
                  
                </select>
              </div>
            </div>
            <button type='button' className='btn btn-info mt-3'>
              Check
            </button>
          </form>
        </fieldset>
      </div>
    </div>
	)
}

export default MatchCourses