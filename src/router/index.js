import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
  {path: '/error', component: Error, exact: false},
  {path: '/about', component: About, exact: true},
  {path: '/login', component: Login, exact: true},
]