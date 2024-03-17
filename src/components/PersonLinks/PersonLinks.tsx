import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import XIcon from '@mui/icons-material/X';
import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {facebookURL, imdbURL, instagramURL, twitterURL, urls} from "../../configs";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from "./PersonLinks.module.css";
import {personActions} from "../../redux";

interface IProps {
    personId: number;
}

const PersonLinks:FC<IProps> = ({personId}) => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {personLinks} = useAppSelector(state => state.personReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(personActions.getPersonLinks({personId}))
    }, [dispatch, personId]);
    return (
        <>
            {personLinks && <div className={css.PersonLinks}>
                {personLinks.imdb_id && <Link style={{color: isDarkTheme ? "white" : "black"}} to={`${imdbURL}${urls.name}/${personLinks.imdb_id}`} target={"_blank"}>{<MovieFilterIcon/>}</Link>}
                {personLinks.facebook_id && <Link style={{color: isDarkTheme ? "white" : "black"}} to={`${facebookURL}/${personLinks.facebook_id}`} target={"_blank"}>{<FacebookIcon/>}</Link>}
                {personLinks.twitter_id && <Link style={{color: isDarkTheme ? "white" : "black"}} to={`${twitterURL}/${personLinks.twitter_id}`} target={"_blank"}>{<XIcon/>}</Link>}
                {personLinks.instagram_id && <Link style={{color: isDarkTheme ? "white" : "black"}} to={`${instagramURL}/${personLinks.instagram_id}`} target={"_blank"}>{<InstagramIcon/>}</Link>}
            </div>}
        </>
    );
};

export {PersonLinks};