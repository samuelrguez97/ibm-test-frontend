import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    textAlign: "center",
    fontSize: 44,
    margin: "60px 0",
  },
  titleSupplier: {
    fontWeight: "bold",
  },
  imageContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
  },
  infoContainer: {
    padding: 25,
  },
  infoText: {
    fontSize: 30,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 15,
  },
}));

export default useStyles;
