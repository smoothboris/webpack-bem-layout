import './PricePanel.scss'

export default function(  ) {
  const panel = $('.price-panel')
  const brWidth = 1200

  if ( $(window).innerWidth() <= brWidth ) {
    panel.appendTo('.product-card__attributes').addClass('price-panel--emmbed')
  }

  $( window ).on( 'resize', () => {
    if ( $(window).innerWidth() <= brWidth ) {
      panel.appendTo('.product-card__attributes').addClass('price-panel--emmbed')
    } else {
      panel.appendTo('.product-card__sidebar').removeClass('price-panel--emmbed')
    }
  })
}