export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((items) => items.id);
  }
  return [];
}
