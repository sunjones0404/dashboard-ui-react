import React from 'react'
import AffectedAssetItem from './AffectedAssetItem'

export default function VulnerabilitiesItem(props) {
  let affectedAssets = props.assets.filter((f) =>
    props.affectedAssets.includes(f.id)
  )

  let solution
  if (props.solution) {
    solution = (
      <div>
        <p className='vulnerabilities__subtitle'>Solution</p>
        <p className='vulnerabilities__text'>{props.solution}</p>
      </div>
    )
  } else {
    solution = null
  }

  let references
  if (props.references) {
    references = (
      <div>
        <p className='vulnerabilities__subtitle'>References</p>
        <p className='vulnerabilities__text'>{props.references}</p>
      </div>
    )
  } else {
    references = null
  }

  return (
    <div className={`vulnerabilities__item ${props.severity}`}>
      <span className='vulnerabilities__severity'>{props.severity}</span>
      <p className='vulnerabilities__name'>{props.name}</p>
      <p className='vulnerabilities__id'>ID: {props.id}</p>
      <p className='vulnerabilities__score'>
        CVSS Score: {props.cvssBaseScore}
      </p>
      <p className='vulnerabilities__subtitle'>Description</p>
      <p className='vulnerabilities__text'>{props.description}</p>
      {solution}
      {references}
      {affectedAssets.map((asset) => {
        return (
          <AffectedAssetItem
            key={asset.id}
            name={asset.name}
            description={asset.description}
            scanCount={asset.scanCount}
          />
        )
      })}
    </div>
  )
}
