import * as React from 'react'

import * as Button from '@ondetempico/shared'
import Upload from '../../../components/Upload'

import RecordWrapper from './ui/RecordWrapper'
import WrapperTitle from './ui/WrapperTitle'
import RecordButton from './ui/RecordButton'

const RecordImagesButton = RecordButton(Button)

const RecordSpotImages = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Adicione imagens do pico</WrapperTitle>

    <Upload name="image" id="upload" text="Envie imagens do pico!" />

    <RecordImagesButton color="primary" size="large">
      Adicionar imagens
    </RecordImagesButton>
  </RecordWrapper>
)

export default RecordSpotImages
