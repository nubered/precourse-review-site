rm -rf server
mkdir public public/css public/js
mv client/style.css public/css
mv client/bundle.js public/js
mv client/index.html public
touch index.js
cd client
rm multiplier.js
mkdir js js/test
mv app.js js
mv test_multiplier.js js/test/multiplier.test.js

