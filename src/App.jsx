
import '@shopify/polaris/build/esm/styles.css';
import {ButtonGroup, Button} from '@shopify/polaris';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ButtonGroup>
      <Button>Cancel</Button>
      <Button variant="primary">Save</Button>
    </ButtonGroup>
     </>
  )
}

export default App
