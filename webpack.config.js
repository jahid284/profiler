var webpack = require('webpack');
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!popper.js/dist/umd/popper.min.js',
    'script-loader!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Navbar: 'app/components/Navbar.jsx',
      Profile: 'app/components/Profile.jsx',
      HomePage: 'app/components/HomePage.jsx',
      BookAppointment: 'app/components/BookAppointment.jsx'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          "presets": ["env", "react"]
        }
      }
    ]
  }
};