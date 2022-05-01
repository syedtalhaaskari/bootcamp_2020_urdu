import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

const Home = () => (<h1>Hi I'm in home</h1>)
const Blog = () => (<h1>Hi I'm in blog</h1>)

const App = () => {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li><NavLink className={useRouteMatch('/').pathname === location.pathname ? 'active' : ''} to="/" >Home</NavLink></li>
          <li><NavLink className={useRouteMatch('/blog').pathname === location.pathname ? 'active' : ''} to="/blog">Blog</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;