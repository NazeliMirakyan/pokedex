import DotLoader from "react-spinners/DotLoader";

import { override, color } from "~/constants/constants";

const Loader = () => {
  return (
    <DotLoader
      color={color}
      cssOverride={override}
      size={250}
      aria-label="Loading Spinner"
    />
  );
};
export default Loader;
