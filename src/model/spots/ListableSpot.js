import FilledForm from './FilledForm'

class ListableSpot {
  location

  /**
   * @type {FilledForm}
   */
  data

  /**
   * @param {FilledForm} data
   */
  constructor(data, location) {
    this.data = data
    this.location = location
  }

  /**
   * @param {FilledForm} data
   */
  static build(data, location) {
    return new ListableSpot(data, location)
  }

  getLocation() {
    return this.location
  }

  /**
   * @returns {FilledForm}
   */
  getData() {
    return this.data
  }
}

export default ListableSpot
