import { AppBar,IconButton,Toolbar, Typography } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./style.css";

function NavBar(){

    return(
        <AppBar position="static" color="inherit">
            <Toolbar className="toolbar">
                <Typography variant="h6">Safir</Typography>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                    <AccountCircle />
                     </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;