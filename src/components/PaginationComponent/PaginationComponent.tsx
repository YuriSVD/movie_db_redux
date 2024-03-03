import {Pagination, Stack} from "@mui/material";
import React from 'react';

import {useAppContext, usePageQuery} from "../../hooks";

const PaginationComponent = () => {
    const {state:{totalPage, isDarkTheme}} = useAppContext();
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