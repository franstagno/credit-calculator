import styled from "styled-components";
import ButtonComponent from "../Button/Button";

const Wrapper = styled.div`
	width: 550px;
	background-color: #003b67;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;
	@media (max-width: 560px) {
		width: auto;
	}
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 50px;
	text-transform: initial;
	@media (max-width: 560px) {
		font-size: 25px;
	}
`;

const Buttons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const ButtonSuccess = styled(ButtonComponent)`
	width: 66%;
	background-color: #17aa8d;
	font-size: 22px;
	@media (max-width: 560px) {
		font-size: 15px;
	}
`;

const ButtonFee = styled(ButtonComponent)`
	width: 32%;
	background-color: #0b538b;
	font-size: 14px;
	@media (max-width: 560px) {
		font-size: 10px;
	}
`;

export { Wrapper, Title, Buttons, ButtonSuccess, ButtonFee };
