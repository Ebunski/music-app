import Nav from "../components/Nav";
import Player from "../components/Player";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Player />
    </div>
  );
}
