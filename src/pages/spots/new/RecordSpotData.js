import React from 'react'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Radio from '../../../components/Radio'
import Checkbox from '../../../components/Checkbox'

import RecordWrapper from './styles/RecordWrapper'
import WrapperTitle from './styles/WrapperTitle'
import WrapperSubtitle from './styles/WrapperSubtitle'
import RecordButton from './styles/RecordButton'

const RecordDataButton = RecordButton(Button)

const RecordSpotData = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Ei, adicione as informações do seu pico</WrapperTitle>

    <Input required id="name" label="Nome do pico" />

    <WrapperSubtitle>Esse pico é sugerido pra qual modalidade? Selecione as categorias.</WrapperSubtitle>

    <Checkbox medium id="street" label="Street" />
    <Checkbox medium id="longboard" label="Longboard" />

    <WrapperSubtitle>É necessário pagar pra andar aí?, Marque uma opção.</WrapperSubtitle>

    <Radio name="cost" id="paid" label="O acesso é pago" />
    <Radio name="cost" id="free" label="O acesso é gratuito" defaultChecked />

    <RecordDataButton color="primary" size="full">
      Salvar esse local
    </RecordDataButton>
  </RecordWrapper>
)

export default RecordSpotData
