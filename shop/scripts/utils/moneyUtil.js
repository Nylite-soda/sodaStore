
export function formatCurrency (priceCents){
    return (Math.round(priceCents) / 100).toFixed(2);
}

export function inNaira (amount){
    const naira = Number(formatCurrency(amount * 1650));
    const formattedNaira= naira.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    return `₦${formattedNaira}`;
}