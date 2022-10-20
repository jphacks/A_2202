import React from "react";

/**
 * a-entity
 */
const AEntity = ({ children, ...props }: any): JSX.Element => {
  return React.createElement("a-entity", props, children);
};

export default AEntity;
