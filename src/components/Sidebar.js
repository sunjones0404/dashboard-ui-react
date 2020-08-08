import React from 'react'

import UserDetails from './UserDetails'
import ScanSummary from './ScanSummary'
import Sidebarbutton from './SidebarButton'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      <UserDetails name={props.name} email={props.email} />
      <ScanSummary
        scanName={props.scanName}
        dateCompleted={props.dateCompleted}
        status={props.status}
        scanners={props.scanners}
        criticalCount={props.criticalCount}
        highCount={props.highCount}
        mediumCount={props.mediumCount}
        lowCount={props.lowCount}
        informationCount={props.informationCount}
      />
      <Sidebarbutton toggleDarkMode={props.toggleDarkMode} />
    </div>
  )
}
