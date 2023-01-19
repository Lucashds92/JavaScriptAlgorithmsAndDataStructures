const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Altere apenas o código abaixo desta linha
  let onlineUsers = 0;
  for (let user in usersObj) {
    if (usersObj[user]["online"] === true) {
    onlineUsers++;
    }
  }
  return onlineUsers;
  // Altere apenas o código acima desta linha
}

console.log(countOnline(users));