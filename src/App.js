import React from 'react'
import './App.css'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

library.add(far)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      firstName: null,
      email: null,
      notifications: [],
      showNotifications: false,
      darkMode: false,
      scanName: null,
      dateCompleted: null,
      status: null,
      scanners: [],
      criticalCount: null,
      highCount: null,
      mediumCount: null,
      lowCount: null,
      informationCount: null,
      vulnerabilitiesCount: 0,
      vulnerabilities: [],
      assets: [],
    }
  }

  async componentDidMount() {
    const fetchData = await axios.get('./scan.json')

    const userData = fetchData.data.user
    const scanData = fetchData.data.scan

    const name = userData.displayName
    const firstName = userData.displayName.split(' ').slice(0, -1)
    const email = userData.email
    const notifications = userData.notifications

    const scanName = scanData.name
    const dateCompleted = scanData.dateCompleted
    const status = scanData.status
    const scanners = scanData.scanners
    const criticalCount = scanData.severityCounts.critical
    const highCount = scanData.severityCounts.high
    const mediumCount = scanData.severityCounts.medium
    const lowCount = scanData.severityCounts.low
    const informationCount = scanData.severityCounts.information

    const vulnerabilitiesCount = scanData.vulnerabilities.length
    const vulnerabilities = scanData.vulnerabilities

    const assets = scanData.assets

    this.setState({
      ...this.state,
      ...{
        name,
        firstName,
        email,
        notifications,
        scanName,
        dateCompleted,
        status,
        scanners,
        criticalCount,
        highCount,
        mediumCount,
        lowCount,
        informationCount,
        vulnerabilitiesCount,
        vulnerabilities,
        assets,
      },
    })
  }

  toggleNotifications = () => {
    this.setState({ showNotifications: !this.state.showNotifications })
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  render() {
    return (
      <div className={this.state.darkMode ? 'dark' : 'light'}>
        <Header
          firstName={this.state.firstName}
          notifications={this.state.notifications}
          showNotifications={this.state.showNotifications}
          toggleNotifications={this.toggleNotifications}
        />
        <div className='grid'>
          <Sidebar
            name={this.state.name}
            email={this.state.email}
            toggleDarkMode={this.toggleDarkMode}
            scanName={this.state.scanName}
            dateCompleted={this.state.dateCompleted}
            status={this.state.status}
            scanners={this.state.scanners}
            criticalCount={this.state.criticalCount}
            highCount={this.state.highCount}
            mediumCount={this.state.mediumCount}
            lowCount={this.state.lowCount}
            informationCount={this.state.informationCount}
          />
          <Content
            vulnerabilitiesCount={this.state.vulnerabilitiesCount}
            vulnerabilities={this.state.vulnerabilities}
            assets={this.state.assets}
          />
        </div>
      </div>
    )
  }
}

export default App
