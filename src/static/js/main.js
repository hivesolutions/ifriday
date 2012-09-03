// Hive iFriday System
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive iFriday System.
//
// Hive iFriday System is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive iFriday System is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive iFriday System. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2010-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

jQuery(document).ready(function() {

    function nextFriday() {
        var date = new Date();

        switch (date.getDay()) {
            case 0 :
                date.setDate(date.getDate() + 5);
                break;

            case 1 :
                date.setDate(date.getDate() + 4);
                break;

            case 2 :
                date.setDate(date.getDate() + 3);
                break;

            case 3 :
                date.setDate(date.getDate() + 2);
                break;

            case 4 :
                date.setDate(date.getDate() + 1);
                break;

            case 6 :
                date.setDate(date.getDate() + 6);
                break;
        }

        return date;
    }

    setInterval(function() {
                var friday = nextFriday();
                friday.setHours(18);
                friday.setMinutes(0);
                friday.setSeconds(0);
                friday.setMilliseconds(0);

                var diff = friday - new Date();
                var seconds = Math.floor((diff / 1000) % 60);
                var minutes = Math.floor((diff / 60000) % 60);
                var hours = Math.floor((diff / 3600000) % 24);
                var days = Math.floor(diff / 86400000);

                jQuery(".time.seconds .value").html(seconds);
                jQuery(".time.minutes .value").html(minutes);
                jQuery(".time.hours .value").html(hours);
                jQuery(".time.days .value").html(days);

                var stroke = jQuery(".stroke");
                for (var index = 1; index < 7; index++) {
                    stroke.removeClass("stroke-" + index);
                }
                stroke.addClass("stroke-" + days);
            }, 250);

    jQuery(".overlay").click(function() {
                // hides the currently displayed windows
                jQuery(".window").uxwindow("hide");
            });

    jQuery(".counter").click(function() {
                jQuery(".counter").hide();
                jQuery(".stroke").show();
            });

    jQuery(".stroke").click(function() {
                jQuery(".stroke").hide();
                jQuery(".counter").show();
            });

    jQuery(".list.list-messages li").click(function() {
                // retrieves the current element and uses it to
                // retrieve the associated message
                var element = jQuery(this);
                var message = element.html();

                // sets (saves) the message in the body element
                // and then shows the services modal window
                jQuery("body").data("message", message);
                jQuery(".modal.services").uxwindow("show");
            });

    jQuery(".service.twitter").click(function() {
        // retrieves the currently set message and redirects
        // the user agent to the twiter address for the message
        var message = jQuery("body").data("message");
        document.location = "https://twitter.com/intent/tweet?source=webclient&text="
                + encodeURIComponent(message + " #ifriday");
    });
});
