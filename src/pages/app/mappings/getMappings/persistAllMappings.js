import React, { useState } from "react";
import { persistData } from "wiremock/axios";
import Button from "wiremock/components/native/button";

const PersistAllMappings = (props) => {
  const handleButtonClick = async () => {
    try {
      const data = await persistData();
      props.setResponseData(data);
    } catch (error) {
      props.setResponseData("Error: " + error.message);
    }
  };

  return (
    <Button
      label={"Persist"}
      type="primary"
      onClick={handleButtonClick}
    />
  );
};

export default PersistAllMappings;
