import {joiResolver} from "@hookform/resolvers/joi";
import {Alert, AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {GenresMenu} from "../GenresMenu";
import css from "./Header.module.css";
import {useAppDispatch} from "../../hooks";
import {Search} from "./Search.styled";
import {SearchIconWrapper} from "./SearchIconWrapper.styled";
import {StyledInputBaseStyled} from "./StyledInputBase.styled";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {MovieTitleValidator} from "../../validators";
import {UserForm} from "../UserForm";
import {movieActions} from "../../redux";

interface IMovieTitle {
    movieTitle: string
}

const Header:FC = () => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm<IMovieTitle>({
        mode: "onSubmit",
        resolver: joiResolver(MovieTitleValidator)
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const search: SubmitHandler<IMovieTitle> = (title) => {
        dispatch(movieActions.setSearchingTitle(title.movieTitle));
        navigate("/search");
        reset();
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
                        {/*<Button color={"inherit"}>
                            <AccountCircle fontSize={"large"}/>
                        </Button>*/}
                        <UserForm/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header};