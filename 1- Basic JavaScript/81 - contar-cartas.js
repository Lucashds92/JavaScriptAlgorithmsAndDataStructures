let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
    count+=1;
    if (count > 0){
      return count + " Bet";
    } else {
      return count + " Hold";
    }  
  } else if (card == 7 || card == 8 || card == 9){
    count = count;
    if (count > 0){
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  } else {
    count-=1;
    if (count > 0){
      return count + " Bet";
    } else {
      return count + " Hold";
  }
  }
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');