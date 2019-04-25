const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    /* CSS */
    .sass('resources/assets/sass/codebase/themes/corporate.scss', 'public/css/themes/')
    .sass('resources/assets/sass/codebase/themes/earth.scss', 'public/css/themes/')
    .sass('resources/assets/sass/codebase/themes/elegance.scss', 'public/css/themes/')
    .sass('resources/assets/sass/codebase/themes/flat.scss', 'public/css/themes/')
    .sass('resources/assets/sass/codebase/themes/pulse.scss', 'public/css/themes/')
    .sass('resources/assets/sass/main.scss', 'public/css/codebase.css')
    // .sass('resources/assets/sass/app.scss', 'public/css')

    /* JS */
    /**Pages */
    .js('resources/assets/_es6/pages/be_blocks_widgets_stats.js', 'public/js/pages/be_blocks_widgets_stats.js')
    .js('resources/assets/_es6/pages/be_comp_calendar.js', 'public/js/pages/be_comp_calendar.js')
    .js('resources/assets/_es6/pages/be_comp_charts.js', 'public/js/pages/be_comp_charts.js')
    .js('resources/assets/_es6/pages/be_comp_chat.js', 'public/js/pages/be_comp_chat.js')
    .js('resources/assets/_es6/pages/be_comp_image_cropper.js', 'public/js/pages/be_comp_image_cropper.js')
    .js('resources/assets/_es6/pages/be_comp_maps_google.js', 'public/js/pages/be_comp_maps_google.js')
    .js('resources/assets/_es6/pages/be_comp_maps_vector.js', 'public/js/pages/be_comp_maps_vector.js')
    .js('resources/assets/_es6/pages/be_comp_nestable.js', 'public/js/pages/be_comp_nestable.js')
    .js('resources/assets/_es6/pages/be_comp_rating.js', 'public/js/pages/be_comp_rating.js')
    .js('resources/assets/_es6/pages/be_forms_plugins.js', 'public/js/pages/be_forms_plugins.js')
    .js('resources/assets/_es6/pages/be_forms_validation.js', 'public/js/pages/be_forms_validation.js')
    .js('resources/assets/_es6/pages/be_forms_wizard.js', 'public/js/pages/be_forms_wizard.js')
    .js('resources/assets/_es6/pages/be_pages_crypto_dashboard.js', 'public/js/pages/be_pages_crypto_dashboard.js')
    .js('resources/assets/_es6/pages/be_pages_dashboard.js', 'public/js/pages/be_pages_dashboard.js')
    .js('resources/assets/_es6/pages/be_pages_ecom_dashboard.js', 'public/js/pages/be_pages_ecom_dashboard.js')
    .js('resources/assets/_es6/pages/be_pages_generic_contact.js', 'public/js/pages/be_pages_generic_contact.js')
    .js('resources/assets/_es6/pages/be_pages_generic_scrumboard.js', 'public/js/pages/be_pages_generic_scrumboard.js')
    .js('resources/assets/_es6/pages/be_pages_generic_todo.js', 'public/js/pages/be_pages_generic_todo.js')
    .js('resources/assets/_es6/pages/be_tables_datatables.js', 'public/js/pages/be_tables_datatables.js')
    .js('resources/assets/_es6/pages/be_ui_activity.js', 'public/js/pages/be_ui_activity.js')
    .js('resources/assets/_es6/pages/be_ui_animations.js', 'public/js/pages/be_ui_animations.js')
    .js('resources/assets/_es6/pages/be_ui_icons.js', 'public/js/pages/be_ui_icons.js')
    .js('resources/assets/_es6/pages/db_classic.js', 'public/js/pages/db_classic.js')
    .js('resources/assets/_es6/pages/db_corporate.js', 'public/js/pages/db_corporate.js')
    .js('resources/assets/_es6/pages/db_dark.js', 'public/js/pages/db_dark.js')
    .js('resources/assets/_es6/pages/db_minimal.js', 'public/js/pages/db_minimal.js')
    .js('resources/assets/_es6/pages/db_pop.js', 'public/js/pages/db_pop.js')
    .js('resources/assets/_es6/pages/op_auth_lock.js', 'public/js/pages/op_auth_lock.js')
    .js('resources/assets/_es6/pages/op_auth_reminder.js', 'public/js/pages/op_auth_reminder.js')
    .js('resources/assets/_es6/pages/op_auth_signin.js', 'public/js/pages/op_auth_signin.js')
    .js('resources/assets/_es6/pages/op_auth_signup.js', 'public/js/pages/op_auth_signup.js')
    .js('resources/assets/_es6/pages/op_coming_soon.js', 'public/js/pages/op_coming_soon.js')
    .js('resources/assets/_es6/pages/op_installation.js', 'public/js/pages/op_installation.js')

    .js('resources/assets/js/app.js', 'public/js')   
    .js('resources/assets/_es6/main/app.js', 'public/js/codebase.app.js')

   /* Tools */
//    .browserSync('localhost:8000')
//    .disableNotifications()

   /* Options */
   .options({
       processCssUrls: false
   });
