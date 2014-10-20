$(document).ready(function() {
  $('.addButton').click(addToList);

  $('body').on('click', '.removeButton', function() {
    $(this).closest('li').remove();
  });

  $('body').on('click', '.checkbox', function() {
    var label = $(this).closest('li').find('label');
    label.toggleClass('checked');
  });

  $('.entryField').bind('keypress', function(e) {
    if (e.keyCode==13) {
      addToList();
    }
  });

  function addToList() {
    var input = $('.entryField');
    var item = input.val();
    if (item=='') return;

    $('.items').append(
      '<li class="newItem">'+
        '<input type="checkbox" class="checkbox" name="cb"/>'+
        '<label for="cb">'+item+'</label>'+
        '<span id="remove"><button class="removeButton" type="button"></button><span>'+
      '<li>');
    input.val('');
    input.focus();
  }

});


