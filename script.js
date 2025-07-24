   document.addEventListener('DOMContentLoaded', function() {
       // Rastrea clics en el botón de WhatsApp
       const whatsappButton = document.querySelector('.btn[href*="wa.me"]');
       if (whatsappButton) {
           whatsappButton.addEventListener('click', function() {
               gtag('event', 'conversion', {
                   'send_to': 'AW-17392180465/unique_conversion_id',
                   'event_callback': function() {}
               });
           });
       }
   });