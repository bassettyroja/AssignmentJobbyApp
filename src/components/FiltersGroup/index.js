import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const renderTypesOfEmploymentList = () => {
    const {employmentTypesList} = props

    return (
      <div className="filter-container">
        <h1 className="emp-heading">Type of Employment</h1>
        <ul className="list-container">
          {employmentTypesList.map(eachEmployee => {
            const {changeEmployeeList} = props

            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }

            return (
              <li
                className="list-item"
                key={eachEmployee.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  className="input"
                  type="checkbox"
                  id={eachEmployee.employmentTypeId}
                  value={eachEmployee.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployee.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployee.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="filter-container">
        <h1 className="emp-heading">Salary Ranges</h1>
        <ul className="list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props

            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="list-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  className="input"
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  value={eachSalary.salaryRangeId}
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-container">
      <div className="profile-container">
        <ProfileDetails />
        <hr className="line" />
        {renderTypesOfEmploymentList()}
        <hr className="line" />
        {renderSalaryRange()}
      </div>
    </div>
  )
}

export default FiltersGroup
