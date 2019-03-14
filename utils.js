function $(query) {
  return document.querySelector(query);
}

function createElement(tagName, attributes = {}, style = {}, text) {
  const el = document.createElement(tagName);

  for (item in attributes) {
    el.setAttribute(item, attributes[item]);
  }
  for (item in attributes) {
    el.style[item] = attributes[item];
  }
  if (text) {
    el.appendChild(document.createTextNode(text));
  }
  return el;
}
