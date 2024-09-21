import { atom, selector } from "recoil";

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

export const totalNotificationSelector = selector({
    key: "totalNotification",
    get: ({ get }) => {
        const myNetwork = get(myNetworkAtom);
        const jobs = get(jobsAtom);
        const messaging = get(messagingAtom);
        const notifications = get(notificationsAtom);
        return myNetwork + jobs + messaging + notifications;
        }
})
