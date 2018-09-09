import React from 'react'

import Button from '../../../components/Button'
import Upload from '../../../components/Upload'

import RecordWrapper from './styles/RecordWrapper'
import WrapperTitle from './styles/WrapperTitle'
import RecordButton from './styles/RecordButton'

const RecordImagesButton = RecordButton(Button)

const RecordSpotImages = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Adicione imagens do pico</WrapperTitle>

    <Upload name="image" id="upload" label="Envie imagens do pico!" />

    <RecordImagesButton color="primary" size="full">
      Adicionar imagens
    </RecordImagesButton>
  </RecordWrapper>
)

export default RecordSpotImages
