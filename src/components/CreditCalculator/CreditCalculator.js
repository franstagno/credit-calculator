import React, { useState, useEffect } from "react";
import SliderAmount from "../SliderAmount/SliderAmount";
import CreditFee from "../CreditFee/CreditFee";
import { Wrapper, Title, Buttons, ButtonSuccess, ButtonFee } from "./styles";

const amounts = {
	title: "Monto total",
	minValue: 5000,
	maxValue: 50000,
	currencySymbol: "$ ",
};

const months = {
	title: "Plazo",
	minValue: 3,
	maxValue: 24,
};

const CreditCalculator = () => {
	const [Amounts, setAmounts] = useState(amounts.minValue);
	const [Months, setMonths] = useState(months.minValue);
	const [Fee, setFee] = useState(Amounts / Months);

	useEffect(() => {
		setFee(Amounts / Months);
	}, [Amounts, Months]);

	return (
		<Wrapper>
			<Title>Simulá tu crédito</Title>
			<SliderAmount
				onChangeValue={(val) => setAmounts(val)}
				{...amounts}
			></SliderAmount>
			<SliderAmount
				{...months}
				onChangeValue={(val) => setMonths(val)}
				months={true}
			></SliderAmount>
			<CreditFee fee={Fee}></CreditFee>
			<Buttons>
				<ButtonSuccess text="obtené crédito"></ButtonSuccess>
				<ButtonFee text="ver detalle de cuotas"></ButtonFee>
			</Buttons>
		</Wrapper>
	);
};

export default CreditCalculator;
