import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 40px;
	.rc-slider {
		width: 90%;
		margin: auto;
	}
	.slider-input {
		width: 145px;
		text-align: center;
		padding: 0;
		font-size: 25px;
		font-weight: 700;
		background: none;
		color: white;
		border: 1px solid white;
		padding: 3px 0;
	}
	.slider-input:focus {
		outline: none;
	}
`;

const TotalMount = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

const Input = styled.input`
	width: 145px;
	text-align: center;
	padding: 0;
	font-size: 25px;
	font-weight: 700;
	background: none;
	color: white;
	border: 1px solid white;
	padding: 3px 0;
`;

const Text = styled.p``;

const Info = styled.div`
	margin: auto;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	${(props) => (props.isMonths ? "width: 90%;" : "width: 100%;")};
`;

export { Wrapper, TotalMount, Input, Text, Info };
