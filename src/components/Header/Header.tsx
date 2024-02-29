import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import React, {FC, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppContext} from "../../hooks";
import {movieActions} from "../../reducers";
import {Search} from "./Search.styled";
import {SearchIconWrapper} from "./SearchIconWrapper.styled";
import {StyledInputBaseStyled} from "./StyledInputBase.styled";
import {ThemeSwitcher} from "../ThemeSwitcher";

interface IMovieTitle {
    movieTitle: string
}

const Header:FC = () => {
    const {reset, register, handleSubmit} = useForm<IMovieTitle>();
    const {dispatch} = useAppContext();
    const navigate = useNavigate();
    const inputRef = useRef<string>(null);
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.searchMovies(title.movieTitle));
        navigate("/search");
        reset();
    }
    return (
        <Box>
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
                        <Search onSubmit={handleSubmit(search)}>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBaseStyled
                                ref={inputRef}
                                placeholder="Search..."
                                inputProps={{"aria-label": "search"}}
                                {...register("movieTitle")}
                            />
                        </Search>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <ThemeSwitcher/>
                        <Button color={"inherit"}>
                            <AccountCircle fontSize={"large"}/>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};