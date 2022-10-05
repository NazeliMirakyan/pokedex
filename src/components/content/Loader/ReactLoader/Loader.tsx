import DotLoader from "react-spinners/DotLoader";
import { CSSProperties } from "react";
import { color } from "~/constants/colorConstants";

export const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "65px",
  marginBottom: "65px",
};

const Loader = () => {
  return (
    <DotLoader
      color={color.lightBlue}
      cssOverride={override}
      size={250}
      aria-label="Loading Spinner"
    />
  );
};

export default Loader;
