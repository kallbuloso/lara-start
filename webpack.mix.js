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
    .js([
        'resources/assets/_es6/pages/be_blocks_widgets_stats.js',
        'resources/assets/_es6/pages/be_comp_calendar.js',
        'resources/assets/_es6/pages/be_comp_charts.js',
        'resources/assets/_es6/pages/be_comp_chat.js',
        'resources/assets/_es6/pages/be_comp_image_cropper.js',
        'resources/assets/_es6/pages/be_comp_maps_google.js',
        'resources/assets/_es6/pages/be_comp_maps_vector.js',
        'resources/assets/_es6/pages/be_comp_nestable.js',
        'resources/assets/_es6/pages/be_comp_rating.js',
        'resources/assets/_es6/pages/be_forms_plugins.js',
        'resources/assets/_es6/pages/be_forms_validation.js',
        'resources/assets/_es6/pages/be_forms_wizard.js',
        'resources/assets/_es6/pages/be_pages_crypto_dashboard.js',
        'resources/assets/_es6/pages/be_pages_dashboard.js',
        'resources/assets/_es6/pages/be_pages_ecom_dashboard.js',
        'resources/assets/_es6/pages/be_pages_generic_contact.js',
        'resources/assets/_es6/pages/be_pages_generic_scrumboard.js',
        'resources/assets/_es6/pages/be_pages_generic_todo.js',
        'resources/assets/_es6/pages/be_tables_datatables.js',
        'resources/assets/_es6/pages/be_ui_activity.js',
        'resources/assets/_es6/pages/be_ui_animations.js',
        'resources/assets/_es6/pages/be_ui_icons.js',
        'resources/assets/_es6/pages/db_classic.js',
        'resources/assets/_es6/pages/db_corporate.js',
        'resources/assets/_es6/pages/db_dark.js',
        'resources/assets/_es6/pages/db_minimal.js',
        'resources/assets/_es6/pages/db_pop.js',
        'resources/assets/_es6/pages/op_auth_lock.js',
        'resources/assets/_es6/pages/op_auth_reminder.js',
        'resources/assets/_es6/pages/op_auth_signin.js',
        'resources/assets/_es6/pages/op_auth_signup.js',
        'resources/assets/_es6/pages/op_coming_soon.js',
        'resources/assets/_es6/pages/op_installation.js', 
    ],'public/js/pages/pages.js')

    .js('resources/assets/js/app.js', 'public/js')   
    .js('resources/assets/_es6/main/app.js', 'public/js/codebase.app.js')

   /* Tools */
//    .browserSync('localhost:8000')
//    .disableNotifications()

   /* Options */
   .options({
       processCssUrls: false
   });
