import {joiResolver} from "@hookform/resolvers/joi";
import {AccountCircle} from "@mui/icons-material";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import {Alert, AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {GenresMenu} from "../GenresMenu";
import css from "./Header.module.css";
import {useAppDispatch, useAppSelector, useAppLocation, useGenresMenuQuery} from "../../hooks";
import {Search} from "./Search.styled";
import {SearchIconWrapper} from "./SearchIconWrapper.styled";
import {StyledInputBaseStyled} from "./StyledInputBase.styled";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {MovieTitleValidator} from "../../validators";
import {movieActions, userActions} from "../../redux";

interface IMovieTitle {
    movieTitle: string
}

const Header:FC = () => {
    const {pathname} = useAppLocation();
    const {reset, register, handleSubmit, formState: {errors}} = useForm<IMovieTitle>({
        mode: "onSubmit",
        resolver: joiResolver(MovieTitleValidator)
    });
    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {anchorEl, viewMenu, closeMenu} = useGenresMenuQuery();
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.setSearchingTitle(title.movieTitle));
        navigate("/search");
        reset();
    }
    const getUser = () => {
        dispatch(userActions.getUser());
    }
    return (
        <Box id={"header"}>
            <AppBar sx={{background: "#00143C"}} position={"static"}>
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Button color={"inherit"} onClick={() => navigate("/home")}>
                            <MovieIcon/>
                            <Typography color={"inherit"} variant={"h6"} component={"p"}>TMDB</Typography>
                        </Button>
                        <Button color={"inherit"} onClick={() => navigate("/movies")}>
                            Movies
                        </Button>
                        <GenresMenu/>
                        <div className={css.form}>
                            <Search onSubmit={handleSubmit(search)}>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBaseStyled
                                    placeholder="Search..."
                                    inputProps={{"aria-label": "search"}}
                                    {...register("movieTitle")}
                                />
                            </Search>
                            {errors.movieTitle && <Alert className={css.alert} severity={"info"}>{errors.movieTitle.message}</Alert>}
                        </div>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <ThemeSwitcher/>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <div>
                                <Button
                                    color={"inherit"}
                                    onClick={user ? viewMenu : getUser}>
                                    <AccountCircle fontSize={"large"}/>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={!!anchorEl}
                                    onClose={closeMenu}
                                    MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                    <MenuItem onClick={() => {
                                        closeMenu();
                                        navigate(`/${user.id}/watch`)
                                    }}>Watch List</MenuItem>
                                    <MenuItem onClick={() => {
                                        closeMenu();
                                        navigate(`/${user.id}/favorite`)
                                    }}>Favorite List</MenuItem>
                                    <MenuItem onClick={() => {
                                        closeMenu();
                                        dispatch(userActions.logOut());
                                        const path = pathname.substring((pathname.lastIndexOf("/")) + 1);
                                        if (path === "watch" || path === "favorite"){
                                            navigate("/home");
                                        }
                                    }}>Log Out</MenuItem>
                                </Menu>
                            </div>
                            {/*<Typography color={"inherit"} variant={"h6"} component={"p"}>Hello, {user ? user.username : "Guest"}</Typography>*/}
                            <div>
                                <Typography
                                    variant={"button"}
                                    color={"inherit"}>HELLO, {user ? user.username.toUpperCase() : "GUEST"}</Typography>
                            </div>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};