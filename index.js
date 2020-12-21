// eslint-disable-next-line strict
$(function(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    console.log(item);
    $('.shopping-list').append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  });

  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).parent().parent().remove();
  });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    $(this).parent().prev().toggleClass('shopping-item__checked');
  });
});