import React, { Component, Fragment } from 'react'
import { Marker } from 'react-leaflet'
import { styled } from '../../theme'

const Modal = styled.div`
  max-width: 500px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.primary};
  display: block;
`

type State = {
  isVisible: boolean
}

type Props = {
  name: string
  isFree: boolean
  images
  hasStreet: boolean
  hasLongboard: boolean
  latitude: number
  longitude: number
}

class SpotMarker extends Component<Props, State> {
  static state = {
    isVibisible: false
  }

  private openDialogInformation = () => {
    this.setState({ isVisible: true })
  }

  render() {
    const {
      name,
      isFree,
      images,
      hasStreet,
      hasLongboard,
      latitude,
      longitude
    } = this.props

    const imagesCollection = images.map(image => (
      <img key={Math.random()} src={image} />
    ))

    return (
      <Fragment>
        {this.state.isVisible && (
          <Modal>
            {name}
            {imagesCollection}
          </Modal>
        )}

        <Marker
          //icon="../static/images/skateboarder.png"
          onClick={this.openDialogInformation}
          position={{ lat: latitude, lng: longitude }}
        />
      </Fragment>
    )
  }
}

export default SpotMarker
