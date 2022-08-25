import * as React from "react";
import {Button} from "antd";

const DisplayButton = (props) => {
  return (
    <Button
    //   variant={props.type}
      color={props.color}
      type= {props.type}
      style={{
        ...props.style
      }}
      disabled={props.disabled}
      startIcon={props.startIcon}
      onClick={() => {
        // alert("clicked");
        props.onPress();
      }}
    >
      <p
        style={{
          ...props.textStyle
        }}
      >
        {props.text}
      </p>
    </Button>
  );
};

export { DisplayButton };
