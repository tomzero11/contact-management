import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Register from "./components/users/Register"
import Login from "./components/users/Login"
import DashboardLayout from "./components/DashboardLayout"
import UserProfile from "./components/users/UserProfile"
import UserLogout from "./components/users/UserLogout"
import CreateContact from "./components/contact/CreateContact"
import ContactList from "./components/contact/ContactList"
import EditContact from "./components/contact/EditContact"
import DetailContact from "./components/contact/DetailContact"
import AddAddress from "./components/address/AddAddress"
import EditAddress from "./components/address/EditAddress"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={< Register/>}/>
            <Route path="/login" element={< Login/>}/>
            <Route path="/" element={<ProtectedRoute />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>

            <Route path="users">
              <Route path="profile" element={< UserProfile />} />
              <Route path="logout" element={< UserLogout />} />
            </Route>

            <Route path="contacts">
              <Route index element={<ContactList />}/>
              <Route path="create" element={<CreateContact />}/>
              <Route path=":id">
                  <Route index element={<DetailContact/>} />
                  <Route path="edit"element={<EditContact/>}/>
                  <Route path="addresses">
                    <Route path="create" element={<AddAddress />}/>
                    <Route path=":addressId/edit" element={<EditAddress />}/>
                  </Route>
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
