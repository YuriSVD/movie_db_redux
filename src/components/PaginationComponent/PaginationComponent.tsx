import {Pagination, Stack} from "@mui/material";
import React from 'react';

import {useAppSelector, usePageQuery} from "../../hooks";

const PaginationComponent = () => {
    const {totalPage} = useAppSelector(state => state.movieReducer);
    const {isDarkTheme} = useAppSelector(state => state.switchReducer);
    const {page, changePage} = usePageQuery();

    return (
        <Stack>
            <Pagination
                count={totalPage}
                page={+page}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    button: {color: isDarkTheme ? "white" : "#1976d2"},
                    div: {color: isDarkTheme ? "white" : "#1976d2"},
                    marginBottom: "10px"
                }}
                size={"large"}
                shape={"rounded"}
                color={"primary"}
                showFirstButton
                showLastButton
                onChange={changePage}
            />
        </Stack>
    );
};

export {PaginationComponent};