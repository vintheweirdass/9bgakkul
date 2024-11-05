import {Button, Typography} from "@mui/material"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faSpotify} from "@fortawesome/free-brands-svg-icons"
import {faHome, faUsers, faWindowMaximize} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
const dockStyle: CSSProperties = {
  display: "flex", // Use display: flex to enable flexbox layout
  flexDirection: "row", // Arrange items in a row
  justifyContent: "space-between", // Distribute space between items
  alignItems: "center", // Vertically align items to the center
  position:"fixed",
    top:0,
    left:1,
    width:"100%",
    zIndex:100,
    backgroundColor:"black"
};

const btnStyle:CSSProperties = {
  width:50,
  padding:25,
  border:"none"
}
export function CpanelDock(){
  
  return <><div style={dockStyle}>
  <div>
  <Link to="/">
  <Button style={btnStyle}><FontAwesomeIcon icon={faHome} fontSize={30} color="white"/></Button>
  </Link>
  </div>
  <div>
  <Link to="mailto:abuse@cupglass.is-a.dev">
  <Button>
  <Typography>abuse@cupglass.is-a.dev</Typography>
  </Button>
  </Link>
  </div>
  </div>
  <div style={
    {
      marginBottom:100
    }
  }></div>
  </>
}
export default function () {
    return <><div style={dockStyle}>
    <div>
    <Link to="/">
    <Button style={btnStyle}><FontAwesomeIcon icon={faHome} fontSize={30} color="white"/></Button>
    </Link>
    <Link to="/friends">
    <Button style={btnStyle}><FontAwesomeIcon icon={faUsers} fontSize={30} color="white"/></Button>
    </Link>
    <Link to="/panel">
    <Button style={btnStyle}><FontAwesomeIcon icon={faWindowMaximize} fontSize={30} color="white"/></Button>
    </Link>
    </div>
    <div>
    <Link to="https://instagram.com/9b_iscooked">
    <Button style={btnStyle}><FontAwesomeIcon icon={faInstagram} fontSize={30} color="white"/></Button>
    </Link>
    <Link to="https://open.spotify.com/playlist/1DHqRh4zXuziQCKTL9x6tb">
    <Button style={btnStyle}><FontAwesomeIcon icon={faSpotify} fontSize={30} color="white"/></Button>
    </Link>
    </div>
    </div>
    <div style={
      {
        marginBottom:100
      }
    }></div>
    </>
 }