import React from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import classes from "./ConfirmDeleteModal.module.css";

function ConfirmDeleteModal({ onConfirm }) {
  return (
    <Card className={classes.container}>
      <p className={classes.heading}>Delete comment</p>
      <p className={classes.text}>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div className={classes.buttonContainer}>
        <Button
          className={`${classes.button} ${classes.buttonNo}`}
          onClick={onConfirm.bind(this, false)}
          disabled={false}
        >
          NO, CANCEL
        </Button>
        <Button
          className={`${classes.button} ${classes.buttonYes}`}
          onClick={onConfirm.bind(this, true)}
          disabled={false}
        >
          YES, DELETE
        </Button>
      </div>
    </Card>
  );
}

export default ConfirmDeleteModal;
