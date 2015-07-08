var thermostat = new Thermostat();

tempSetter();


function amountOfTemp () {
  if ( $('#amount').val() === '' ){
    return 0;
  }
  else {
    return parseInt($( '#amount' ).val());
  }
}

function tempSetter () {
      $('#temp').html(thermostat.temp + '°c');
      $('#temp').css('color', thermostat.colour);
}

$('#up').click(function() {
  thermostat.up(amountOfTemp());
  tempSetter();
});

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






