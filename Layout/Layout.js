//Файл генерируется LayoutModuleCreate.js
//Содержит модули (условно) относящиеся к верстке (Layout)
import './EnvironmentStyles.scss'
import './OtherStyles.scss'

import Breadcrumb from './Blocks/Breadcrumb/Breadcrumb'
Breadcrumb()

if ( module.hot ) {
  module.hot.accept('./Blocks/Breadcrumb/Breadcrumb.js', function () {
    console.log('Accepting the updated Breadcrumb module!')
    Breadcrumb()
  })
}

import Button from './Blocks/Button/Button'
Button()

if ( module.hot ) {
  module.hot.accept('./Blocks/Button/Button.js', function () {
    console.log('Accepting the updated Button module!')
    Button()
  })
}

import CatalogProductCard from './Blocks/CatalogProductCard/CatalogProductCard'
CatalogProductCard()

if ( module.hot ) {
  module.hot.accept('./Blocks/CatalogProductCard/CatalogProductCard.js', function () {
    console.log('Accepting the updated CatalogProductCard module!')
    CatalogProductCard()
  })
}

import Price from './Blocks/Price/Price'
Price()

if ( module.hot ) {
  module.hot.accept('./Blocks/Price/Price.js', function () {
    console.log('Accepting the updated Price module!')
    Price()
  })
}

import PricePanel from './Blocks/PricePanel/PricePanel'
PricePanel()

if ( module.hot ) {
  module.hot.accept('./Blocks/PricePanel/PricePanel.js', function () {
    console.log('Accepting the updated PricePanel module!')
    PricePanel()
  })
}

import ProductCard from './Blocks/ProductCard/ProductCard'
ProductCard()

if ( module.hot ) {
  module.hot.accept('./Blocks/ProductCard/ProductCard.js', function () {
    console.log('Accepting the updated ProductCard module!')
    ProductCard()
  })
}

import SliderProductAssets from './Blocks/SliderProductAssets/SliderProductAssets'
SliderProductAssets()

if ( module.hot ) {
  module.hot.accept('./Blocks/SliderProductAssets/SliderProductAssets.js', function () {
    console.log('Accepting the updated SliderProductAssets module!')
    SliderProductAssets()
  })
}