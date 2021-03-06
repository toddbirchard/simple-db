function filter(){
  $('button').on('click', function(e){
    $(this).toggleClass('inactive');
  });

  $('#avi-filter').on('click', function(){ $('.dash-cell-value:contains(avi)').closest('tr').toggleClass('hidden'); });
  $('#basic-filter').on('click', function(){ $('.dash-cell-value:contains(basic)').closest('tr').toggleClass('hidden'); });
  $('#crypto-filter').on('click', function(){ $('.dash-cell-value:contains(crypto)').closest('tr').toggleClass('hidden'); });
  $('#goal-filter').on('click', function(){ $('.dash-cell-value:contains(goal)').closest('tr').toggleClass('hidden'); });
  $('#random-filter').on('click', function(){ $('.dash-cell-value:contains(random)').closest('tr').toggleClass('hidden'); });
  $('#etc-filter').on('click', function(){ $('.dash-cell-value:contains(random)').closest('tr').toggleClass('hidden'); });
}

function load_images(){
  $('.dash-cell-value:contains(http)').html('<img src="' + $(this).text() + '">');

  $( ".dash-cell-value" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
}

$( document ).ready(function() {
    filter();
    load_images();
});
