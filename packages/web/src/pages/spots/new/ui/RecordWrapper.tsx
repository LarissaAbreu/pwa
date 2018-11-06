import { styled } from '../../../../../../shared/src/theme'

const RecordWrapper = styled.form`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: calc(100vh - 50px);
  z-index: 1100;
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.primary};
  padding: 0 15px;
`

export default RecordWrapper
