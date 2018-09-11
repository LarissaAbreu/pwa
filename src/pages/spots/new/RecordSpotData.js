import React from 'react'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Radio from '../../../components/Radio'
import Checkbox from '../../../components/Checkbox'

import RecordWrapper from './ui/RecordWrapper'
import WrapperTitle from './ui/WrapperTitle'
import WrapperSubtitle from './ui/WrapperSubtitle'
import RecordButton from './ui/RecordButton'

const RecordDataButton = RecordButton(Button)

const RecordSpotData = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Ei, adicione as informações do seu pico</WrapperTitle>

    <Input required id="name" text="Nome do pico" />

    <WrapperSubtitle>Esse pico é sugerido pra qual modalidade? Selecione as categorias.</WrapperSubtitle>

    <Checkbox id="street" text="Street" />
    <Checkbox id="longboard" text="Longboard" />

    <WrapperSubtitle>É necessário pagar pra andar aí?, Marque uma opção.</WrapperSubtitle>

    <Radio id="paid" name="cost" text="O acesso é pago" />
    <Radio id="free" name="cost" text="O acesso é gratuito" defaultChecked />

    <RecordDataButton color="primary" size="full">
      Salvar esse local
    </RecordDataButton>
  </RecordWrapper>
)

export default RecordSpotData
