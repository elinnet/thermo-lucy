var thermostat = new Thermostat();

tempSetter();

var amountOfTemp = function() {
  if (document.getElementById("amount").value == "") {
    return 0
  } else {
    return parseInt(document.getElementById("amount").value);
  };
};

function tempSetter() {
  document.getElementById('temp').innerHTML = thermostat.temp + '°c';
  document.getElementById('temp').style.color = thermostat.colour;
}


document.getElementById("up").onclick=function() {
  thermostat.up(amountOfTemp());
  tempSetter();
};

document.getElementById("down").onclick=function() {
  thermostat.down(amountOfTemp());
  tempSetter();
};

document.getElementById("power").onchange=function() {
  if (this.checked) {
    thermostat.powerSaveOn();
    tempSetter();
  } else {
    thermostat.powerSaveOff();
  };
};

document.getElementById("reset").onclick=function() {
  thermostat.reset();
  tempSetter();
};





