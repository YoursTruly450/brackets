module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let n = arr.length;
  while (n > 0) {
    let newArr = arr.join('');
    for (let i = 0; i < bracketsConfig.length; i++) {
      let buffArr = newArr;
      let strSplit = bracketsConfig[i][0] + bracketsConfig[i][1];
      newArr = buffArr.split(strSplit).join('');
    }
    if (newArr.length === arr.length) {
      break;
    } else {
      arr = newArr.split('');
      n = arr.length;
    }
  }
  return n === 0 ? true : false;
}
