import {Component} from 'react'

import './index.css'

import HistoryItems from '../HistoryItems'

class History extends Component {
  state = {searchInput: '', historyList: []}

  onChangeValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteValue = id => {
    const {historyList} = this.state

    const updatedList = historyList.filter(eachList => eachList.id !== id)
    this.setState({historyList: updatedList})
  }

  onFilteredList = () => {
    const {searchInput, historyList} = this.state

    const filteredList = historyList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  render() {
    const {searchInput} = this.state
    const filteredList = this.onFilteredList()
    const {initialHistoryList} = this.props
    return (
      <div className="bg-container">
        <div className="navbar">
          <div className="containers">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="image"
              alt="app logo"
            />
          </div>
          <div className="input-container">
            <div className="image-contaienr">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-image"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input"
              onChange={this.onChangeValue}
              value={searchInput}
            />
          </div>
        </div>

        <div className="apps-container">
          <ul className="list-container">
            {initialHistoryList.map(eachList => (
              <HistoryItems
                key={eachList.id}
                initialHistoryLists={eachList}
                deleteId={this.onDeleteValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default History
