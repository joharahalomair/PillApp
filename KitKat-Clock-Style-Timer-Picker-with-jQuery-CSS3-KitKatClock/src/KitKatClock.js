/*
=================================================
KitKatClock jQuery Plugin

Author: Bryan Iddings
http://iddings.co/KitKatClock

****MAINTAIN THIS HEADER WHEN REDISTRIBUTING****

This work is licensed under the Creative
Commons Attribution-NonCommercial-ShareAlike
4.0 International License. To view a copy of
this license, visit
http://creativecommons.org/licenses/by-nc-sa/4.0/
=================================================
*/
(function( $ ) {
    function get_set(attr, val){
        if (val===true)
            val="true";
        if (val===false)
            val="false";
        if (val===null ||
            val===undefined)
            var to_ret=$(".kitkat-clock").attr("data-"+attr);
        else
            var to_ret=$(".kitkat-clock").attr("data-"+attr, val);
        if (to_ret=="true" ||
            to_ret=="false")
            to_ret=(to_ret=="true");
        return to_ret;
    }
    function transition(mode, dur){
        if (dur===null ||
            dur===undefined)
            dur=300;
        if (mode=="minute"){
            $(".kitkat-clock-minutes").show();
            $(".kitkat-clock-hours").animate({
                top:"-10%", left:"-10%",
                width:"120%", height:"120%",
                opacity:0
            }, dur, 'flex', function(){
                $(".kitkat-clock-hours").hide();
            });
            $(".kitkat-clock-minutes").css({
                top:"10%", left:"10%",
                width:"80%", height:"80%",
                opacity:0
            })
            $(".kitkat-clock-minutes").animate({
                top:"0%", left:"0%",
                width:"100%", height:"100%",
                opacity:1
            }, dur, 'flex');
            $(".kitkat-clock-minutes").show();
            get_set("hourmode", false);
            $(".kitkat-hour").removeClass("kitkat-time-active");
            $(".kitkat-minute").addClass("kitkat-time-active");
            var number=parseInt(get_set("minutes"));
            if (isNaN(number))
                number=0;
            setTimeout(function(){$(".kitkat-clock-hand").css({
                "-webkit-transform":"rotate("+(number*6)+"deg)"
            });}, dur/2);
        }
        else {
            $(".kitkat-clock-hours").show();
            $(".kitkat-clock-minutes").animate({
                top:"10%", left:"10%",
                width:"80%", height:"80%",
                opacity:0
            }, dur, 'flex', function(){
                $(".kitkat-clock-minutes").hide();
            });
            $(".kitkat-clock-hours").css({
                top:"-10%", left:"-10%",
                width:"120%", height:"120%",
                opacity:0
            })
            $(".kitkat-clock-hours").animate({
                top:"0%", left:"0%",
                width:"100%", height:"100%",
                opacity:1
            }, dur, 'flex');
            get_set("hourmode", true);
            $(".kitkat-hour").addClass("kitkat-time-active");
            $(".kitkat-minute").removeClass("kitkat-time-active");
            var number=parseInt(get_set("hours"));
            if (isNaN(number))
                number=0;
            setTimeout(function(){$(".kitkat-clock-hand").css({
                "-webkit-transform":"rotate("+(number*30)+"deg)"
            });}, dur/2);
        }
    }
    $(function(){
        var clock=$("<div class='kitkat-clock-element kitkat-container'><div class='kitkat-clock-element kitkat-time'><span class='kitkat-clock-element kitkat-hour'>12</span>:<span class='kitkat-clock-element kitkat-minute'>00</span><span class='kitkat-clock-element kitkat-am-pm'>AM</span></div><div class='kitkat-clock-element kitkat-clock'><div class='kitkat-clock-element kitkat-clock-body'></div><div class='kitkat-clock-element kitkat-clock-hand'><div class='kitkat-clock-element kitkat-clock-hand-line'></div><div class='kitkat-clock-element kitkat-clock-hand-end'></div></div><div class='kitkat-clock-element kitkat-clock-hours'></div><div class='kitkat-clock-element kitkat-clock-minutes'></div><div class='kitkat-clock-element kitkat-clock-cover'></div><div class='kitkat-clock-element kitkat-clock-am kitkat-clock-am-pm-active'><span class='kitkat-clock-element'>AM</span></div><div class='kitkat-clock-element kitkat-clock-pm'><span class='kitkat-clock-element'>PM</span></div></div><div class='kitkat-clock-element kitkat-done'>Done</div></div>");
        $("body").append(clock).on("click", function(event){
            if (!$(event.target).hasClass("kitkat-clock-element") &&
                $(event.target).attr("data-role")!="time"){
                var mins=parseInt(get_set("minutes"));
                if (mins<10)
                    mins="0"+mins;
                $("input[data-kitkat-active=true]").val(get_set("hours")+":"+mins+(get_set("is_am")?" AM":" PM")).attr("data-kitkat-active", "false");
                $(".kitkat-container").hide();
            }
        });
        for (var i=0;i<12;i++){
            var radian=Math.PI/2 + (i*Math.PI/6);
            var x=.5-(.78*Math.cos(radian)/2);
            var y=.5-(.78*Math.sin(radian)/2);
            var tmp=$("<div>").html(i!=0?i:12).css({
                position:"absolute",
                top:(y*100)+"%",
                left:(x*100)+"%"
            });
            $(".kitkat-clock-hours").append(tmp);
        }
        for (var i=0;i<12;i++){
            var radian=Math.PI/2 + (i*Math.PI/6);
            var x=.5-(.78*Math.cos(radian)/2);
            var y=.5-(.78*Math.sin(radian)/2);
            var tmp=$("<div>").html(i*5).css({
                position:"absolute",
                top:(y*100)+"%",
                left:(x*100)+"%"
            });
            $(".kitkat-clock-minutes").append(tmp);
        }
        get_set("hourmode", true);
        get_set("mousedown", false);
        $(".kitkat-hour").addClass("kitkat-time-active").on("click", function(){
            if (!get_set("hourmode"))
                transition("hour");
        });
        $(".kitkat-minute").on("click", function(){
            if (get_set("hourmode"))
                transition("minute");
        });
        $(".kitkat-clock-hours").children().each(function(){
            $(this).css({
                marginTop:$(this).outerHeight()/-2,
                marginLeft:$(this).outerWidth()/-2
            });
        });
        $(".kitkat-clock-minutes").children().each(function(){
            $(this).css({
                marginTop:$(this).outerHeight()/-2,
                marginLeft:$(this).outerWidth()/-2
            })
        });
        $(".kitkat-clock-am").on("click", function(){
            get_set("is_am", true);
            $(".kitkat-clock-am").addClass("kitkat-clock-am-pm-active");
            $(".kitkat-clock-pm").removeClass("kitkat-clock-am-pm-active");
            $(".kitkat-am-pm").html("AM");
        });
        $(".kitkat-am-pm").on("click", function(){
            if (get_set("is_am")){
                $(".kitkat-clock-am").removeClass("kitkat-clock-am-pm-active");
                $(".kitkat-clock-pm").addClass("kitkat-clock-am-pm-active");
                $(".kitkat-am-pm").html("PM");
            }
            else {
                $(".kitkat-clock-pm").removeClass("kitkat-clock-am-pm-active");
                $(".kitkat-clock-am").addClass("kitkat-clock-am-pm-active");
                $(".kitkat-am-pm").html("AM");
            }
            get_set("is_am", !get_set("is_am"));
        });
        $(".kitkat-clock-pm").on("click", function(){
            get_set("is_am", false);
            $(".kitkat-clock-pm").addClass("kitkat-clock-am-pm-active");
            $(".kitkat-clock-am").removeClass("kitkat-clock-am-pm-active");
            $(".kitkat-am-pm").html("PM");
        });
        $(".kitkat-clock-minutes").hide();
        $(".kitkat-done").on("click", function(){
            var mins=parseInt(get_set("minutes"));
            if (mins<10)
                mins="0"+mins;
            $("input[data-kitkat-active=true]").val(get_set("hours")+":"+mins+(get_set("is_am")?" AM":" PM")).attr("data-kitkat-active", "false");
            $(".kitkat-container").hide();
        })
        $(".kitkat-clock-cover").on("mousemove mousedown mouseup touchstart touchend touchcancel click touchmove", function(event){
            var use_event;
            if (event.type=="touchmove" ||
                event.type=="touchstart"){
                event.offsetX=event.originalEvent.touches[0].pageX;
                event.offsetY=event.originalEvent.touches[0].pageY;
                var cur_offset=$(".kitkat-clock-body").offset();
                event.offsetX-=cur_offset.left;
                event.offsetY-=cur_offset.top;
            }
            switch (event.type){
                case "touchmove":use_event="mousemove";event.preventDefault();break;
                case "touchend":use_event="mouseup";break;
                case "touchcancel":use_event="mouseup";break;
                case "touchstart":use_event="mousedown";break;
                default:use_event=event.type;
            }
            var radius=$(".kitkat-clock-body").outerWidth()/2;
            if (use_event=="mousedown")
                get_set("mousedown", true);
            if (use_event=="mouseup")
                get_set("mousedown", false);
            if (use_event=="click" ||
                use_event=="mousedown" ||
                (use_event=="mousemove" && get_set("mousedown"))) {
                var pieces=get_set("hourmode")?12:60;
                var x=event.offsetX-radius;
                var y=event.offsetY-radius;
                pieces/=2;
                var z=Math.sqrt(x*x+y*y);
                var theta=Math.asin(y/z);
                var closest=(Math.PI/pieces)*Math.round(theta/(Math.PI/pieces));
                closest/=Math.PI;
                closest*=pieces;
                var x_pos=x>0;
                var start=pieces/2;
                if (!x_pos){
                    start*=3;
                    closest*=-1;
                }
                var number=start+closest;
                var radians=0;
                radians+=number*Math.PI/(get_set("hourmode")?6:30);
                radians=(radians>2*Math.PI)?radians-(2*Math.PI):radians;
                $(".kitkat-clock-hand").css({
                    "-webkit-transform":"rotate("+radians*(180/Math.PI)+"deg)"
                });
                number=Math.round(number);
                if (get_set("hourmode")){
                    if (number==0)
                        number=12;
                    get_set("hours", number);
                    $(".kitkat-hour").html(number);
                    if (use_event=="mouseup" ||
                        use_event=="click"){
                        transition("minute");
                    }
                }
                else {
                    if (number==60)
                        number=0;
                    get_set("minutes", number);
                    if (number<10)
                        number="0"+number;
                    $(".kitkat-minute").html(number);
                }
            }
        });
    $(".kitkat-container").hide();
    $.fn.kitkatclock.noDegrade(true);
    });
    $.easing.flex = function(t) {
        if (t<1/2)
            return (-1/8)*Math.sin(t*Math.PI*2);
        else
            return t*2 - 1;
    }
    $.fn.kitkatclock=function(){
        return this.each(function(){
            var time="12:00 AM"
            if (!!this.value.match(/\d{1,2}\:\d{2} AM|PM/i))
                time=this.value;
            this.value=time;
            $(this).on("click focus", function(event){
                event.preventDefault();
                var time="12:00 AM"
                if (!!this.value.match(/\d{1,2}\:\d{2} AM|PM/i))
                    time=this.value;
                this.value=time;
                var time_pieces=time.split(":");
                get_set("hours", time_pieces[0]);
                get_set("is_am", time_pieces[1].toLowerCase().indexOf("am")!=-1);
                get_set("minutes", time_pieces[1].split(" ")[0]);
                $(".kitkat-hour").html(time_pieces[0]);
                $(".kitkat-minute").html(time_pieces[1].split(" ")[0]);
                $(".kitkat-am-pm").html(time_pieces[1].split(" ")[1].toUpperCase());
                $("input[data-kitkat-active=true]").attr("data-kitkat-active", "false");
                $(this).attr("data-kitkat-active", "true");
                $(".kitkat-clock-am, .kitkat-clock-pm").removeClass("kitkat-clock-am-pm-active");
                $(".kitkat-clock-"+(get_set("is_am")?"am":"pm")).addClass("kitkat-clock-am-pm-active");
                transition("hour", 0);
                var container=$(".kitkat-container");
                var input_offset=$(this).offset();
                var window_size={
                    width:$(window).width(),
                    height:$(window).height()
                }
                var document_size={
                    width:$(document).width(),
                    height:$(document).height()
                }
                var plugin_size={
                    width:container.outerWidth(),
                    height:container.outerHeight()
                }
                var plugin_position={
                    top:input_offset.top,
                    left:input_offset.left
                }
                var current_scroll={
                    top:$("body").scrollTop(),
                    left:$("body").scrollLeft()
                }
                var current_viewport={
                    top:current_scroll.top,
                    bottom:current_scroll.top+window_size.height,
                    left:current_scroll.left,
                    right:current_scroll.left+window_size.width
                };
                while (plugin_position.top+plugin_size.height>document_size.height &&
                        plugin_position.top>0){
                    plugin_position.top-=1;
                }
                while (plugin_position.left+plugin_size.width>document_size.width &&
                        plugin_position.left>0){
                    plugin_position.left-=1;
                }
                if (plugin_size.width<=window_size.width){
                    while (plugin_position.left<current_viewport.left){
                        plugin_position.left++;
                    }
                    while (plugin_position.left+plugin_size.width>current_viewport.right){
                        plugin_position.left--;
                    }
                }
                else {
                    plugin_position.left=current_viewport.left-(plugin_size.width-window_size.width)/2;
                }
                if (plugin_size.height<=window_size.height){
                    while (plugin_position.top<current_viewport.top){
                        plugin_position.top++;
                    }
                    while (plugin_position.top+plugin_size.height>current_viewport.bottom){
                        plugin_position.top--;
                    }
                }
                else {
                    plugin_position.top=current_viewport.top-(plugin_size.height-window_size.height)/2;
                }
                container.css({
                    position:"absolute",
                    top: plugin_position.top, left: plugin_position.left
                }).show();
            })
        });
    }
    $.fn.kitkatclock.noDegrade=function(run){
        if (!run)
            $.fn.kitkatclock=function(){};
        else{
            $("input[type=time]").attr({
                type:"text","data-role":"time"
            });
            $("input[data-role=time]").kitkatclock();
        }
    }
})( jQuery );