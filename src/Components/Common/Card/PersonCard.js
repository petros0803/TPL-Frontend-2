import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PERSON_PLACEHOLDER from "../../../Assets/Icons/person-placeholder.png";
import "./personCard.scss";

const PersonCard = ({ firstName, lastName, title, cv }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="personCard--container">
      <CardMedia
        component="img"
        height="140"
        image={PERSON_PLACEHOLDER}
        alt="green iguana"
        style={{ width: "300px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lastName + " " + firstName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ height: "20px" }}
        >
          {title && title}
        </Typography>
      </CardContent>
      {cv && (
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="small"
            href={cv}
            target="_blank"
            style={{ color: "#5603ad", fontSize: "18px" }}
          >
            CV
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default PersonCard;
