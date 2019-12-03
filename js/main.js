$(document).ready(function(){
  
  // TABS
  $('.tabs__controls-link').on('click', function(e){
    e.preventDefault();
  
    var item = $(this).closest('.tabs__controls-item')
    var contentItem = $('.tabs__item')
    // variant-1
    // var itemPosition = item.index();
 
    // contentItem.eq(itemPosition)
    //   .add(item)
    //   .addClass('active')
    //   .siblings()
    //   .removeClass('active');

    // variant-2
    var itemPosition = item.data('class');
 
    contentItem.filter('.tabs__item_' + itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');

  });
});