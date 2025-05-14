import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router';
import Navbar from './components/NavBar/NavBar.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'



function App() {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing to see here!</h2>} />
      </Routes>
    </>
  )
}

export default App
