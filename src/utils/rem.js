/*rem布局 */

const setHtmlFontSize = () => {
  let deviceWidth =
    document.documentElement.clientWidth || document.body.clientWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`
}
window.onresize = setHtmlFontSize
setHtmlFontSize()