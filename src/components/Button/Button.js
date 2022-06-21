import React from "react";
import { Wrapper, Text } from "./styles";

const Button = ({ text, ...rest }) => {
	return <Wrapper {...rest}>{text && <Text>{text}</Text>}</Wrapper>;
};

export default Button;
