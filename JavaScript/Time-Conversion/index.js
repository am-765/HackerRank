function timeConversion(s) {

  // let regex = /^../;
  // let zeroPadding = ('00').slice(-2);
  let zeroConversiotn = s.match(/^12/) ? s.replace( /^../, ('00').slice(-2)) : s;
  let pmConversion = (Number(zeroConversiotn.slice(0, 2)) + 12).toString();
  // return zeroConversiotn
  return zeroConversiotn.indexOf('PM') !== -1 ? zeroConversiotn.replace(/^../, pmConversion).slice(0, -2) : zeroConversiotn.slice(0, -2)
}

// console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:40:22AM'))
