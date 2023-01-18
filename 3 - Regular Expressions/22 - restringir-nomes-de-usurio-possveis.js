let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Altere esta linha
let result = userCheck.test(username);

//    /[a-z][a-z][a-z]*[\d$]*/i;
//    /[^0-9\W][^0-9\W][^0-9\W]*[0-9$]*/i;
//      a-za-z|[a-z][a-z][a-z]*[\d$]*