console.log("yep");

$(document).ready(function(){

    function flip(){
        var tl = new TimelineMax();
        tl.from('.cellphone', 2, {rotation: -90});
    }


    class Path {

        constructor(classname) {
            this.classname = classname;
        }

        changeCss(){
            var total_length = $("."+this.classname+" path").get(0).getTotalLength();
            console.log(total_length);

            // set things up to draw the path of the svg later on
            $("."+this.classname+" path").css("fill-opacity", 0);
            // $("."+this.classname+" path").css("fill", "none");
            $("."+this.classname+" path").css("stroke-widthy", 1);
            $("."+this.classname+" path").css("stroke-dasharray", total_length);
            $("."+this.classname+" path").css("stroke-dashoffset", total_length);
            $("."+this.classname).css("display", "inline");
        }
    }

    function drawing(){
        // Usage:
        let monitor = new Path("monitor");
        monitor.changeCss();
        let dashes = new Path("dashes");
        dashes.changeCss();

        // var tl2 = new TimelineMax();

        // $(".phone").css("display", "inline");
        $(".curriculum").css("display", "inline");

        var tl = new TimelineMax();

        tl.to('.monitor path', 4, {strokeDashoffset: 0})
    
        .to('.dashes path', 1, {strokeDashoffset: 0}, "-=3")
        .to('.computer path', 2, {fillOpacity: 1, ease: Power3.easeIn})
    
        .to('.monitorFilled', 1, {opacity: 1, ease: Power2.easeIn})
    
        .from('.phone', 1, {scale: 0.5, left: "100vw", ease: Power1.easeIn, y:-500, rotation: -70})
        .from('.curriculum', 1, {scale: 0, rotation: -70})
    
        .to('.button', 1, {opacity: 1, ease: Bounce.easeIn, repeat:-1});
    }

    drawing();
    flip();

    $(window).resize(function(){location.reload();});

});