function lengthCheck (offer, maxLen){
  return offer.length <= maxLen;
}

function palindrome (offer){
  const newOffer = offer.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newOffer[length-1]; i >=0; i--){
    result += newOffer[i];
  }
  return newOffer === result;
}

lengthCheck('проверяемая строка', 20);
palindrome('топот');

