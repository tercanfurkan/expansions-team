import React from 'react'
import axios from 'axios'
import Default from '../../layouts/default'

class TalentTypePage extends React.Component {
  static getInitialProps ({ query: { type } }) {
    return { type }
  }
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      meta: {},
      talents: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  async componentDidMount () {
    await this.fetchData()
  }
  async fetchData () {
    this.setState({ loading: true })
    const reg = new RegExp(this.props.type, 'g')

    const { data } = await axios.get(
      'https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50'
    )
    const filteredTalents = data.filter(talent =>
      talent.breeds[0]
        .name
        .toLowerCase()
        .match(reg)
    )
    this.setState({
      talents: filteredTalents,
      type: this.props.type,
      meta: { title: `Only ${this.props.type} here!`, description: 'Hands-on' },
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
      <Default meta={this.state.meta}>
        <div>
          <h1>Talent type: {this.props.type}</h1>
          {this.renderTalents()}
        </div>
      </Default>
    )
  }
}

export default TalentTypePage