import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { myNetworkAtom } from '../atom'

function App() {

return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){

  const networkCount =  useRecoilValue(myNetworkAtom);

  return <div>
      <button>Home</button>
       <button>My Network{networkCount>=0 ? "99+": networkCount}</button>
       <button>Jobs</button>
       <button>Messaging</button>
       <button>Notifications</button>
  </div>
}

export default App
