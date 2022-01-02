import React from "react";

import {
  CustomSelectContainer,
  CustomSelectInput,
} from "./custom-select.styles";

const CustomSelect = React.forwardRef(
  ({ onChange, name, label, values }, ref) => (
    <CustomSelectContainer>
      <label>{label}</label>
      <CustomSelectInput name={name} ref={ref} onChange={onChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </CustomSelectInput>
    </CustomSelectContainer>
  )
);

export default CustomSelect;
