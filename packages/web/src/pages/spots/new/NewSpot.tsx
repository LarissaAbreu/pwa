import * as React from 'react'
import { connect } from 'react-redux'
import { withHandlers, compose } from 'recompose'

import icons from '../../../../../shared/src/icons'

import Icon from 'shared'
import * as Button from '@ondetempico/shared'
import Modal from '../../../components/Modal'

import RecordSpotData from './RecordSpotData'
import RecordSpotImages from './RecordSpotImages'

import LocationContainer from '../../../containers/LocationContainer'
import { styled } from '@ondetempico/shared/src'

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

type Actions = {
  // recordSpot: ({}) => boolean
}

type Props = {}

interface State extends Props {
  isRecordSpotDataVisible: boolean
  isRecordSpotImagesVisible: boolean
  isSpotRecorded: boolean
  isSpotRecordPublished: boolean
  data: {}
}

class NewSpot extends React.Component<Props & Actions, State> {
  state = {
    isRecordSpotDataVisible: false,
    isRecordSpotImagesVisible: false,
    isSpotRecorded: false,
    isSpotRecordPublished: false,
    data: {}
  }

  isModalSpotRecordadedVisible = isSpotRecorded => {
    this.setState(({ isSpotRecordPublished }) => ({
      isSpotRecorded,
      isSpotRecordPublished: !isSpotRecordPublished,
      isRecordSpotImagesVisible: false
    }))
  }

  /**
   * @todo If spot is empty, display modal that we can't get position
   */
  recordSpotData = () => {
    // const { spot } = this.props

    this.setState({
      isRecordSpotDataVisible: true
    })
  }

  imageWasSubmited = event => {
    event.preventDefault()

    const { data } = this.state
    const { upload } = event.target
    const [file] = upload.files

    if (!this.props.recordSpot({ ...data, file })) {
      return this.isModalSpotRecordadedVisible(false)
    }

    this.isModalSpotRecordadedVisible(true)
  }

  formDataWasSubmited = event => {
    event.preventDefault()

    this.setState({
      isRecordSpotDataVisible: false,
      isRecordSpotImagesVisible: true
    })

    const { name, street, longboard, free } = event.target

    const data = {
      name: name.value,
      hasFree: !!free.checked,
      modalities: {
        street: street.checked,
        longboard: longboard.checked
      }
    }

    this.setState({ data })
  }

  render(): React.ReactNode {
    const {
      isRecordSpotDataVisible,
      isRecordSpotImagesVisible,
      isSpotRecordPublished,
      isSpotRecorded
    } = this.state

    return (
      <Wrapper>
        {isSpotRecordPublished && (
          <Modal
            onClickButton={this.isModalSpotRecordadedVisible}
            description={
              isSpotRecorded
                ? 'Pico cadastrado com sucesso!'
                : 'Não foi possível cadastrar esse pico.'
            }
          />
        )}

        {isRecordSpotImagesVisible && (
          <RecordSpotImages onSubmit={this.imageWasSubmited} />
        )}
        {isRecordSpotDataVisible && (
          <RecordSpotData onSubmit={this.formDataWasSubmited} />
        )}

        <Marker icon={icons.marker} />

        <ConfirmButton
          size="large"
          color="primary"
          onClick={this.recordSpotData}
        >
          Confirmar essa posição
        </ConfirmButton>

        <LocationContainer className="new-spot__location" />
      </Wrapper>
    )
  }
}

const mapHandlers = {
  recordSpot: ({ firebase, spot, auth }) => async data => {
    const { file } = data
    const PATH = `users/${auth.id}/spots`

    const options = {
      metadataFactory: response => {
        const {
          metadata: { cacheControl, contentLanguage, customMetadata, ...data }
        } = response

        return data
      }
    }

    const upload = await firebase.uploadFile(PATH, file, PATH, options)

    const record = await firebase.push('analyze', {
      data,
      type: 'spots',
      location: spot,
      uid: auth.id
    })

    return upload && record
  }
}

const mapStateToProps = state => state

export default compose(
  connect(mapStateToProps),
  withHandlers(mapHandlers)
)(NewSpot)
