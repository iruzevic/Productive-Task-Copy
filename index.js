// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Productive Copy task button
// @author       Ivan Ružević
// @include      https://app.productive.io/1-infinum/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    $(document).ajaxComplete(function (event, jqxhr, settings) {
        setTimeout(function() {
            if(typeof jqxhr.responseJSON !== 'undefined' && typeof jqxhr.responseJSON.data[0] !== 'undefined') {
                jQuery.each(jQuery('.project-task-list__task'), function(i, val) {
                    if ($(this).find('.copy-wrapper').length > 0) {
                        return false;
                    }
                    var $self = $(this);
                    var $id = $self.attr('id');
                    var $selectedElementNumberText = $.trim($self.find('.project-task-item__number-inner').text());
                    var $selectedElementTitle= $self.find('.project-task-item__title');
                    var $selectedElementTitleText = $.trim($selectedElementTitle.text()).replace(/"/g, '\'');
                    var combinedString = '#' + $selectedElementNumberText + ' - ' + $selectedElementTitleText;
                    $self.find('.project-task-item__wrapper').append('<span class="copy-wrapper" style="font-size:14px">&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#" class="copy-link" data-id="'+$id+'">Copy</a><input type="text" style="position:absolute;left:-50000px" id="input-'+$id+'" value="'+combinedString+'" /></span>');

                });
            }
        }, 3000);
    });
    $(document).on('click', '.copy-link', function(e) {
        e.preventDefault();
        var $self = $(this);
        var $id = $self.attr('data-id');
        $('#input-'+$id).select();
        document.execCommand('copy');
    });
})();