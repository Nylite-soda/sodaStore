

export function formatCurrency (priceCents){
    return (Math.round(priceCents) / 100).toFixed(2);
}

export function inNaira (amount){
    const formattedNaira= Number(formatCurrency(priceInNaira(amount))).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    return `₦${formattedNaira}`;
}

export function priceInNaira(amount){
  const naira = amount * 1650;
  return naira;
}