import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';
import Contact from './routes/Contact';
import About from './routes/About';
import NotFound from './routes/NotFound';
import Team from './routes/Team';
import Member from './routes/Member';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <h2>Insert team picture here</h2>
                </main>
              }
            />
            <Route path=":memberId" element={<Member />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* <Route path="*" element={<Home />} /> */}
        {/* no match route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
