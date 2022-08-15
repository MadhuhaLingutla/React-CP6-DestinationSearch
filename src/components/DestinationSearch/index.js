// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(each => {
      const TempName = each.name.toLowerCase()
      return TempName.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <h1 className="heading">Destination search</h1>
        <input type="search" onChange={this.getSearchInput} />
        <ul className="destinations-container">
          {searchResults.map(each => (
            <DestinationItem displayItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
