import { Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const dockStyle: CSSProperties = {
  display: "flex", // Use display: flex to enable flexbox layout
  flexDirection: "row", // Arrange items in a row
  justifyContent: "space-evenly", // Distribute space between items
  alignItems: "center", // Vertically align items to the center
  position:"fixed",
    bottom:0,
    right:0,
    width:"100%",
    zIndex:100,
    backgroundColor:"black",
    maxWidth:300,
    borderRadius:30
};

export default function () {
    return <><div style={dockStyle}>
    <FontAwesomeIcon icon={faCircleInfo}/>
    <Typography>Abuse report:</Typography>
    <Link to="mailto:abuse@cupglass.is-a.dev"><Typography>abuse@cupglass.is-a.dev</Typography></Link>
    </div>
    </>
 }