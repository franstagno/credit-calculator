export const numberToMoney = (number, locale, currency, decimals = 0) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: decimals,
	}).format(number);
};
