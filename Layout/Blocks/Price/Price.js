import './Price.scss'

export default function(  ) {
  $('.price__plus').click(function ( e ) {
    e.preventDefault()
    let input = $(this).siblings('.price__count')
    input.val(parseInt(input.val()) + 1)
  });

  $('.price__minus').click(function ( e ) {
    e.preventDefault()
    let input = $(this).siblings('.price__count')
    if ( parseInt(input.val()) === 1 ) {
      return false
    }
    input.val(parseInt(input.val()) - 1)
  });

  $('.price__count').change(function ( e ) {
    if ( parseInt($(this).val()) <= 0 || isNaN(parseInt($(this).val())) ) {
      $(this).val(1)
    }
  })
}