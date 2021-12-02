import { useDispatch, useSelector } from "react-redux";
import { getmovies } from "../store/movies";
import { useEffect } from "react";
import {Grid, Box} from '@mui/material';
import { isMobile } from "react-device-detect";
import { useNavigate } from 'react-router-dom';
const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movielist);
    const { innerHeight: height } = window;
    useEffect(() => {
        dispatch(getmovies());
    }, [dispatch]);

    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop: 70}}>
            <Grid container spacing={0}>
                {movies.map((movie) => (
                    <Grid item xs={6} md={3} sm={6} key={movie.id}>
                        <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} width= {"100%"} alt={movie.title} height={isMobile ? height*0.4 : height*0.6} style={{marginBottom: -5, backgroundColor: "#f0f0f0"}} onClick={()=> navigate('/detail', {state: movie}) }/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Movies;