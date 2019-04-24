module.exports = function(css) {
  const transformed = css.replace('.owl-carousel', '.product-card__slider');
  // console.log(css.replace())
  return transformed
};