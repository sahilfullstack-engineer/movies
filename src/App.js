import React from 'react';
import Movies from "./components/movies";
import {Box}from '@mui/material';
import Header from "./components/header";

class App extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Header page={"home"} />
                <Movies />
            </Box>
        );
    };
}

export default App;