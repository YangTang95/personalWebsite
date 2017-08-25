/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function() {

  (function changeBg() {
      var imgCount = 0;
    var img_array = [
        "http://wx1.sinaimg.cn/mw1024/7509939bly1fitiyptybrj218w0u0h8f.jpg",
        "https://farm2.staticflickr.com/1558/25374722454_43a2639f31_o.jpg",
        "http://wx4.sinaimg.cn/mw1024/7509939bly1fitiyux8i2j218w0u04n8.jpg",
        "http://wx2.sinaimg.cn/mw1024/7509939bly1fitiz2y9zij218w0u0e81.jpg",
        "http://wx3.sinaimg.cn/mw1024/7509939bly1fitiz95j95j218w0u04qp.jpg",
        "http://wx4.sinaimg.cn/mw1024/7509939bly1fitizbz9wjj20rs0fmgtp.jpg",
        "http://wx3.sinaimg.cn/mw1024/7509939bly1fitizholowj218w0u04qp.jpg"
        

      ],
      _nxtIndex = 0,
      _curIndex = 0,
      interval = 15;

    function nextIndex() {
      _nxtIndex = (_nxtIndex + 1) % img_array.length;
      return _nxtIndex;
    };

    function shiftIndexes() {
      _curIndex = _nxtIndex;
      nextIndex();
    }

    function createImgTags(){
        imgCount = img_array.length;
        var html = '';
        var slider = document.getElementById('slider');
        console.log(slider);
        for(var i=0; i<imgCount;i++){
            html +='<div id="background-slide'+i+'" class="background-slider"></div>';
        }
        console.log(html);
        $(slider).html(html);
    }
    function assignBackgrounds() {
      imgCount = img_array.length;  
      for (var i = 0; i < imgCount; i++) {

        jQuery('#background-slide' + i).css('backgroundImage', function() {
          return 'url(' + img_array[nextIndex()] + ')';
        });
        if (i == 0) {
          jQuery('#background-slide' + i).css('opacity', 1);
        } else {
          jQuery('#background-slide' + i).css('opacity', 0);
        }
      }
    }

    function startBackgroundOpacityToggle() {
      //console.log("in startBackgroundOpacityToggle. _curIndex = "+_curIndex);
      elem = jQuery('#background-slide' + _curIndex);
      elem.animate({
        opacity: (elem.css('opacity') == 0) ? 1 : 0
      }, {
        duration: 5000,
        start: finishBackgroundOpacityToggle
      });
    };

    function finishBackgroundOpacityToggle() {
      //console.log("in finishBackgroundOpacity. _nxtIndex = "+_nxtIndex);
      elem = jQuery('#background-slide' + _nxtIndex);
      elem.animate({
        opacity: (elem.css('opacity') == 0) ? 1 : 0
      }, {
        duration: 5000,
        complete: runSlider
      });

    };

    function runSlider() {
      shiftIndexes();
      setTimeout(startBackgroundOpacityToggle, interval);
    }

    createImgTags();
    assignBackgrounds();
    runSlider();
  })();
});