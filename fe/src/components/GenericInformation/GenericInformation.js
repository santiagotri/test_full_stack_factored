import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function GenericInformation(props) {
  return (
    <Box sx={{ flexGrow: 1, margin: "5%" }}>
      <Grid md container spacing={2} minHeight={160}>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Container>
            <img
              src={props.img}
              alt={props.title + " image"}
              style={{ maxHeight: 200 }}
            ></img>
          </Container>
        </Grid>
        <Grid display="flex" alignItems="center">
          <Container>
            <Typography paragraph>
              <h1>{props.title}</h1>
            </Typography>
            <Typography display="flex" paragraph>
              <p>{props.content}</p>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
