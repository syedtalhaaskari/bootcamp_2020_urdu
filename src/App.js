import "./App.css";
import {
  Routes,
  Route,
  NavLink,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const Home = () => (<h1>Hi I'm in home</h1>)
const BlogStage = () => {
  return (
    <div>
      <h1>Hi I'm in blog</h1>
      <Outlet />
    </div>
  )
}

const BlogIndex = () => {
  return (
    <ul>
      <li><Link to="authors">Authors</Link></li>
      <li><Link to="1">Post 1</Link></li>
      <li><Link to="2">Post 2</Link></li>
    </ul>
  )
}

const BlogAuthors = () => (<h2>Snir David</h2>)
const BlogPost = () => {
  const { postId } = useParams()
  
  return (
    <h2>Blog Post {postId}</h2>
  )
}
const Blog2 = () => (<h2>Blog 2</h2>)

const App = () => {
  const navArr = [
    {
      navLink: "/",
      title: "Home",
    },
    {
      navLink: "/blog",
      title: "Blog",
    },
  ]

  return (
    <div>
      <ul className="navbar">
        {
          navArr.map((item, ind) => (
            <li key={ind}><NavLink to={item.navLink} end>{item.title}</NavLink></li>
          ))
        }
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BlogStage />} >
          <Route path="" element={<BlogIndex />} />
          <Route path="authors" element={<BlogAuthors />} />
          <Route path=":postId" element={<BlogPost />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;