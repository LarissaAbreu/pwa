import React, { Component } from 'react'

import { withHandlers } from 'recompose'

import Button from '../../../components/Button'

import RecordSpotData from './RecordSpotData'
import RecordSpotImages from './RecordSpotImages'

import Container from '../../../Container'
import EventType from '../../../EventType'

import LocationContainer from '../../../containers/LocationContainer'

class NewSpot extends Component {
  state = {
    isRecordSpotDataVisible: false,
    isRecordSpotImagesVisible: false,
    data: {}
  }

  constructor(props) {
    super(props)

    this.formDataWasSubmit = this.formDataWasSubmit.bind(this)
    this.recordSpotData = this.recordSpotData.bind(this)
    this.wasImageSubmited = this.wasImageSubmited.bind(this)
  }

  recordSpotData() {
    Container.get('event').dispatch(EventType.CENTER_WAS_RECORDED)

    this.setState({
      isRecordSpotDataVisible: true
    })
  }

  wasImageSubmited(event) {
    event.preventDefault()

    const { data } = this.state
    const { upload } = event.target

    const [ file ] = upload.files


    console.log(file)

    // this.props.recordPossibleSpot(data)
  }

  formDataWasSubmit(event) {
    event.preventDefault()

    this.setState({
      isRecordSpotDataVisible: false,
      isRecordSpotImagesVisible: true
    })

    const {
      name,
      street,
      longboard,
      free
    } = event.target

    const data = {
      name: name.value,
      hasFree: !!free.checked,
      modalities: {
        street: street.checked,
        longboard: longboard.checked,
      }
    }

    this.setState({ data })
  }

  render() {
    const {
      isRecordSpotDataVisible,
      isRecordSpotImagesVisible
    } = this.state

    return (
      <div className="new-spot">
        {isRecordSpotImagesVisible && <RecordSpotImages onSubmit={this.wasImageSubmited} />}
        {isRecordSpotDataVisible && <RecordSpotData onSubmit={this.formDataWasSubmit} />}

        <i className="icon--marker new-spot__marker" />

        <Button full black onClick={this.recordSpotData} className="new-spot__button">
          Confirmar essa posição
        </Button>

        <LocationContainer event={this.event} className="new-spot__location" />
      </div>
    )
  }
}

const mapHandlers = ({
  recordPossibleSpot: ({ firebase, spot, auth }) => data => {
    return firebase.push('analyze', {
      type: 'spots',
      location: spot,
      uid: auth.id,
      data
    })
  }
})

export default withHandlers(mapHandlers)(NewSpot)
