import React from "react";
import classes from "./Formpage.module.css";

function Formpage (){
    return ( 
    <div className={classes.formpage}>
     
        <div className={classes.formtext}>
            <h2 className={classes.title}>Dream Home Decor</h2>
            <h3 className={classes.subtitle}>Welcome to Dream Home Decor</h3>
        </div>

        <div className={classes.signinform}>
            <form>
              <div className={classes.formgroup}>
                <label className={classes.formlabel}>Email address</label>
                <input className={classes.forminput} type="text" id="emailInput" placeholder="Email address" autocomplete="off" required />
              </div>

              <div className={classes.formgroup}>
                <label className={classes.formlabel}>Password</label>
                <input className={classes.forminput} type="text" id="passwordInput" placeholder="******" autocomplete="off" required />
              </div>


              <input className={classes.submit} type="submit" value="LOGIN" />
            </form>
        </div>

        <div className={classes.forgotpassword}> Forgot Password? </div>

        <div className={classes.partition}>
        <span> or </span>
        </div>


        <div className={classes.signinextras}>
            <div className={classes.signingoogle}>
            <a href="#" >
                    <img src="https://img.icons8.com/color/48/null/google-logo.png"  className={classes.googleicon} />
                    <span className={classes.sign}> Sign in with Google </span>
            </a>
            </div>
        
            <div className={classes.createaccount}></div>
            <a href="#">
                    New Client?
                    <span className={classes.accountlink}> Sign Up </span>
            </a>
            </div>
        </div>   
    )
}

export default Formpage;