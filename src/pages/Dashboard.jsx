import { AddConntacts } from "../components/DashboardComponents/AddConntacts"
import { ShowContacts } from "../components/DashboardComponents/ShowContacts"
import { ShowRequest } from "../components/DashboardComponents/ShowRequest"
import { Navbar } from "../components/Navbar"



export const Dashboard = () => {
  return (
      <>
        <Navbar/>
        <AddConntacts />
        <ShowContacts />
        <ShowRequest />
      </>
  )
}
