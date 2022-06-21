import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import CurrencyInput from "react-currency-input-field";
import { Wrapper, TotalMount, Text, Info } from "./styles";
import { numberToMoney } from "../../utils";
import "rc-slider/assets/index.css";

const SliderAmount = ({
	title,
	currencySymbol,
	minValue,
	maxValue,
	defaultValue,
	onChangeValue,
	months = false,
}) => {
	const [actualValue, setActualValue] = useState(minValue);

	useEffect(() => {
		let newVal = actualValue || 0;
		if (newVal > maxValue) newVal = maxValue;
		else if (newVal < minValue) newVal = minValue;
		onChangeValue(newVal);
	}, [actualValue]);

	const handleChange = (newVal) => {
		setActualValue(newVal);
	};

	const sliderProps = {
		defaultValue,
		min: minValue,
		max: maxValue,
		onChange: handleChange,
	};

	const inputProps = {
		defaultValue: actualValue,
		decimalsLimit: 0,
		value: actualValue,
		currencySymbol,
		intlConfig: !months && { locale: "es-AR", currency: "ARS" },
		maxLength: maxValue.toString().length,
		onValueChange: handleChange,
		step: 1,
		className: "slider-input",
	};

	return (
		<Wrapper>
			<TotalMount>
				<Text>{title}</Text>
				<CurrencyInput {...inputProps}></CurrencyInput>
			</TotalMount>
			<Slider {...sliderProps} value={actualValue} />
			<Info isMonths={months}>
				<p>
					{!months
						? numberToMoney(minValue, "es-AR", "ARS")
						: minValue}
				</p>
				<p>
					{!months
						? numberToMoney(maxValue, "es-AR", "ARS")
						: maxValue}
				</p>
			</Info>
		</Wrapper>
	);
};

export default SliderAmount;
