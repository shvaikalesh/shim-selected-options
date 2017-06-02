(function() {
  "use strict"

  var select = HTMLSelectElement.prototype
  if (select.hasOwnProperty("selectedOptions")) return

  Object.defineProperty(select, "selectedOptions", {
    get: function() {
      return this.querySelectorAll(":checked")
    },
    enumerable: true,
    configurable: true,
  })
})()
