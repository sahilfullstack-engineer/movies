import { styled } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {AppBar, Toolbar, IconButton, Typography}from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: "100%",
  },
}));
const Header = (props) => {	
	const navigate = useNavigate();
    return (
        <AppBar position="fixed" color="primary">
            <StyledToolbar>
                {props.page==="detail" ? <IconButton size="large" aria-label="go back" edge="end" color="inherit" sx={{ mr: 1}} onClick={()=> navigate('/') }>
                    <ArrowBackIcon />
                </IconButton> : null}
                {props.page==="home" ? <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'center'}}>Popular movies</Typography> : null}
                {props.page==="detail" ? <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'center'}}>Movie Details</Typography> : null}
                <IconButton size="large" aria-label="display more actions" edge="end" color="inherit">
                    <MoreIcon />
                </IconButton>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;