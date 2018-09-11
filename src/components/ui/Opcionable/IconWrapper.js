import styled from 'styled-components'

import Icon from '../../Icon'

const IconWrapper = styled(Icon)`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 10px;
  color: ${props => props.theme.colors.primary};
`

export default IconWrapper
