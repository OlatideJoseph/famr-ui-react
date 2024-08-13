import { defaultUrl } from '../../network'
import axios from 'axios'
import Cookies from 'js-cookie'

export const getCourseDataFromAPI = async (token) => {
	let courseResp = await axios.get(`${defaultUrl}ajax/v1.0/get-course-data/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
	})
  return courseResp.data
}

export const getSubjectDataFromAPI = async (token) => {
	let subjectResp = await axios.get(`${defaultUrl}ajax/v1.0/get-subject-data/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    return subjectResp.data
}

export const getGradeAndPointFromAPI = async (token) => {
	let gradePointResp = await axios.get(`${defaultUrl}ajax/v1.0/get-grade-and-point/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    })
    return gradePointResp.data
}

export default {}

