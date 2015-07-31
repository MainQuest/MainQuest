(function($) {
  $.fn.modal = function(opt) {

    var settings, createModal, closeModal, body;

    settings = $.extend({
      'modal': 'jquery-modal',
      'close': 'jquery-close',
      'closeText': '',
      'shade': 'jquery-modal-shade',
      'loadModal': 'body',
    },opt);

    body = $('body')

    closeModal = function(modal, shade){
      modal.remove();
      shade.remove();
    };

    createModal = function (imgLarge, imgAlt){
      var shade, close, modal, pic, title;

      shade = $('<div />', {
        class: settings.shade
      }).on('click', function() {
        closeModal(modal,shade);
      });

      close = $('<a />', {
        text: settings.closeText,
        class: settings.close,
        href: '#'
      }).on('click', function(e) {
        closeModal(modal,shade);
        e.preventDefault();
      });

      pic = $('<img />', {
        src: imgLarge,
        alt: imgAlt
      });

      title = $('<h5 />', {
        text: imgAlt
      });

      modal = $('<div />', {
        class: settings.modal
      }).append(pic, title, close);

      body.prepend(shade);
      settings.loadModal.prepend(modal);
    };

    this.on('click', function() {
      var self = $(this),
        imgLarge = self.data('large'),
        imgAlt = self.find('img').attr('alt');

      $.ajaxSetup({ cache:false });

      self.load(createModal(imgLarge, imgAlt));

    });
  };
})(jQuery);
