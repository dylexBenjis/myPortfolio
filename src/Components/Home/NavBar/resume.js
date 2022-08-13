import React from 'react'
import { ResumeCon } from './NavBarElements';
import docx from '../../../Images/cv.docx'

const Resume = () => {
  return (
                  <ResumeCon href={docx} download>
                       Resume
                    </ResumeCon>
  )
}

export default Resume