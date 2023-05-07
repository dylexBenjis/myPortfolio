import React from 'react'
import { ResumeCon } from './NavBarElements';
import docx from '../../Images/cv.docx'

const Resume = () => {
  return (
                  <ResumeCon href={docx} target='blank'>
                       Resume
                    </ResumeCon>
  )
}

export default Resume