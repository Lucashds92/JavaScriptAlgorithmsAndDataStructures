// Altere apenas o código abaixo desta linha
function urlSlug(title) {
let newArr = title.trim().split(/\s+/);
let newTitle = newArr.join("-").toLowerCase();
return newTitle;
}
// Altere apenas o código acima desta linha
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

urlSlug(" Winter Is  Coming");