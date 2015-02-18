Package.describe({
  name: "telerik:kendo-ui-core-bootstrap-theme",
  summary: "Kendo UI Core is the free & open-source version of Kendo UI, the web's best UI widgets!",
  version: "1119.0.13",
  git: 'https://github.com/kendo-labs/meteor-packages.git',
  documentation:'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('jquery', 'client');

  //js

  api.add_files('telerik.kendoui.core/src/src/kendo.ui.core.js', 'client');

   //css

  api.add_files('telerik.kendoui.core/styles/kendo.common.min.css', 'client');

  api.add_files('telerik.kendoui.core/styles/kendo.bootstrap.min.css', 'client');

  //mobile css

  api.add_files('telerik.kendoui.core/src/styles/mobile/kendo.mobile.all.css', 'client');

  //global CSS fonts

  api.add_files('telerik.kendoui.core/styles/images/kendoui.ttf', 'client');

  api.add_files('telerik.kendoui.core/styles/images/kendoui.woff', 'client');

  api.add_files('telerik.kendoui.core/src/styles/mobile/images/kendoui.woff', 'client');

  api.add_files('telerik.kendoui.core/src/styles/mobile/images/kendoui.ttf', 'client');

  //global CSS images

  api.add_files('telerik.kendoui.core/styles/images/back.png', 'client');

  api.add_files('telerik.kendoui.core/styles/images/kendoui.svg', 'client');

  api.add_files('telerik.kendoui.core/styles/images/wp8_icons.png', 'client');

  api.add_files('telerik.kendoui.core/styles/images/wp8_inverseicons.png', 'client');

  //global CSS textures

  api.add_files('telerik.kendoui.core/styles/textures/brushed-metal.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots1.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots2.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots3.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots4.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots5.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots6.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots7.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots8.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots9.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots10.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots11.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots12.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/dots13.png', 'client');

  api.add_files('telerik.kendoui.core/styles/textures/glass-lighter.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/glass.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/highlight.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/hsv-gradient.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/hue.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/leather1.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/leather2.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/noise.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe1.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe2.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe3.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe4.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe5.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/stripe6.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/transparency.png', 'client');
  api.add_files('telerik.kendoui.core/styles/textures/transtexture.png', 'client');

  //theme

  api.add_files('telerik.kendoui.core/styles/Bootstrap/editor.png', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/imagebrowser.png', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/indeterminate.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/loading-image.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/loading.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/loading_2x.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/slider-h.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/slider-v.gif', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/sprite.png', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/sprite_2x.png', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/sprite_kpi.png', 'client');

  api.add_files('telerik.kendoui.core/styles/Bootstrap/sprite_kpi_2x.png', 'client');

});