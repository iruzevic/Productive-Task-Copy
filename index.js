// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.productive.io/1-infinum/tasks?filter=LTEtdGFza3M%3D
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    $(document).ajaxComplete(function (event, jqxhr, settings) {
         if(typeof jqxhr.responseJSON !== 'undefined' && typeof jqxhr.responseJSON.data[0] !== 'undefined') {
             if(jqxhr.responseJSON.data[0].type === 'task') {
                 jQuery.each(jQuery('.project-task-list__task'), function(i, val) {
                     var $self = $(this);
                     var $id = $self.attr('id');
                     var $selectedElementNumberText = $.trim($self.find('.project-task-item__number-inner').text());
                     var $selectedElementTitle= $self.find('.project-task-item__title');
                     var $selectedElementTitleText = $.trim($selectedElementTitle.text()).replace(/"/g, '\'');
                     var combinedString = '#' + $selectedElementNumberText + ' - ' + $selectedElementTitleText;
                     $self.find('.project-task-item__wrapper').append('<span style="font-size:14px">&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#" class="copy-link" data-id="'+$id+'">Copy</a><input type="text" style="position:absolute;left:-50000px" id="input-'+$id+'" value="'+combinedString+'" /></span>');
                 });
             }
        }
    });
    $(document).on('click', '.copy-link', function() {
        var $self = $(this);
        var $id = $self.attr('data-id');
        $('#input-'+$id).select();
        document.execCommand('copy');
    });
})();