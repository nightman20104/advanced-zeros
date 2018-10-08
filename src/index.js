module.exports = function getZerosCount(number, base) {
let massiv = [];
let nfs="";
let ostatok, chastnoe;
let bufer = number;
do {
  ostatok = bufer%base;
  chastnoe = Math.floor(bufer/base);
  massiv.push (ostatok);
  bufer = chastnoe;
} while(chastnoe>=base);
  massiv.push (chastnoe);
  for(let i = massiv.length-1;i>=0;i--){
    nfs+=massiv[i];
  }
let rnfs=Number(nfs);

  let five = 5;
  let zerosCount = 0;
  while (rnfs>five) {
    zerosCount = zerosCount + Math.floor(rnfs/five);
    five = five*5;
  }
  return zerosCount;
}
