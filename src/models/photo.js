/*
 * Joe Ivans, student, Code Fellows Seattle
 */

'use strict';

module.exports =
  class Photo {
    constructor(obj) {
      this.img_url = obj.urls.regular;
      this.original_image = obj.links.self;
      this.photographer = obj.user.name;
    }
  };
