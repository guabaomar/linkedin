import React from 'react'
import "./header.css"
import companyLogo from './linkedin.png';
import search from './search.svg';
import HeaderOptions from './HeaderOptions';
import home from './home.png';
import network from './network.png';
import jobs from './jobs.png';
import messaging from './messaging.png';
import notifications from './notifications.png';
import me from './me.png';

function Header() {
  return (
    <div className='header'>


<div className='header_left'>
<img src={companyLogo} height="40px"  width=" 40px" alt="BigCo Inc. logo"/>
  <div className='header_search'>
  <img src={search} height="25px"  width=" 25px" alt="BigCo Inc. logo"/>
 
  <input type="text"/> 

  </div>





</div>


<div className='header_right'>

<HeaderOptions icon={home} title="Home" />
<HeaderOptions icon={network} title="My Network" />
<HeaderOptions icon={jobs} title="Jobs" />
<HeaderOptions icon={messaging} title="Messaging" />
<HeaderOptions icon={notifications} title="Notifications" />
<HeaderOptions icon={me} title="Me" />
</div>





    </div>
  )
}

export default Header
