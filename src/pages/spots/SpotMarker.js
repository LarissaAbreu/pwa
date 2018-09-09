import React, { Component, Fragment } from 'react'
import { Marker } from 'react-leaflet'
import styled from 'styled-components'

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

class SpotMarker extends Component {
  static state = {
    isVibisible: false
  }

  openDialogInformation = () => {
    this.setState({
      isVibisible: true
    })
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

    const imagesCollection = images.map(image => <img key={Math.random()} src={image} />)

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
          position={{ lat: latitude, lng: longitude }} />
      </Fragment>
    )
  }
}

export default SpotMarker
