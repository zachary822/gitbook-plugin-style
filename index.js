/**
 * Created by zacharyjuang on 2016-06-22.
 */
"use strict";
module.exports = {
  filters: {
    style: function (text, style, kwargs) {
      var attributes = "";
      if (kwargs) {
        if ('id' in kwargs) {
          attributes += `id="${kwargs.id}" `;
        }
        if ('class' in kwargs) {
          attributes += `class="${kwargs["class"]}"`;
        }
      }
      return '<span style="' + style +'" ' + attributes + '>' + text + '</span>';
    }
  }
};
