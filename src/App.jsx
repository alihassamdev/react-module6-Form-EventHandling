import { Routes, Route } from "react-router-dom";

import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import Users from './components/Users/Users'

import './App.css'


function App() {

  return (
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default App
