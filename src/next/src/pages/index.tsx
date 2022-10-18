import type { NextPage } from 'next'
import AScene from '../components/aframe/AScene'
import ACamera from '../components/aframe/ACamera'
import AText from '../components/aframe/AText'
import { useMounted } from '../lib/hooks/useMounted'

const Home: NextPage = () => {
  const mounted = useMounted()

  const commonProps = {
    'look-At': '[gps-camera]',
    'gps-entity-place':
      'latitude: 37.492151723031024; longitude: 139.94461074269023;',
    // 'latitude: 37.5150016; longitude: 139.9335767;',
  }

  if (!mounted) return <div>loading...</div>

  return (
    <div style={{ width: '200vw', height: '100vh' }}>
      <AScene
        embedded=""
        renderer="colorManagement: true"
        vr-Mode-Ui="enabled: false"
        arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3; detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <ACamera
          gps-Camera="maxDistance: 0"
          cursor="rayOrigin: mouse; fuse:false"
          camera=""
        />

        <AText
          {...commonProps}
          value={'Hello, World'}
          scale={'8 8 8'}
          position={'0 4 0'}
          color={'black'}
          width={18}
          align="center"
          z-Offset={1}
        />

        <AText
          {...commonProps}
          value={
            'Hello, Demo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
          scale={'1 1 1'}
          position={'2 2 2'}
          color={'white'}
          width={18}
          align="center"
          z-Offset={2}
        />
      </AScene>
    </div>
  )
}

export default Home
