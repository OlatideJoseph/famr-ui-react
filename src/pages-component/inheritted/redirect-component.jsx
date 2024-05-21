import * as React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function Redirect({ to }){
  const navigate = useNavigate()
  React.useEffect(() => {
    navigate(to=to)
  }, [])
  return (
    <>
    </>
  )
}

export default Redirect