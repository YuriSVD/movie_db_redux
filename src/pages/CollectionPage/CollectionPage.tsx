import React from 'react';
import {useLoaderData} from "react-router-dom";

import css from "./CollectionPage.module.css";
import {Collection, Movies} from "../../components";
import {ICollection} from "../../interfaces";

type LoaderDate = {
    data: ICollection;
}
const CollectionPage = () => {
    const {data} = useLoaderData() as LoaderDate;
    const sortedByTime = data.parts.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    return (
        <div className={css.CollectionPage}>
            <Collection collection={data}/>
            <Movies movies={sortedByTime}/>
        </div>
    );
};

export {CollectionPage};