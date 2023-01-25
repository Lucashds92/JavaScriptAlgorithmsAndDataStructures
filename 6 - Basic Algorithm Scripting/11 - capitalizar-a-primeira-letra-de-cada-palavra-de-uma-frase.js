function titleCase(str) {
  str = str.toLowerCase();
  let words2 = " ";
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    words2 += words[i] + " ";
  }
  console.log(words2);
  return words2.trim();
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt")
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")

/*Selecionar cada palavra
usar o indice que marca a primeira letra
marcar essa letra to upper case
adicionar cada palavra de volta em uma string */