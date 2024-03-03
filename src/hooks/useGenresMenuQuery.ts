import React, {useState} from "react";

const useGenresMenuQuery = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);

    return {
        anchorEl,
        viewMenu: (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        closeMenu: () => {
            setAnchorEl(null);
        }
    }
}

export {useGenresMenuQuery}