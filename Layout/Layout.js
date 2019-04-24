//Файл генерируется LayoutModuleCreate.js
//Содержит модули (условно) относящиеся к верстке (Layout)
import './EnvironmentStyles.scss'
import './OtherStyles.scss'

import Breadcrumb from './Breadcrumb/Breadcrumb'
Breadcrumb()

if ( module.hot ) {
  module.hot.accept('./Breadcrumb/Breadcrumb.js', function () {
    console.log('Accepting the updated Breadcrumb module!')
    Breadcrumb()
  })
}

import Button from './Button/Button'
Button()

if ( module.hot ) {
  module.hot.accept('./Button/Button.js', function () {
    console.log('Accepting the updated Button module!')
    Button()
  })
}

import CatalogProductCard from './CatalogProductCard/CatalogProductCard'
CatalogProductCard()

if ( module.hot ) {
  module.hot.accept('./CatalogProductCard/CatalogProductCard.js', function () {
    console.log('Accepting the updated CatalogProductCard module!')
    CatalogProductCard()
  })
}

import Price from './Price/Price'
Price()

if ( module.hot ) {
  module.hot.accept('./Price/Price.js', function () {
    console.log('Accepting the updated Price module!')
    Price()
  })
}

import PricePanel from './PricePanel/PricePanel'
PricePanel()

if ( module.hot ) {
  module.hot.accept('./PricePanel/PricePanel.js', function () {
    console.log('Accepting the updated PricePanel module!')
    PricePanel()
  })
}

import ProductCard from './ProductCard/ProductCard'
ProductCard()

if ( module.hot ) {
  module.hot.accept('./ProductCard/ProductCard.js', function () {
    console.log('Accepting the updated ProductCard module!')
    ProductCard()
  })
}

import SliderProductAssets from './SliderProductAssets/SliderProductAssets'
SliderProductAssets()

if ( module.hot ) {
  module.hot.accept('./SliderProductAssets/SliderProductAssets.js', function () {
    console.log('Accepting the updated SliderProductAssets module!')
    SliderProductAssets()
  })
}

import testTest from './testTest/testTest'
testTest()

if ( module.hot ) {
  module.hot.accept('./testTest/testTest.js', function () {
    console.log('Accepting the updated testTest module!')
    testTest()
  })
}