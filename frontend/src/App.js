import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import JobList from './Pages/JobList';
import ContactUs from './Pages/ContactUs';
import JobDetails from './Pages/JobDetails';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import CompanyProfile from './Pages/CompanyProfile';
import AddJobDetails from './Pages/AddJobDetails';
import CompanyJobListPage from './Pages/CompanyJobListPage';
import UpdateJob from './Pages/UpdateJob';
import CandidateProfile from './Pages/CandidateProfile';
import TestimonalSection from './Compnenets/TestimonalSection';



function App() {
  return (
    <Router >
      <div>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/joblist" element={<JobList />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/jobdetails" element={<JobDetails />} />
          <Route exact path="/registration" element={<Registration/>} />
          <Route exact path="/companyprofile" element={<CompanyProfile/>} />
          <Route exact path="/addJob" element={<AddJobDetails/>} />
          <Route exact path="/companyJobList" element={<CompanyJobListPage/>} />
          <Route exact path="/updateJob" element={<UpdateJob/>} />
          <Route exact path="/candidateProfile" element={<CandidateProfile/>} />
          <Route exact path="/test" element={<TestimonalSection/>} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
