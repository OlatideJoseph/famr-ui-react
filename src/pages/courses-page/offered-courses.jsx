import axios from 'axios'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGlobalCoursesData } from '../../reducers/courses-reducer'
import InPageSpinner from '../../components/spinners/in-page-spinner'
import './offered-courses.css'

const OfferedCoursesPage = ({ defaultUrl, ...otherProps}) => {
  document.title = 'View | Lasustech | Course'
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses)
  React.useEffect(()=>{
    dispatch(fetchGlobalCoursesData())
    console.log("Ran")
  }, [])
	return (
    <div className='offered-courses'>
      <div className='container-fluid col-md-8'>
        <h1>Courses we offer</h1>
        <hr/>
        {
          courses.loading ? (<InPageSpinner/>):
          courses?.data.map((v) => (
            <blockquote key={v.key}>
              <h4>{ v.title }</h4>
              <p className='course-requirements'>Requirements:{
                v?.requirements?.map((sub)=>(
                  <span
                    className='sub mt-3'
                    key={sub?.key}
                  >
                    {sub?.req}
                  </span>
                ))
              }
              </p>
              <p>
              Score in %: <span className='text-secondary'>
                {v?.score}
              </span>
              </p>
              <hr/>
            </blockquote>
          ))
        }
      </div>
    </div>
	)
}

export default OfferedCoursesPage