import React from "react";
import classes from "./Formimage.module.css";
import images from "../../assets/images";

function Formimage(){
    return (
        <div className={classes.formdesign}>
        <img className={classes.formimg} src={images.img} alt="form-img" style={{ maxWidth: "100%", height: "100%", opacity: "0.8" }} />
        </div>
    )
}

export default Formimage;