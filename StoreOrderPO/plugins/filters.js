

function pcNumAbs (value) {
  return Math.abs(value);
}
function pcNumFormat(value) {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
}
function pcNumToFixed3(value) {
  if (typeof value === "number") {
    return value.toFixed(3);
  }
}
export default {
  pcNumFormat,
  pcNumAbs,
  pcNumToFixed3
}