import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function () {
    return <>
    <Typography variant="h4">Page wasnt found</Typography>
    <Link to="/"><Button size={'large'}>Go back home</Button></Link>
    </>
}