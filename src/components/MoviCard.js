import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  backgroundColor: "#F84464",
  "&:hover": {
    backgroundColor: "#F84464",
  },
});
export default function Movicard(props) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 200 }}>
      <CardMedia
        component="img"
        alt="Movi Image"
        height="350"
        image={props.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.summary}
        </Typography>
        <Typography
          variant="body"
          color="text.secondary"
          sx={{ mt: 1, fontSize: "1.3rem" }}
        >
          Ratings:⭐{props.rating}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
        <IconButton>
          <Badge
            badgeContent={props.like}
            sx={{ color: "black" }}
            color="primary"
          >
            <FavoriteIcon onclick={props.handelLikes} sx={{ color: "red" }} />
          </Badge>
        </IconButton>
        <StyledButton variant="contained">Book</StyledButton>
      </CardActions>
    </Card>
  );
}
