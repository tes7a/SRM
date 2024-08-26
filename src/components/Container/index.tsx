import styled from 'styled-components'

interface ContainerProps {
  height?: string
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: ${(props) => props.height || 'auto'};
  width: 100%;
  margin-top: 40px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #ffffff;
`

export default Container
