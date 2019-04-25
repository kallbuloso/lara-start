<!DOCTYPE html>
<html lang="{{ str_replace('-', '_', app()->getLocale()) }}" class="no-focus">
    @include('layouts.partials._head')
    <body>
        <div id="page-loader" class="show"></div>
        <div id="app" style="display:none">
        <div id="app">
            <div id="page-container" class="sidebar-inverse side-scroll page-header-fixed page-header-glass page-header-inverse main-content-boxed enable-page-overlay">
                <!-- Header -->
                @include('layouts.partials.app._page_header')
                <!-- END Header -->
                <!-- Main Container -->
                <main id="main-container">
                    @yield('content')
                </main>
                <!-- END Main Container -->
                <!-- Footer -->
                @include('layouts.partials.app._footer')
                <!-- END Footer -->
            </div>    
        </div>  

        <!-- Codebase Core JS -->
        @asset('js/codebase.core.min.js')
        @asset('js/codebase.app.min.js')
        
        <!-- Laravel Scaffolding JS -->
        @mix('js/app.js')

        @yield('js_after')
    
    </body>
</html>