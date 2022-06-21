import React from "react";
import { Wrapper } from "./styles";
import { numberToMoney } from "../../utils";

const CreditFee = ({ fee }) => {
	return (
		<Wrapper>
			<p>Cuota fija por mes</p>
			<p>{numberToMoney(fee, "en-US", "USD", 2)}</p>
		</Wrapper>
	);
};

export default CreditFee;
