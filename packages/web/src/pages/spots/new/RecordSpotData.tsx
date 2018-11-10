import * as React from 'react'

import { Input } from '@ondetempico/shared/src/components/Input'
import { Radio } from '@ondetempico/shared/src/components/Radio'
import { Checkbox } from '@ondetempico/shared/src/components/Checkbox'
import { Button } from '@ondetempico/shared/src/components/Button'

import RecordWrapper from './ui/RecordWrapper'
import WrapperTitle from './ui/WrapperTitle'
import WrapperSubtitle from './ui/WrapperSubtitle'
import {RecordButton} from './ui/RecordButton'

const RecordDataButton = RecordButton(Button)

const RecordSpotData = ({ onSubmit }) => (
  <RecordWrapper onSubmit={onSubmit}>
    <WrapperTitle>Ei, adicione as informações do seu pico</WrapperTitle>

    <Input required={true} id="name" text="Nome do pico" />

    <WrapperSubtitle>
      Esse pico é sugerido pra qual modalidade? Selecione as categorias.
    </WrapperSubtitle>

    <Checkbox id="street" text="Street" />
    <Checkbox id="longboard" text="Longboard" />

    <WrapperSubtitle>
      É necessário pagar pra andar aí?, Marque uma opção.
    </WrapperSubtitle>

    <Radio
      id="paid"
      name="cost"
      text="O acesso é pago"
      defaultChecked={false} />

    <Radio
      id="free"
      name="cost"
      text="O acesso é gratuito"
      defaultChecked={true}
    />

    <RecordDataButton color="primary" size="large">
      Salvar esse local
    </RecordDataButton>
  </RecordWrapper>
)

export default RecordSpotData
