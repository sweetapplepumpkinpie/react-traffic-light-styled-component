import styled from 'styled-components'

import { LIGHT_COLORS } from '../../constants'

type TrafficLightProps = {
  color: string
  isTurnedOn: boolean
}

const TrafficLight = styled.div`
  background: ${(props: TrafficLightProps) => props.color};
  opacity: ${(props: TrafficLightProps) => (props.isTurnedOn ? '1' : '0.2')};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

const TrafficLightContainer = styled.div`
  border-radius: 10px;
  padding: 20px 20px 0px 20px;
`

function TrafficLightBox({ lightColor }: { lightColor: string }) {
  return (
    <TrafficLightContainer>
      {LIGHT_COLORS.map((color) => (
        <TrafficLight
          key={color}
          color={color}
          isTurnedOn={lightColor === color}
        />
      ))}
    </TrafficLightContainer>
  )
}

export { TrafficLightBox }
