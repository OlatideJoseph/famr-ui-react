import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import './offered-courses.css'

const OfferedCoursesPage = ({ defaultUrl, ...otherProps}) => {
  document.title = 'View | Lasustech | Course'
  const [courses, setCourses] = React.useState([])
  React.useEffect(()=>{
    axios.get(`${defaultUrl}ajax/v1.0/offered-courses/`)
    .then((resp) => resp.data)
    .then((data) => {
      setCourses(data['courses'])
    })
  }, [])
	return (
    <div className='offered-courses'>
      <NavBar/>
      <div className='container-fluid col-md-8'>
        <h1>Courses</h1>
        <hr/>
        <hr/>
        {
          courses.map((v) => (
            <blockquote key={v.key}>
              <h4>{ v.title }</h4>
              <p>Requirements: </p>
              <hr/>
            </blockquote>
          ))
        }
      </div>
    </div>
	)
}

export default OfferedCoursesPage