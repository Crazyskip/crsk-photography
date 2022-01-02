import React from "react";
import { CustomInputContainer, Input } from "./custom-input.styles";

const CustomInput = React.forwardRef(
  ({ onChange, name, label, type, ...otherProps }, ref) => (
    <CustomInputContainer>
      <label>{label}</label>
      <Input
        type={type}
        name={name}
        ref={ref}
        onChange={onChange}
        {...otherProps}
      />
    </CustomInputContainer>
  )
);

export default CustomInput;
