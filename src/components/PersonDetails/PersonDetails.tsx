import React, {FC} from 'react';
import {IPersonDetails} from "../../interfaces";
import DummyPhoto from "../../dummy_photos/dummy_person.jpg";
import {posterURL, urls} from "../../configs";
import {Typography} from "@mui/material";
import css from "./PersonDetails.module.css";
import {useAppSelector} from "../../hooks";
import {PersonLinks} from "../PersonLinks";
import {DateComponent} from "../DateComponent";

interface IProps {
    personDetails: IPersonDetails;
}

const PersonDetails: FC<IProps> = ({personDetails}) => {
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {id, name, profile_path, biography, birthday, deathday, place_of_birth, also_known_as} = personDetails;
    return (
        <div className={css.PersonDetails}>
            <div>
                <img src={profile_path ? posterURL + urls.w300PosterSize + profile_path : DummyPhoto} alt={name}/>
                <PersonLinks personId={id}/>
            </div>
            <div className={css.overview}>
                <Typography sx={{color: isDarkTheme ? "white" : "black"}} variant={"h3"}>{name}</Typography>
                <Typography sx={{color: isDarkTheme ? "white" : "black"}} align={"justify"}
                            variant={"subtitle1"}>{biography}</Typography>
            </div>
            <div>
                {birthday && <div style={{color: isDarkTheme ? "white" : "black"}}><DateComponent release_date={birthday}/></div>}
                {birthday && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom
                             variant={"body2"}>Birthday</Typography>}
                {deathday && <div style={{color: isDarkTheme ? "white" : "black"}}><DateComponent release_date={deathday}/></div>}
                {deathday && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"body2"}>Day of
                    Death</Typography>}
                {place_of_birth && <Typography sx={{color: isDarkTheme ? "white" : "black", fontWeight: "bold"}}
                             variant={"body1"}>{place_of_birth}</Typography>}
                {place_of_birth && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"body2"}>Place of
                    Birth</Typography>}
                {also_known_as.map((name, index) => <Typography key={index} sx={{color: isDarkTheme ? "white" : "black", fontWeight: "bold"}} variant={"body1"}>{name}</Typography>)}
                {!!also_known_as.length && <Typography sx={{color: isDarkTheme ? "white" : "black"}} gutterBottom variant={"body2"}>Also Known As</Typography>}
            </div>
        </div>
    );
};

export {PersonDetails};