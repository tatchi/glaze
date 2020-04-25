const babel = require('@babel/core');

babel.transformFile(
  require.resolve('./filename.js'),
  {
    presets: ['@babel/preset-typescript'],

    babelrc: false,
    plugins: [require.resolve('../dist-node/index.js')],
    parserOpts: {
      plugins: ['jsx'],
    },
  },
  function (err, result) {
    console.log(result.code);
  },
);
