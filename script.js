//zodziu sarasai poruoti
let sarasas1 = ['balionas', 'lego', "popierius", "siūlas", "pieštukas", "aliuminė plėvelė", "stiklinė", "kempinė", "lipni juostelė", "ratas", "akmuo", "molis"];
let sarasas2 = ["wifi signalas", "dirbtinis intelektas", "baterija", "nuotolinio valdymo pultelis", "elektros lemputė", "muzika", "virtuali realybė", "veido atpažinimo technologija", "termometras", "drėgmės matuoklis", "mikroschema", "svarstyklės", "virtualus asistentas (Siri, Alexa)"];

//funkcija įvyksta paspaudus "generuoti" mygtuką
function generuotiZodzius(){
  //leisti funkcija kas 0.1 sekundes
  let c = setInterval(function(){
    //keisti fono spalva
    document.body.style.backgroundColor = generuotiSpalva();
    }, 100);

  //nustoti keisti fono spalvą po 3 sekundžių
  setTimeout(function(){
    clearInterval(c);
    sugeneruotiZodi();
  }, 3000);
}

//sugeneruoti atsitiktine spalva
function generuotiSpalva(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

//sugeneruoti atsitiktinius zodzius is saraso
function sugeneruotiZodi(){
  //pasirinkti atsitiktini zodi is saraso
  let zodis1 = sarasas1[Math.floor(Math.random() * sarasas1.length)];
  let zodis2 = sarasas2[Math.floor(Math.random()* sarasas2.length)];

  document.getElementById("box1").innerHTML = zodis1;
  document.getElementById("box2").innerHTML = zodis2;
}
