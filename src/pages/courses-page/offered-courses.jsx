import * as React from 'react'
import axios from 'axios'
import NavBar from '../../components/navbar/navbar'
import './offered-courses.css'

const OfferedCoursesPage = ({ defaultUrl, ...otherProps}) => {
  document.title = 'View | Lasustech | Course'
  const [courses, setCourses] = React.useState([])
  React.useEffect(()=>{
    axios.get(`${defaultUrl}ajax/v1.0/get-course-data/`)
    .then((resp) => resp.data)
    .then((data) => {console.log(data)})
  }, [])
	return (
    <div className='offered-courses'>
      <NavBar/>
      <div className='container-fluid col-md-8'>
        <h1>Courses</h1>
        <hr/>
      </div>
    </div>
	)
}

export default OfferedCoursesPage