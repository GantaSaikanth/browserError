import './index.css'

const HistoryItems = props => {
  const {initialHistoryLists, deleteId} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryLists

  const onDelteIdValue = () => {
    deleteId(id)
  }

  return (
    <li className="lists">
      <div className="time-cont">
        <p>{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt={title} className="images" />
          <div className="content">
            <p className="heading">{title}</p>
            <p className="para">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button className="delete" type="button" onClick={onDelteIdValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
