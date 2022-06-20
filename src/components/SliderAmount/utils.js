export const numberToMoney = (number) => {
	return new Intl.NumberFormat("es-AR", {
		currency: "ARS",
		style: "currency",
		minimumFractionDigits: 0,
	}).format(number);
};
