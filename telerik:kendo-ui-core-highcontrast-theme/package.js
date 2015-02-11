Package.describe({
  name: "telerik:kendo-ui-core-highcontrast-theme",
  summary: "Kendo UI Core is the free & open-source version of Kendo UI, the web's best UI widgets!",
  version: "1119.0.11",
  git: 'https://github.com/kendo-labs/meteor-packages.git',
  documentation:'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('jquery', 'client');

  //js

  api.add_files('telerik.kendoui.core/src/src/kendo.ui.core.js', 'client');

  //css

  api.add_files('telerik.kendoui.core/src/styles/web/kendo.common.core.css', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/kendo.highcontrast.css', 'client');

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

  api.add_files('telerik.kendoui.core/src/styles/web/textures/brushed-metal.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots1.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots2.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots3.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots4.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots5.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots6.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots7.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots8.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots9.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots10.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots11.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots12.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/dots13.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/textures/glass-lighter.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/glass.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/highlight.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/hsv-gradient.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/hue.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/leather1.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/leather2.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/noise.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe1.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe2.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe3.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe4.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe5.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/stripe6.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/transparency.png', 'client');
  api.add_files('telerik.kendoui.core/src/styles/web/textures/transtexture.png', 'client');

  //theme

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/editor.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/imagebrowser.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/indeterminate.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/loading-image.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/loading.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/loading_2x.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/slider-h.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/slider-v.gif', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/sprite.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/sprite_2x.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/sprite_kpi.png', 'client');

  api.add_files('telerik.kendoui.core/src/styles/web/HighContrast/sprite_kpi_2x.png', 'client');

});