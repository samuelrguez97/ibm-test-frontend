import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  mediaContainer: {
    padding: 20,
  },
  media: {
    width: 250,
    height: 250,
    backgroundSize: "contain",
  },
  rate: {
    marginTop: 10,
  },
});

export default useStyles;
