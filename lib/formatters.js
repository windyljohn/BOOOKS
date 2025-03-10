export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function formatParams(sentence, replaceAnd) {
  let words;
  replaceAnd
    ? (words = sentence.replaceAll("and", "&").split("_"))
    : (words = sentence.split("_"));

  return words.join(" ");
}

export function capitalize(title) {
  let header = title.replaceAll("fiction", "Fiction").split(" ");
  for (let i = 0; i < header.length; i++) {
    header[i] = header[i][0].toUpperCase() + header[i].substr(1);
  }

  return header.join(" ");
}

export function formatToLink(text) {
  const link = text.replaceAll("&", "and").replaceAll(" ", "_");
  return link;
}
