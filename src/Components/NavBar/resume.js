import React from 'react'
import { ResumeCon } from './NavBarElements';
import docx from '../../Images/CV.pdf'

const Resume = () => {
  return (
                  <ResumeCon href={docx} target='_blank'>
                       Resume
                    </ResumeCon>
  )
}

export default Resume