import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	background-color: #00355d;
	padding: 15px;
	font-weight: 700;
	font-size: 17px;
	align-items: center;
	@media (max-width: 560px) {
		font-size: 10px;
	}
	p:nth-of-type(2) {
		font-size: 40px;
		@media (max-width: 560px) {
			font-size: 18px;
		}
	}
`;

export { Wrapper };
