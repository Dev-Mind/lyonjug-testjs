var testsContext = require.context('./src/js', true, /Spec\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src/js', true, /^(?!Spec)*.js$/);
srcContext.keys().forEach(srcContext);