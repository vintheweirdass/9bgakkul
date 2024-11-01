import { Avatar, Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Grid2, InputBase, Stack, Typography, alpha, styled, useMediaQuery, useTheme } from "@mui/material";
import Dock from "./components/Dock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import React from "react";
import { Badges, badges, badgesColor, friends } from "./friendsList";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover':
 {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [
theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchUi() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<Badges[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function ListofBadges() {
    const ok: JSX.Element[] = [];
    for (const each of badges) {
      ok.push(<Chip key={each} component="div" sx={{
        backgroundColor: badgesColor[each],
      }} label={each} variant="filled" onClick={() => {
        setOpen(false);
      }} />);
    }
    return ok;
  }

  function ListofFriends() {
    const elems: JSX.Element[] = [];
    for (const [name, info] of Object.entries(friends)) {
      function BadgesAvailable() {
        const ok: JSX.Element[] = [];
        if (info.badges) {
          for (const each of info.badges) {
            ok.push(<Chip key={each} component="div" sx={{
              backgroundColor: badgesColor[each as Badges],
            }} label={each} variant="filled" />);
          }
        }
        return ok;
      }

      elems.push(<Grid2 key={name} size={7}>
        <Card sx={{width:265}}> 
        <CardContent>
          <BadgesAvailable />
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Badges
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{color:"text.secondary"}}>
            {info.description}
          </Typography>
        <Button size="large">Learn More</Button>
        </CardContent>
        </Card>
</Grid2>);
    }
    return <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  alignItems="center">
      {elems}
    </Grid2>;
  }

  return (
    <React.Fragment>
      <Search>
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            const src = searchParams
            src.set("search", (e.target as HTMLInputElement).value);
            setSearchParams(src)
            e.preventDefault();
          }
        }}
      />
    </Search>
      <Chip sx={{
        margin: 3,
        fontSize: 18
      }} avatar={<Avatar>{badges.length}</Avatar>} label="Show all
 available badges" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select your badges here"}
        </DialogTitle>
        <DialogContent>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
          >
            
<ListofBadges />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <ListofFriends />
    </React.Fragment>
  );
}

export default function () {
  return <>
    <Dock />
    <h1>9b friends</h1>
    <p>This is the list of friends in <code>9b</code> that already opt-in to show theirself in the friends list</p>
    <p>Or opt-out if they use the sub-sub domain feature. To prevent malicious activites to the <Link to="/">subdomain</Link>, and the <Link to="https://is-not.cool">root domain itself</Link></p>
    
    <SearchUi />
  </>;
}
