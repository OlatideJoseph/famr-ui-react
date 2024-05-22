import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './match-courses.css'

const MatchCourses = ({ user, defaultUrl }) => {
  document.title = 'Match Course'
  const [formData, formDataDispatcher] = React.useReducer((state, action)=>{
    switch (action.type){
      case ('SET_SUBJECTS'):
        return {
          ...state,
          subjects : action.payload.subjects
        }
      case ('SET_COURSES'):
        return {
          ...state,
          courses : action.payload.courses
        }
      case ('SET_GRADE_POINT'):
        return {
          ...state,
          gradePoint : action.payload.gradePoint
        }
      default:
        throw new Error()
    }
  }, { subjects: [], courses : [], gradePoint: [] })
  React.useEffect(()=>{
    let token = localStorage.getItem('refresh_token')
    let subjects = localStorage.getItem('subjects')
    let courses = localStorage.getItem('formCourses')
    let gradePoint = localStorage.getItem('gradePoint')

    if (token && !subjects && !courses && !gradePoint){
      axios.get(`${defaultUrl}ajax/v1.0/get-course-data/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.data )
      .then(data => {
        console.log(data)
        formDataDispatcher({type: 'SET_COURSES', payload: {courses: data}})
        localStorage.setItem('formCourses', JSON.stringify(data))
      })
      /*---------------------------------------------------*/
      axios.get(`${defaultUrl}ajax/v1.0/get-subject-data/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.data )
      .then(data => {
        formDataDispatcher({type:'SET_SUBJECTS', payload: { subjects: data}})
        localStorage.setItem('subjects', JSON.stringify(data))
      })
      /*---------------------------------------------------*/
      axios.get(`${defaultUrl}ajax/v1.0/get-grade-and-point/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.data )
      .then(data => {
        formDataDispatcher({type: 'SET_GRADE_POINT', payload: {gradePoint: data}})
        localStorage.setItem('gradePoint', JSON.stringify(data))
      })
      /*---------------------------------------------------*/
    }else{
      formDataDispatcher({type:'SET_SUBJECTS', payload: {subjects: JSON.parse(subjects)}})
      formDataDispatcher({type:'SET_COURSES', payload: {courses: JSON.parse(courses)}})
      formDataDispatcher({type:'SET_GRADE_POINT', payload: {gradePoint:JSON.parse(gradePoint)}})
    }
  }, [])
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
                  <option value="">-------------</option>
                  {
                    formData.courses.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div> 
              <div className="col">
                <label className="form-label" htmlFor="jamb_score">Jamb Score</label>
                <input className="form-control" id="jamb_score" max="400" min="180" type="number" name="jamb_score" defaultValue='180'/>
              </div>           
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field1">Subject 1</label>
                <select className="form-select form-select-sm" id="field1" name="field1" required="">
                  <option value="">-------------</option>
                  {
                    formData.subjects.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_1">Grade *</label>
                <select className="form-select form-select-sm" id="grade_1" name="grade_1" required="">
                  <option value="">-------------</option>
                  {
                    formData.gradePoint.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field2">Subject 2</label>
                <select className="form-select form-select-sm" id="field2" name="field2" required="">
                  <option value="">-------------</option>
                  {
                    formData.subjects.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>    
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_2">Grade *</label>
                <select className="form-select form-select-sm" id="grade_2" name="grade_2" required="">
                  <option value="">-------------</option>
                  {
                    formData.gradePoint.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field3">Subject 3</label>
                <select className="form-select form-select-sm" id="field3" name="field3" required="">
                  <option value="">-------------</option>
                  {
                    formData.subjects.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_3">Grade *</label>
                <select className="form-select-sm form-select" id="grade_3" name="grade_3" required="">
                  <option value="">-------------</option>
                  {
                    formData.gradePoint.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field4">Subject 4</label>
                <select className="form-select form-select-sm" id="field4" name="field4" required="">
                  <option value="">-------------</option>
                  {
                    formData.subjects.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>  
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_4">Grade *</label>
                <select className="form-select form-select-sm" id="grade_4" name="grade_4" required="">
                  <option value="">-------------</option>
                  {
                    formData.gradePoint.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="field5">Subject 5</label>
                <select className="form-select form-select-sm" id="field5" name="field5" required="">
                  <option value="">-------------</option>
                  {
                    formData.subjects.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
                </select>  
              </div>
              <div className="col">
                <label className="form-label" htmlFor="grade_5">Grade *</label>
                <select className="form-select form-select-sm" id="grade_5" name="grade_5" required="">
                  <option value="">-------------</option>
                  {
                    formData.gradePoint.map((v)=>(
                      <option key={v[0]} value={v[0]}>
                        {v[1]}
                      </option>
                    ))
                  }
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