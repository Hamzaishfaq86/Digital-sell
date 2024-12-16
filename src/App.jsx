
import '@shopify/polaris/build/esm/styles.css';
import {ButtonGroup, Button} from '@shopify/polaris';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageProduct  from './pages/ManageProduct'
import Files from './pages/Files';
import FileKeys from './pages/FileKeys';
import Price from './pages/Price';
import OrdersPage from './pages/Orders';
import InputFeilds from './pages/InputFields';
import Createdigitalproduct from './pages/Createdigitalproduct';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Createdigitalproduct/>
    {/* <InputFeilds/> */}
    {/* <OrdersPage/> */}
     {/* <Price/> */}
        {/* <FileKeys/> */}
       {/* <ManageProduct/> */}
        {/* <Files/> */}
     </>
  )
}

export default App
