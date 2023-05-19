$(function() {
  $("#thrones").click(function() {
    $.ajax({
      'url': 'https://www.anapioficeandfire.com/api/characters',
      'type': 'get',
      'dataType': 'json',
      'data': {
        'pageSize': 50
      }
    }).done(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCharacter = data[randomIndex];
      $('#thrones2').text(randomCharacter.name);
      $('#thrones3').text(randomCharacter.gender);
      $('#thrones4').text(randomCharacter.titles);

    }).fail(function() {
      $('#thrones2').text('You have been exiled to the wall. Try again.');

    }).always(function() {
      console.log('If you want to do something whether it fails or not, do it here.');
    });
  });
});
