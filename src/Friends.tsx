import {Box, Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, InputBase, Stack, Typography, alpha, styled } from "@mui/material";
import Dock from "./components/Dock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams, useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Badges, badges, badgesColor, friends, social } from "./friendsList.ts";
// payah si js, gini doang butuh impor modul external
import isNum from 'is-number'

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
  const lastVisitedPage = "cgd_LastVisitedPage"
  function convertParamToJson(p:URLSearchParams):string {
    const obj:{[k:string]:string} = {}
    for (const [k,v] of p.entries()) {
      obj[k] = v
    }
    return JSON.stringify(obj)
  }
  function convertJsonToParam(p?:string|null, handler?:URLSearchParams):URLSearchParams {
    const inp = p?JSON.parse(p):{}
    const h = handler||new URLSearchParams()
    if (Object.keys(inp??{}).length<1) return h;
    for (const [k,v] of Object.entries(inp)) {
      h.set(k, v as string)
    }
    return h
  }
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const p = useParams();
  const [load, setLoad] = React.useState(false);
  useEffect(()=>{
    if (!p.name) {
      if (load) {
      sessionStorage.setItem(lastVisitedPage, convertParamToJson(searchParams))
      } else {
      setSearchParams(e=>{
        setLoad(true)
        return convertJsonToParam(sessionStorage.getItem(lastVisitedPage), e)
      })
      } 
    } 
  }, [p.name, searchParams])
  // google, fix this motherfucker
  const spBadges = searchParams.get("badges")
  const spSearch = searchParams.get("search")
  const filterBadges:Badges[] = (spBadges && ((spBadges.includes(",")?spBadges.split(","):[spBadges]).some(function(each){
    return (badges as string[]).includes(each)
  })))?(spBadges.includes(",")?spBadges.split(","):[spBadges]) as Badges[]:[]
  // useEffect(()=>{
  //   console.log("Heyy")
  //   setSearchParams(src => {
  //     if (filterBadges&&filterBadges.length>0) {
  //       src.set("badges", filterBadges.join(","));
  //     } else {
  //       if (src.has("badges")) src.delete("badges")
  //     }
  //   return src
  //   })
  // }, [filterBadges])
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
      }} label={each} variant="filled" avatar={filterBadges.includes(each)?<FontAwesomeIcon icon={faSearch} color="white" />:undefined} onClick={() => {
        setSearchParams(params=>{
        let source:Badges[] = filterBadges
        if (source.includes(each)) source = filterBadges.filter(e => e !== each);
        else source.push(each)
        if (source.length>0) {
          params.set("badges", source.join(","));
        } else {
          if (params.has("badges")) params.delete("badges")
        }
        return params 
      })
        setOpen(false);
      }} />);
    }
    return ok;
  }

  function ListofFriends() {
    const elems: JSX.Element[] = [];
    let persons:typeof friends={}
        // try finding the match
    if (filterBadges.length<1 && !spSearch) persons = friends
    else  {
      persons = {}
      for (const [name, info] of Object.entries(friends)) {
        if (filterBadges.length>0) {
          if (filterBadges.some((e)=>!info.badges.includes(e))) continue
        }
        if (spSearch) {
          if (!name.includes(spSearch)) continue
        }
        persons[name] = info
      
    }
  }
    // if dosent found, throws a fake grid that shows a not found error
    if (Object.keys(persons).length<1) {
    return [<Typography key={"notfound__!__!"} variant="h6">Person not found</Typography>]
    }
    for (const [name, info] of Object.entries(persons)) {
      const [aboutPopup, setAboutPopup] = React.useState(false)
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
      function OwnsDomain() {
        const hostname = "9b.is-not.cool"
        if (!info.ownsDomain) return
        function Domains(){
          const ok:JSX.Element[] = []
          for (const each of info.ownsDomain!) {
             ok.push(<Link key={each} to={each==="@"?"/":`https://${each}.${hostname}`}>
              <Button>
              {each==="@"?hostname:(each+"."+hostname)}
              </Button></Link>)
          }
          return ok
        }
        return <Typography variant="body1" sx={{textAlign:"center"}}>
          Domains owned <Box component="span" display="flex" justifyContent="center" flexWrap="wrap" gap={0.5}><Domains/></Box>
        </Typography>
      }
      function ContactMe() {
        if (!info.social && Object.keys(info.social??{}).length<1) return
        const defaultProvider:{[k in (typeof social)[number]]:string} = {
          discord:"https://discord.com/users/",
          instagram:"https://instagram.com/",
          spotify:"https://open.spotify.com/user/",
          website:"https://",
          github:"https://github.com/",
          email:"mailto:"
        }
        function Social(){
          const ok:JSX.Element[] = []
          for (const [k, v] of Object.entries(info.social!)) {
            for (const each of v) {
             ok.push(<Link key={k+each} to={`${defaultProvider[k as keyof typeof defaultProvider]}${each}`}>
              <Button>
              <Typography variant="body1">{k}{k!=="spotify"&&!isNum(each)?` (${each})`:undefined}</Typography>
              </Button>
              </Link>)
            }
          }
          return ok
        }
        return <Typography variant="body1" sx={{textAlign:"center"}}>
          Social <Box component="span" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={1}><Social/></Box>
        </Typography>
      }
      useEffect(()=>{
        if (p.name && p.name === name) {
          sessionStorage.setItem(lastVisitedPage, convertParamToJson(searchParams))
          setAboutPopup(true)
        }
      }, [p.name])
      elems.push(<Grid2 key={name} size={5.5}>
        <Card>
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
        <Link to={`/friends/${name}`}><Button size="large">Learn More</Button></Link>
        </CardContent>
        </Card>
<Dialog
        open={aboutPopup}
        onClose={()=>{setAboutPopup(false)}}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          <BadgesAvailable/><br/>
          About {name}
        </DialogTitle>
        <DialogContent style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {info.description && <>
            <Typography variant="body1">
            Description
          </Typography><Typography variant="body1" sx={{color:"text.secondary"}}>
            {info.description}
          </Typography></>}
          {info.ownsDomain && <OwnsDomain/>}
          {(info.social && Object.keys(info.social??{}).length>0) && <ContactMe/>}
        </DialogContent>
        <DialogActions>
          <Link to="/friends">
          <Button>
            Close
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
</Grid2>);
    }
    return <Grid2
    container
    spacing={1}
    rowGap={1.2}
    direction="row"
    maxWidth="lg"
    justifyContent="center"
>
      {elems}
    </Grid2>;
  }
  let [search, setSearch] = React.useState(searchParams.get("search")??"")
  return (
    <React.Fragment>
      <div style={{display:"flex", flexDirection:"row", flexGrow:1, justifyContent:"center", alignItems:"center", marginBottom:10}}>
      <Search>
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        value={search}
        inputProps={{ 'aria-label': 'search' }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setSearchParams(src=>{
            const val = (e.target as HTMLInputElement).value
            if (val.length<1) {
              if (src.has("search")) {
                src.delete("search");
              }
            } else src.set("search", val);
            return src
          })
            e.preventDefault();
          }
        }}
      />
    </Search>
    <Button onClick={()=>{
      setSearchParams(src=>{
        if (src.has("search")) {
          setSearch((s)=>{
            s = ""
            return s
          })
          src.delete("search")
        }
        return src
      })
    }}>Clear all</Button>
    </div>
      <Chip sx={{
        margin: 3,
        fontSize: 18
      }} label={`
      ${(filterBadges.length>0 && `(${filterBadges.length}) `) || ""}Show all
 available badges`} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{"Select your badges here"}
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
          {
          searchParams.has("badges")
          &&
          <Button onClick={()=>{
            setSearchParams(src=>{
              if (src.has("badges")) src.delete("badges")
              return src
            })
            setOpen(false)
          }}>
            Clear All
          </Button>
          }
          <Button onClick={handleClose}>
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
