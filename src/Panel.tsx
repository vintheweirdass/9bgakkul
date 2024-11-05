import { Link } from "react-router-dom";
import {CpanelDock} from "./components/Dock"

export default function (){
  return <>
  <CpanelDock/>
  <h1>CPanel (powered by <span><Link to="https://desec.io">desec.io</Link></span>)</h1>
  <p></p>
  </>   
}