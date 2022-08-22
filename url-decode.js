const urlDecode = function(text) {
  let decodedObject = {};
  for (let i =0; i < text.length; i++) {
    if (text[i] === '=') {
      newKey = [text.slice(0, i)];
      decodedObject[newKey] = '';
      for (let j = i + 1; j < text.length; j++) {
        if (j === '&') {
          
        }
      }
    }
  } return decodedObject;
}

console.log(urlDecode("duck=rubber"));