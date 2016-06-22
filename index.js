/**
 * Created by zacharyjuang on 2016-06-22.
 */
"use strict";
module.exports = {
  filters: {
    style: function (text, style) {
      return `<span style="${style}">${text}</span>`;
    }
  }
};
