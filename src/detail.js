import MovieDetails from "./components/moviedetails";
import {Box}from '@mui/material';
import Header from "./components/header";

const Detail = () => {	
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header page={"detail"}/>
            <MovieDetails />
        </Box>
            
    );
};

export default Detail;