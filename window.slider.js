//anonymous function to contain scope
(function($) {
    //window slider constructor
    function WindowSlider(selector, startPosition, interval, fadeOutSpeed, fadeInSpeed, cycle){  
        var instance = this;

        //properties
        this.selector = selector;
        this.index = startPosition;
        this.interval = interval;
        this.fadeOutSpeed = fadeOutSpeed;
        this.fadeInSpeed = fadeInSpeed;
        this.cycle = cycle;
		
        
        //functions
        this.showNextSlide = function(){
            //console.log("index: " + instance.index);

            if(instance.index == 1){
                $(instance.selector + ' .about-section-item.img_set1').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
            else if(instance.index == 2){
                $(instance.selector + ' .about-section-item.img_set2').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
            else if(instance.index == 3){
                $(instance.selector + ' .about-section-item.img_set3').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
			 else if(instance.index == 4){
                $(instance.selector + ' .about-section-item.img_set4').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
			 else if(instance.index == 5){
                $(instance.selector + ' .about-section-item.img_set5').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
            else{
                $(instance.selector + ' .about-section-item.img_set6').each(function(){
                    $(this).find('>:first-child').removeClass('active_slide').fadeOut(instance.fadeOutSpeed).next('.slide-item').addClass('active_slide').fadeIn(instance.fadeInSpeed).end().appendTo(this)
                });
                instance.setNextIndex();
            }
        };
        this.setNextIndex = function(){
            switch(instance.cycle)
            {
                case 'clockwise':
                    if(instance.index == 4)
                        instance.index = 3;
                    else if (instance.index == 3)
                        instance.index = 1;
                    else if (instance.index == 2)
                        instance.index = 4;
                    else
                        instance.index = 2;
                    break;
                case 'counter-clockwise':
                    if (instance.index == 4)
                        instance.index = 2;
                    else if (instance.index == 3)
                        instance.index = 4;
                    else if (instance.index == 2)
                        instance.index = 1;
                    else
                        instance.index = 3;
                    break;
                case 'reverse':
                    if (instance.index == 1)
                        instance.index = 4;
                    else
                        instance.index--;
                    break;
                default:
                    if (instance.index == 6)
                        instance.index = 1;
                    else
                        instance.index++;
                    break;
            }
        };
    }

    //plugin entry point
	$.fn.windowSlider = function(params) {  
    	params = $.extend({
        	startPosition: 1,
        	interval: 3000,
        	fadeOutSpeed: 1000,
        	fadeInSpeed: 1000,
        	cycle: 'standard'
    	}, params);

        //Do not need to loop through each slider since all will have same settings
        var slider = new WindowSlider(
            this.selector,
            params.startPosition, 
            params.interval, 
            params.fadeOutSpeed, 
            params.fadeInSpeed, 
            params.cycle
        );

        //Set interval for window sliders
        setInterval(slider.showNextSlide, slider.interval);
        return this;
	};
})(jQuery);