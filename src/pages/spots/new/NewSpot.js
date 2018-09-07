import React, { Component } from 'react'
import styled from 'styled-components'
import { withHandlers } from 'recompose'

import icons from '../../../icons'
import sizes from '../../../sizes'
import colors from '../../../colors'

import Icon from '../../../components/Icon'
import Button from '../../../components/Button'

import RecordSpotData from './RecordSpotData'
import RecordSpotImages from './RecordSpotImages'

import Container from '../../../Container'
import EventType from '../../../EventType'

import LocationContainer from '../../../containers/LocationContainer'

const ConfirmButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  z-index: 500;
  margin: 0 10px;
  width: calc(100% - 20px);
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
`

const Marker = styled(Icon)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  font-size: 25px;
`

class NewSpot extends Component {
  state = {
    isRecordSpotDataVisible: false,
    isRecordSpotImagesVisible: false,
    data: {}
  }

  recordSpotData = () => {
    Container.get('event').dispatch(EventType.CENTER_WAS_RECORDED)

    this.setState({
      isRecordSpotDataVisible: true
    })
  }

  wasImageSubmited = event => {
    event.preventDefault()

    const { data } = this.state
    const { upload } = event.target

    const [ file ] = upload.files
  }

  formDataWasSubmit = event => {
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
      <Wrapper>
        {isRecordSpotImagesVisible && <RecordSpotImages onSubmit={this.wasImageSubmited} />}
        {isRecordSpotDataVisible && <RecordSpotData onSubmit={this.formDataWasSubmit} />}

        <Marker icon={icons.marker} />

        <ConfirmButton
          size="full"
          color="primary"
          onClick={this.recordSpotData}>
          Confirmar essa posição
        </ConfirmButton>

        <LocationContainer event={this.event} className="new-spot__location" />
      </Wrapper>
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
