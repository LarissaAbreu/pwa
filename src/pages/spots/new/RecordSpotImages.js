import React from 'react'

import Button from '../../../components/Button/index'
import Upload from '../../../components/Upload'

import RecordWrapper from './ui/RecordWrapper'
import WrapperTitle from './ui/WrapperTitle'
import RecordButton from './ui/RecordButton'

const RecordImagesButton = RecordButton(Button)

const RecordSpotImages = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Adicione imagens do pico</WrapperTitle>

    <Upload name="image" id="upload" label="Envie imagens do pico!" />

    <RecordImagesButton color="primary" size="large">
      Adicionar imagens
    </RecordImagesButton>
  </RecordWrapper>
)

export default RecordSpotImages
