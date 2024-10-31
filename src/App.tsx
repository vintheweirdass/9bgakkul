import { useState } from 'react'
import Dock from './components/Dock'
import { Link } from 'react-router-dom'
import { Chip, Rating } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire, faUmbrellaBeach, faRepeat, faBed} from "@fortawesome/free-solid-svg-icons"
import { Spotify } from 'react-spotify-embed'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dock></Dock>
      <h1>9b is <Chip icon={<FontAwesomeIcon icon={faFire} color="red" />} label="Cooked" variant="filled" sx={
      {
        height:50,
        fontSize: 30,
      }
      }/></h1>
      <div className="card">
      <Rating name="read-only" value={100} readOnly />
        <h3>
          We're <code>9b</code>, also called as <code>Salak</code>
        </h3>
        <p>
          We like to <Chip component={'span'} icon={<FontAwesomeIcon icon={faUmbrellaBeach} color="orange" />} label="Chill" variant="filled"/>,
          <Chip component={'span'} icon={<FontAwesomeIcon icon={faBed} color="skyblue" />} label="Sleep" variant="filled"/>,
          and <Chip component={'span'} icon={<FontAwesomeIcon icon={faRepeat} color="lightgreen" />} label="Repeat" variant="filled"/>
        </p>
        <p>just <b>that</b></p>
      </div>
      <Spotify link="https://open.spotify.com/playlist/1DHqRh4zXuziQCKTL9x6tb"/>
      <p className="read-the-docs">
      "Powered by is-not.cool, thx <Link to="https://cutedog5695.me">CuteDog</Link> and <Link to="https://discord.com/users/1266754182082461751">trollm8</Link> for the subdomain service"
      <br/>
      - some shitty guy that made this website, <Link to="https://cupglass.is-a.dev">cupglassdev</Link>
      </p>
    </>
  )
}

export default App
