import React from "react";
import classes from "./InviteBanner.module.css";

const InviteBanner = () => {
  return (
    <div className={classes.inviteBanner}>
      <p>
        Invite friends to Fashion Festival & get up to $150 Bonus for every
        Referral
      </p>
      <a href="/" className={classes.inviteBtn}>
        Invite Now
      </a>
    </div>
  );
};

export default InviteBanner;
