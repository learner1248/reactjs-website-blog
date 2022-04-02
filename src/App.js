import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/parts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';
import CreateBlogPost from './components/pages/CreateBlogPost';
import Contact from './components/pages/Contact';

import { Typography } from "@mui/material";

function App() {
  return (<div>
    
    <Router><center>
      <Typography variant="h3" gutterBottom component="div">Welcome</Typography>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/blog/create' element={<CreateBlogPost />} />
        <Route path='/contact' element={<Contact />} />
      </Routes></center>
    </Router></div>
  );
}

export default App;
