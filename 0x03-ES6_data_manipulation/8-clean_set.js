export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  const array = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return array.join('-');
}
