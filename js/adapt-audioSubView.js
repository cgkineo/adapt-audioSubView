define([
    'core/js/adapt',
    'core/js/views/subView'
],function(Adapt, SubView) {

    var Audio = SubView.extend({

        className: "audio",

        attach: function() {
            this.$(".audio-player")
                .off("play pause")
                .on({
                    "play pause": this.onStateChange.bind(this)
                });
            this.onStateChange();
        },

        events: {
            "click .playpause": "onPlayPauseClick"
        },

        onPlayPauseClick: function(event) {
            event.preventDefault();
            event.stopPropagation();
            var audio = this.$("audio")[0];
            if (audio.paused) {
                try {
                    audio.currentTime = 0;
                } catch (err) {}
                audio.play();
            } else audio.pause();
        },

        onStateChange: function(event) {
            var audio = this.$("audio")[0];
            this.$el.toggleClass("playing", !audio.paused);
        }

    }, {
        template: "audio"
    });

    return Adapt.subviews.register("audio", Audio);

});
