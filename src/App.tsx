import { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

import { TrafficLightBox } from './components/TrafficLightBox'
import { LIGHT_COLORS } from './constants'

const TrafficLightBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 300px;
`
const TimeSteps = [1, 2, 4]
const TimeInterval = 1000

function App() {
  const [firstLightIndex, setFirstLightIndex] = useState(0)
  const secondLightIndex = useMemo(
    () => (firstLightIndex + 2) % 3,
    [firstLightIndex]
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLightIndex((firstLightIndex) => (firstLightIndex + 1) % 3)
    }, TimeInterval * TimeSteps[firstLightIndex])

    return () => clearTimeout(timeout)
  }, [firstLightIndex])

  return (
    <TrafficLightBoxes>
      <TrafficLightBox lightColor={LIGHT_COLORS[firstLightIndex]} />
      <TrafficLightBox lightColor={LIGHT_COLORS[secondLightIndex]} />
    </TrafficLightBoxes>
  )
}

export default App
