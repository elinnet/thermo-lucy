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
})

$('#down').click(function() {
  thermostat.down(amountOfTemp());
  tempSetter();
})

$('#power').change(function() {
  if ($(this).is(':checked')) {
    thermostat.powerSaveOn();
    tempSetter();
  } else {
    thermostat.powerSaveOff();
  };
})

$('#reset').click(function() {
  thermostat.reset();
  tempSetter();
})






