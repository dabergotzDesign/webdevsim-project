import React from "react";

const Spinner = props => {
  return (
<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );
};
Spinner.defaultProps = {
  message: "Have patience.."
};
export default Spinner;