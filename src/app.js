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

$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cf56b5a4d6ffa0492ddf9aef9f01e701", function( data ) {
  console.log(data);
  console.log(data.main.temp);
  $('#local_temp').html(data.main.temp);
})