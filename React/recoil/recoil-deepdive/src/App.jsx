import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, myNetworkAtom, notificationsAtom, totalNotificationSelector } from '../atom'

function App() {

return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){

  const networkCount =  useRecoilValue(myNetworkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return <div>
      <button>Home</button>
       <button>My Network {networkCount>=0 ? "99+": networkCount}</button>
       <button>Jobs {jobsCount}</button>
       <button>Messaging {messageCount}</button>
       <button>Notifications {notificationCount}</button>
       <button> Me {totalNotificationCount} </button>
  </div>
}

export default App
