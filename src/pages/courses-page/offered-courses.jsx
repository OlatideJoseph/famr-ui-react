import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import InPageSpinner from '../../components/spinners/in-page-spinner'
import './offered-courses.css'

const OfferedCoursesPage = ({ defaultUrl, ...otherProps}) => {
  document.title = 'View | Lasustech | Course'
  const [courses, setCourses] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(()=>{
    setIsLoading(true)
    if (!localStorage.getItem('courses')){
      axios.get(`${defaultUrl}ajax/v1.0/offered-courses/`)
      .then((resp) => resp.data)
      .then((data) => {
        setCourses(data['courses'])
        localStorage.setItem('courses', data)
        setIsLoading(false)
      })
    } else{
      setCourses(localStorage.getItem('courses')['courses'])
    }
  }, [])
	return (
    <div className='offered-courses'>
      {/*<NavBar/>*/}
      <div className='container-fluid col-md-8'>
        <h1>Courses</h1>
        <hr/>
        {
          isLoading ? (<InPageSpinner/>):
          courses.map((v) => (
            <blockquote key={v.key}>
              <h4>{ v.title }</h4>
              <p className='course-requirements'>Requirements:{
                v.requirements.map((sub)=>(
                  <span
                    className='sub'
                    key={sub.key}
                  >
                    {sub.req}
                  </span>
                ))
              }
              </p>
              <p>
              Score in %: <span className='text-secondary'>
                {v.score}
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