var passengers = [];
var balance = 0;

function addPassenger(name) {
  var maxSeat = 7;
  if (name === '') {
    return 'Invalid input!';
  } else if (passengers.length >= maxSeat && !passengers.includes(undefined)) {
    return 'Angkot is full!';
  } else if (passengers.length === 0) {
    passengers.push(name);
    return 'Successfully added!';
  } else {
    for (var i = 0; i < passengers.length; i++) {
      if (passengers[i] === undefined) {
        passengers[i] = name;
        return 'Successfully added!';
      } else if (passengers[i] === name) {
        return name + ' is already in the angkot!';
      } else if (i === (passengers.length - 1)) {
        passengers.push(name);
        return 'Successfully added!';
      }
    }
  }
}

function removePassenger(name, price) {
  if (isNaN(price)) {
    return 'Invalid input!';
  } else if (passengers.length === 0) {
    return 'Angkot is empty!';
  } else {
    for (var i = 0; i < passengers.length; i++) {
      if (passengers[i] === name) {
        balance += price;
        passengers[i] = undefined;
        return 'Successfully removed! (+' + price + ')';
      } else if (i === (passengers.length - 1)) {
        return name + ' is not in the angkot!';
      }
    }
  }
}

function showPassengers() {
  var string = '';
  for (var i = 0; i < passengers.length; i++) {
    string += 'Seat-' + (i + 1) + ': ' + (passengers[i] === undefined ? 'Empty' : passengers[i]) + '\n';
  }
  return string;
}

var repeat = true;

while (repeat) {
  var mainInput = parseInt(prompt(
    '"Juragan Angkot"\n\n' +
    '[1] Add a passenger\n' +
    '[2] Remove a passenger\n' +
    '[3] Show passengers\n' +
    '[4] Show balance\n' +
    '[0] Quit\n\n' +
    'Choose the number here!'
  ));

  if (isNaN(mainInput) || mainInput < 0 || mainInput > 4) {
    alert('Invalid input!');
  } else {
    switch (mainInput) {
      case 1:
        var passengerName = prompt('Type the passenger\'s name!');
        alert(addPassenger(passengerName));
        break;
      case 2:
        var passengerName = prompt(
          showPassengers() + '\n' +
          'Type the passengers\'s name!'
        );
        var price = parseInt(prompt('Input the price!'));
        alert(removePassenger(passengerName, price));
        break;
      case 3:
        alert(showPassengers());
        break;
      case 4:
        alert('Your balance: ' + balance);
        break;
      case 0:
        repeat = false;
        break;
    }
  }
}