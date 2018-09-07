import React from 'react'

import Button from '../../../components/Button'
import Upload from '../../../components/Upload'

const RecordSpotImages = ({ onSubmit }) => (
  <div className="new-spot__content">
    <div className="new-spot__container">
      <h1 className="new-spot__title">Adicione imagens do pico</h1>

      <form className="new-spot__form" onSubmit={onSubmit}>
        <Upload name="image" id="upload" label="Envie imagens do pico!" />

        <Button color="primary" className="new-spot__form__button">
          Adicionar imagens
        </Button>
      </form>
    </div>
  </div>
)

export default RecordSpotImages
