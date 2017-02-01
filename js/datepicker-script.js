/*

Template: Stephane ESCOBAR- Curriculum vitae HTML Theme
Author: archimedia.ws
Version: 1.0  

*/

jQuery(function($){
    $.datepicker.regional['fr'] = {
        closeText: 'Fermer',
        prevText: '&#x3c;Préc',
        nextText: 'Suiv&#x3e;',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
        'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
        monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
        'Jul','Aou','Sep','Oct','Nov','Dec'],
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        weekHeader: 'Sm',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        minDate: 0,
        maxDate: '+12M +0D',
        numberOfMonths: 1,
        showButtonPanel: true
        };
    $.datepicker.setDefaults($.datepicker.regional['fr']);
});




(function($){
  "use strict";

/*************************
      Ajoute une date indisponibilité
*************************/
         var events = [ 
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("01/24/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("01/25/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("01/26/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/13/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/14/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/15/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/09/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/10/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/11/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/12/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/13/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/14/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/15/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/16/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/17/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/18/2017") },
            // { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("02/19/2017") },
            { Title: "Désolé, je ne suis pas disponible ce jour là", Date: new Date("07/14/2017") }
        ];




   

        $("#datepicker").datepicker({
            
        // closeText: 'Fermer',
        // prevText: '&#x3c;Préc',
        // nextText: 'Suiv&#x3e;',
        // // currentText: 'Aujourd\'hui',
        // monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
        // 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
        // monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
        // 'Jul','Aou','Sep','Oct','Nov','Dec'],
        // dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        // dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        // dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        // weekHeader: 'Sem',
        // //dateFormat: 'dd-mm-yy',
        // firstDay: 1,

      
        //     dateFormat: 'DD, d MM, YY',
            firstDay: 1,
            // closeText: 'Fermer',
            // prevText: 'Précédent',
            // nextText: 'Suivant',
            // currentText: 'Aujourd\'hui',
            
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            // monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            // weekHeader: 'Sem.',

            beforeShowDay: function(date) {

                var result = [true, '', null];
                var matching = $.grep(events, function(event) {
                    return event.Date.valueOf() === date.valueOf();
                });
                
                if (matching.length) {
                    result = [true, 'highlight', null];
                }
               var date = $(this).datepicker('getDate');
               $('#day').html($.datepicker.formatDate('DD', date));
               $('#mnt').html($.datepicker.formatDate('MM', date));
               $('#date').html($.datepicker.formatDate('dd', date));
                return result;



             // var date = $(this).datepicker('getDate');
             //   $('#day').html($.datepicker.formatDate('DD', date));
             //   $('#mnt').html($.datepicker.formatDate('MM', date));
             //   $('#date').html($.datepicker.formatDate('dd', date));
             //    return result;



            },
            onSelect: function(dateText) {
                var date,
                    selectedDate = new Date(dateText),
                    i = 0,
                    event = null;
                
                while (i < events.length && !event) {
                    date = events[i].Date;

                    if (selectedDate.valueOf() === date.valueOf()) {
                        event = events[i];
                    }
                    i++;
                }
                if (event) {
                    alert(event.Title);
                }
            }
        });


})(jQuery);



