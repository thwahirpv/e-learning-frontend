import React from 'react'
import UserIntro from '../../components/user/UserIntro'

import UserAbout from '../../components/user/UserAbout'
import UserLandingInstruction from '../../components/user/UserLandingInstruction'
import UserLandingFooter from '../../components/user/UserLandingFooter'

const UserLandingPage = () => {
  return (
    <div className='bg-white dark:bg-dark-blue-800'>
        <UserIntro />
        <UserAbout />
        <UserLandingInstruction />
        <UserLandingFooter />
    </div>
  )
}

export default UserLandingPage
