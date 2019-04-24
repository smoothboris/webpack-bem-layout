import './SliderProductAssets.scss'

import 'owl.carousel'
import 'owl.carousel2.thumbs'
import 'lightgallery'
import 'lg-thumbnail'
import 'ez-plus'

export default function(  ) {
  let slider = $('.slider-product-assets__container').owlCarousel({
    onInitialized: function () {
      $('.owl-item').each(function () {
        $(this)
          .attr('data-src', $(this)
            .find('img')
            .attr('data-gallery-image'))
      })
      $('.owl-stage').lightGallery({
        download: false,
        loop: false,
        thumbnail: true
      })
    },
    onChange: function( e ) {
      if ($(window).innerWidth > 768) {
        let zoom = $(e.target)
          .find('.owl-item')
          .eq(e.item.index)
          .find('img')
          .data('ezPlus')

        if (zoom) {
          zoom.showHideZoomContainer('hide')
          zoom.showHideWindow('hide')
          zoom.showHideTint('hide')
          zoom.showHideLens('hide')
          zoom.destroy()
        }
      }
    },
    onChanged: function ( e ) {
      $('[data-slide]').each(function () {
        $(this).removeClass('slider-product-assets__thumb--is-active')
      });
      $('[data-slide]').each(function () {
        if ( $(this).attr('data-slide') == e.item.index ) {
          $(this).addClass('slider-product-assets__thumb--is-active')
        }
      });
      if ($(window).innerWidth > 768) {
        $(e.target).find('.owl-item').eq(e.item.index).find('img').ezPlus()
      }
    },
    mouseDrag: false,
    center: true,
    animateOut: 'fadeOut',
    dots: false,
    nav: false,
    items: 1,
    thumbs: true,
    thumbsPrerendered: true
  })

  $('[data-slide]').on('mouseenter', function () {
    slider.trigger('to.owl.carousel', $(this).attr('data-slide'))
  })
}