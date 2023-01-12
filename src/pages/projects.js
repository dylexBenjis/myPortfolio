import React from 'react'
import MyWorks from '../Components/Project'

const Projects = ({imageOpen, Toggle}) => {

  return (
    <div>
        <MyWorks imageOpen={imageOpen} Toggle={Toggle}/>
    </div>
  )
}

export default Projects