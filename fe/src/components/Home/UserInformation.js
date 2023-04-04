import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getUser } from "../../services/userService";
import SpiderChart from "./SpiderChart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme = createTheme();

export default function UserInformation() {
  const [expanded, setExpanded] = React.useState(false);

  const user = getUser();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const hi = () => {
    return (
      <div>
        <h1>Hi, {user.name.split(" ")[0]}</h1>
        <p>Here is your information as a Factored employee</p>
        <br></br>
        <h2>Personal information</h2>
      </div>
    );
  };

  const imageGenerator = () => {
    if (user.img !== null) {
      return (
        <CardMedia
          component="img"
          height="550"
          image={user.img}
          alt={user.name + " profile picture"}
        />
      );
    }
  };

  const getInitials = function (name) {
    var parts = name.split(" ");
    var initials = "";
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0];
      }
    }
    return initials;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ marginBottom: "100px" }}>
        {hi()}
        <Card sx={{ minWidth: "xs", maxWidth: "70%" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">{getInitials(user.name)}</Avatar>
            }
            title={user.name}
            subheader={user.position}
          />
          {imageGenerator()}
          <CardContent>
            <Typography paragraph color="text.secondary">
              {user.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Link to="working">
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Link>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <b>Position:</b> {" " + user.position}
              </Typography>
              <Typography paragraph>
                <b>Email:</b>
                {" " + user.email}
              </Typography>
              <Typography paragraph>
                <b>Password: </b>***********
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <br></br>
        <h2>Skills</h2>
        <SpiderChart></SpiderChart>
      </Container>
    </ThemeProvider>
  );
}
