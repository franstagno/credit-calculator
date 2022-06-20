import React, { useState } from "react";
import Slider from "rc-slider";
import { Wrapper, TotalMount, Input, Text } from "./styles";
import { numberToMoney } from "./utils";
import "rc-slider/assets/index.css";

const SliderAmount = ({ min, max, defaultValue }) => {
	const [value, setValue] = useState(defaultValue);
	const handleChange = (value) => {
		setValue(value);
	};
	return (
		<Wrapper>
			<TotalMount>
				<Text>monto total</Text>
				<Input value={numberToMoney(value)}></Input>
			</TotalMount>
			<Slider
				min={min}
				max={max}
				defaultValue={defaultValue}
				onChange={handleChange}
				value={value}
			/>
		</Wrapper>
	);
};

export default SliderAmount;
