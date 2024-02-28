import {Pagination, Stack} from "@mui/material";
import React, {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {useAppContext} from "../../hooks";

interface IProps {
    query: URLSearchParams;
    setQuery: SetURLSearchParams;
}

const PaginationComponent:FC<IProps> = ({query, setQuery}) => {
    const {state:{totalPage, isDarkTheme}} = useAppContext();
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number)  => {
        if (page > 500) {
            page = 500;
        }
        setQuery({page: page.toString()});
    };

    return (
        <Stack>
            <Pagination
                count={totalPage}
                page={+query.get("page")}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    button: {color: isDarkTheme ? "white" : "#1976d2"},
                    div: {color: isDarkTheme ? "white" : "#1976d2"}
                }}
                size={"large"}
                shape={"rounded"}
                color={"primary"}
                showFirstButton
                showLastButton
                onChange={handlePageChange}
            />
        </Stack>
    );
};

export {PaginationComponent};