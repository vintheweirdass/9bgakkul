import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faHome, faUsers} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
const dockStyle: CSSProperties = {
  display: "flex", // Use display: flex to enable flexbox layout
  flexDirection: "row", // Arrange items in a row
  justifyContent: "space-between", // Distribute space between items
  alignItems: "center", // Vertically align items to the center
};

const btnStyle:CSSProperties = {
  width:50,
  padding:25,
  border:"none"
}
export default function () {
    return <div style={dockStyle}>
    <div>
    <Link to="/">
    <Button style={btnStyle}><FontAwesomeIcon icon={faHome} fontSize={30} color="white"/></Button>
    </Link>
    <Link to="/friends">
    <Button style={btnStyle}><FontAwesomeIcon icon={faUsers} fontSize={30} color="white"/></Button>
    </Link>
    </div>
    <div>
    <Link to="https://instagram.com/9b_iscooked">
    <Button style={btnStyle}><FontAwesomeIcon icon={faInstagram} fontSize={30} color="white"/></Button>
    </Link>
    </div>
    </div>
 }