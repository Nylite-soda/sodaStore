

export function formatCurrency (priceCents){
    const formatted = (Math.round(priceCents) / 100).toFixed(2);
    return Number(formatted).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

export function priceInNaira(amount){
  const naira = amount * 1650;
  return naira;
}

export function formatToNaira(naira){
  return `₦${formatCurrency(priceInNaira(naira))}`;
}