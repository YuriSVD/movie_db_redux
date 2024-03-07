import React, {useState} from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Button, Dialog} from "@mui/material";
import css from "./UserForm.module.css";
import {Link} from "react-router-dom";
import vhs from "..//../dummy_photos/vhs.png";

const UserForm = () => {

    const [open, setOpen] = useState<boolean>(false);

    const [form, setForm] = useState<HTMLElement>(null);

    if (form) {
        const container = document.getElementById("cont");
        if (form.id === "singIn") {
            console.log(container);
            container.classList.remove("UserForm_rightPanelActive__A8buv")
        } else if (form.id === "singUp") {
            console.log(container);
            container.classList.add("UserForm_rightPanelActive__A8buv")
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setForm(null);
    };

    return (
        <div>
            <Button color={"inherit"} onClick={handleClickOpen}>
                <AccountCircle fontSize={"large"}/>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <div className={`${css.container}`} id={"cont"}>
                    <div
                        className={`${css.container__form} ${css.containerSignup}`}>
                        <form action="#" className={css.form} id={"form1"}>
                            <h2 className={css.form__title}>Sing Up</h2>
                            <input type={"text"} placeholder={"User"} className={css.input}/>
                            <input type={"text"} placeholder={"Email"} className={css.input}/>
                            <input type={"text"} placeholder={"Password"} className={css.input}/>
                            <button className={css.btn}>Sing Up</button>
                        </form>
                    </div>
                    <div className={`${css.container__form} ${css.containerSignin}`}>
                        <form action={"#"} className={css.form} id={"form2"}>
                            <h2 className={css.form__title}>Sing In</h2>
                            <input type={"email"} placeholder={"Email"} className={css.input}/>
                            <input type={"password"} placeholder={"Password"} className={css.input}/>
                            <Link to={"#"} className={css.link}>Forgot your password</Link>
                            <button className={css.btn}>Sing In</button>
                        </form>
                    </div>
                    <div className={css.container__overlay}>
                        <div style={{background: `url(${vhs})`}} className={css.overlay}>
                            <div className={`${css.overlay__panel} ${css.overlayLeft}`}>
                                <button className={css.btn} id={"singIn"} onClick={(event) => {
                                    setForm(event.currentTarget)
                                }}>Sing In
                                </button>
                            </div>
                            <div className={`${css.overlay__panel} ${css.overlayRight}`}>
                                <button className={css.btn} id={"singUp"} onClick={(event) => {
                                    setForm(event.currentTarget)
                                }}>Sing Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export {UserForm};