import React from 'react'
import TutorNavBar from '../../components/tutor/TutorNavBar'
import TutorIntro from '../../components/tutor/TutorIntro'
import TutorAbout from '../../components/tutor/TutorAbout'
import TutotLandingInstruction from '../../components/tutor/TutotLandingInstruction'
import TutorLandingFooter from '../../components/tutor/TutorLandingFooter'

const TutorLandingPage = () => {
  return (
    <div className='bg-white dark:bg-dark-blue-800'>
        <TutorIntro />
        <TutorAbout />
        <TutotLandingInstruction />
        <TutorLandingFooter />
    </div>
  )
}
// bg-gradient-to-tr from-gray-50 from-0% to-blue-200 to-100% light

export default TutorLandingPage
