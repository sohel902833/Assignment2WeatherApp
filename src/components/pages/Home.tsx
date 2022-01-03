import React from "react";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
interface Props {}

function Home(props: Props) {
  const {} = props;

  const [countryName, setCountryName] = React.useState<string>("");
  const history = useHistory();

  const navigateToDetailsPage = () => {
    history.push(`/details/${countryName}`);
  };

  return (
    <div data-testid="home" style={{ width: "500px", margin: "0 auto" }}>
      <br />
      <br />
      <TextField
        label="Enter Country Name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
      <br />
      <br />
      <Button
        onClick={() => navigateToDetailsPage()}
        disabled={countryName.length > 0 ? false : true}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
}

export default Home;
