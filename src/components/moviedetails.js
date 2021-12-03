import {Grid, Box, Button, Divider, IconButton} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useLocation } from 'react-router-dom';
const trailerlists = [{url: "", text: "Play Trailer 1"}, {url: "", text: "Play Trailer 2"}]
const MovieDetails = () => {
    const {state} = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop: 70}}>
            <Grid container spacing={0}>
            	<Grid item xs={12} key={0} style={{backgroundColor: "#746A64", padding: 10}}>
            		<p style={{color: "#ffffff"}}>{state.original_title}</p>
            	</Grid>
            </Grid>
            <div style={{margin: 20}}>
	            <Grid container spacing={2}>
	                <Grid item xs={5} key={0} md={2}>
	                	<img src={"https://image.tmdb.org/t/p/original"+state.poster_path} width= {"100%"} alt={state.title} style={{backgroundColor: "#f0f0f0", borderRadius: 4}}/>
	                </Grid>
	                <Grid item xs={7} key={1} md={10} style={{position: "relative"}}>
	                	<h4 style={{color: "#000000", margin: 0, fontSize: 17}}>{state.release_date.split("-")[0]}</h4>
	                	<p style={{color: "#000000", margin: 0, fontSize: 15}}>125 mins</p>
	                	<p style={{color: "#000000", margin: 0, fontSize: 15, fontWeight: "bold", position: "absolute", bottom: 60}}>{state.vote_average}/10</p>
	                	<Button variant="contained" style={{color: "#ffffff", margin: 0, position: "absolute", bottom: 5, backgroundColor: "#746A64"}}>Add to Favorite</Button>
	                </Grid>
	            </Grid>
	            <Grid container spacing={2}>
	                <Grid item xs={12} key={0} style={{marginTop: 30}}>
	                	<p style={{color: "#000000", margin: 0, fontSize: 15}}>{state.overview}</p>
	                </Grid>
	            </Grid>

	            <Grid container spacing={2}>
	                <Grid item xs={12} key={0} style={{marginTop: 30, marginBottom: 10}}>
	                	<p style={{color: "#000000", margin: 0, fontSize: 15, textTransform: "uppercase"}}>Trailers</p>
	                </Grid>
	            </Grid>
	            <Divider style={{marginBottom: 20}}/>

	            <Grid container spacing={2}>
	                <Grid item xs={12} key={0} style={{marginBottom: 5}}>
	                	{trailerlists.map((trailer, index) => (
	                		<div style={{backgroundColor: "#f0f0f0", padding: 10, borderRadius: 4, marginBottom: 5}} key={index}>
		                		<Grid container spacing={0}>
		                			<Grid item xs={2} sm={1} key={23} style={{}}>
	                					<IconButton size="large" aria-label="play Trailer" color="inherit">
				                            <PlayCircleOutlineIcon />
				                        </IconButton>
		                			</Grid>
		                			<Grid item xs={10} key={231} style={{}}>
		                				<p>{trailer.text}</p>
		                			</Grid>
		                		</Grid>
		                	</div>
                		))}
	                </Grid>
	            </Grid>
            </div>
        </Box>
    );
};

export default MovieDetails;