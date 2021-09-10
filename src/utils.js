export function styled(...htmlElements) {
  return function (cssString) {
    cssString[0]
      .trim()
      .split("\n")
      .map(parseCSSProp)
      .forEach(({ prop, value }) =>
        htmlElements.forEach(element => element.style[prop] = value));
  };
}

function parseCSSProp(str) {
  let [prop, value] = str.trim().split(":");
  value = value.split(";")[0];
  return { prop, value };
}
