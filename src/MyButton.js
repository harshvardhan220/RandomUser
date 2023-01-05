import React from "react";
import { Button } from "reactstrap";

const MyButton = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="text-center mt-4">
      <Button outline color="danger" size="lg" block onClick={refreshPage}>
        Reload
      </Button>
    </div>
  );
};

export default MyButton;
