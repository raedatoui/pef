rm -f ./static/js/site.min.js
uglifyjs \
        ./static/js/plugins.js \
        ./static/js/script.js \
        ./static/js/viewer/mootools-core-1.4.5-full-nocompat-yc.js \
        ./static/js/viewer/mootools-more-1.4.0.1-compressed.js \
        ./static/js/viewer/protocols/iip.js \
        ./static/js/viewer/iipmooviewer-2.0.js \
        ./static/js/viewer/lang/help.en.js \
        -o ./static/js/site.min.js
