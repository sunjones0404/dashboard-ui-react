import React from 'react'
import Scanners from './Scanners'
import moment from 'moment'

export default function ScanSummary(props) {
  return (
    <div id='scan-summary' className='scan-summary'>
      <p className='scan-summary__title'>{props.scanName}</p>
      <br />
      <p className='scan-summary__date'>
        <span className='scan-summary__subtitle'>Completed: </span>
        {moment(props.dateCompleted).format('MMM Do YYYY, h:mma')}
      </p>
      <p className='scan-summary__status'>
        <span className='scan-summary__subtitle'>Status:</span> {props.status}
      </p>
      <br />
      <Scanners scanners={props.scanners} />
      <br />
      <p className='scan-summary__subtitle'>Severity Counts</p>
      <p className='scan-summary__severity-count'>
        Critical: {props.criticalCount}
      </p>
      <p className='scan-summary__severity-count'>High: {props.highCount}</p>
      <p className='scan-summary__severity-count'>
        Medium: {props.mediumCount}
      </p>
      <p className='scan-summary__severity-count'>Low: {props.lowCount}</p>
      <p className='scan-summary__severity-count'>
        Information: {props.informationCount}
      </p>
    </div>
  )
}
