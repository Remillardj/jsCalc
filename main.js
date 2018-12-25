var operands = ['+', '-', '*', '/', '%', '.'];

function checkIt() {
  var lastChar = $('#result').text().slice(-1);
  for (var i = 0; i < operands.length; i++) {
    if (operands[i] == lastChar) {
      $('#result').text('ERROR - NOT POSSIBLE');
    }
  }
}

//all clear
$('#ac').click(function() {
  $('#result').text('');
});

//left paranthesis
$('#l-para').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '(');
});

//right parathensis
$('#r-para').click(function() {
  checkIt();
  $('#result').text($('#result').text() + ')');
});

//add
$('#add').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '+');
});

//minus
$('#minus').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '-');
});

//multiply
$('#multi').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '*');
});

//division
$('#div').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '/');
});

//modulus
$('#mod').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '%');
});

//decimal
$('#dec').click(function() {
  checkIt();
  $('#result').text($('#result').text() + '.');
});

//If divide by 0, return not possible.
if ($('#result').text($('#result').text() / 0)) {
  $('#result').text('Not possible');
}

//equals
$('#eq').click(function() {
  $('#result').text(eval($('#result').text()));
});

//add function to numbers
$('#zero').click(function() {
  $('#result').text($('#result').text() + 0);
});

$('#one').click(function() {
  $('#result').text($('#result').text() + 1);
});

$('#two').click(function() {
  $('#result').text($('#result').text() + 2);
});

$('#three').click(function() {
  $('#result').text($('#result').text() + 3);
});

$('#four').click(function() {
  $('#result').text($('#result').text() + 4);
});

$('#five').click(function() {
  $('#result').text($('#result').text() + 5);
});

$('#six').click(function() {
  $('#result').text($('#result').text() + 6);
});

$('#seven').click(function() {
  $('#result').text($('#result').text() + 7);
});

$('#eight').click(function() {
  $('#result').text($('#result').text() + 8);
});

$('#nine').click(function() {
  $('#result').text($('#result').text() + 9);
});

