import React from 'react'
import Default from '../layouts/defaults'
import axios from 'axios'

const meta = { title: 'ExpansionsTeam', description: 'Expand your team' }

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            talent: {}
        }
        this.fetchData = this.fetchData.bind(this)
    }
    
    async componentDidMount() {
        await this.fetchData()
    }

    async fetchData() {
        this.setState( { loading: true })
        const { data } = await axios.get(
            'https://api.thedogapi.com/v1/images/search?size=thumb&limit=10'
        )
        this.setState({
            talent: data,
            loading: false
        })
    }

    render() {
        return (
            <Default meta={meta}>
                <div>
                    <h1>Expand your team</h1>
                    <h3>Talent of the day:</h3>
                    <img src={this.state.talent.url} alt='' />
                </div>
            </Default>
        )
    }
}

export default IndexPage