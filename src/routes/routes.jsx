import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import LoginForm from "../pages/LoginForm/LoginForm";
import SignUpForm from "../pages/LoginForm/SignUpForm";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <SignUpForm /> }
];
