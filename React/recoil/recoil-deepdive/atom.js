import { atom } from "recoil";

export const myNetworkAtom = atom({
    key: "myNetwork",
    default: 102
})

export const jobsAtom = atom({
    key: "myJobs",
    default: 9
})

export const messagingAtom = atom({
    key: "myMessaging",
    default: 22
})

export const notificationsAtom = atom({
    key: "myNotifications",
    default: 45
})
