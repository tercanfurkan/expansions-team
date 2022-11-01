// pages/talents/index.js
import React from 'react'
import axios from 'axios'
import Default from '../../layouts/default'

const meta = { title: 'Talents title', description: 'Talents description' }

class TalentsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      talents: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  async componentDidMount () {
    await this.fetchData()
  }
  async fetchData () {
    this.setState({ loading: true })
    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?size=thumb&limit=10'
    )
    this.setState({
      talents: data,
      loading: false
    })
  }
  renderTalents () {
    return (
      <ul>
        {this.state.talents.map((talent, key) =>
          <li key={key}>
            <img src={talent.url} alt='' />
          </li>
        )}
      </ul>
    )
  }
  render () {
    return (
      <Default meta={meta}>
        <div>
          <h1>Here you have all talents.</h1>
          {this.renderTalents()}
        </div>
      </Default>
    )
  }
}

export default DogsPage