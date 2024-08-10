import axios from 'axios'
import { defaultUrl } from '../../network'

const getCoursesFromAPI = async (token) => {
	let coursesResp = await axios.get(`${defaultUrl}ajax/v1.0/offered-courses/`)
	return coursesResp.data
}

export default getCoursesFromAPI