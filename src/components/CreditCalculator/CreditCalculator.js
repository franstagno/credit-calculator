import React from "react";
import SliderAmount from "../SliderAmount/SliderAmount";
import { Wrapper, Title } from "./styles";

const CreditCalculator = () => {
	return (
		<Wrapper>
			<Title>Simulá tu crédito</Title>
			<SliderAmount
				min={5000}
				max={50000}
				defaultValue={5000}
			></SliderAmount>
		</Wrapper>
	);
};

export default CreditCalculator;
