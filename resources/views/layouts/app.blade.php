<!DOCTYPE html>
<!--[if lte IE 9]> <html lang="{{ str_replace('-', '_', app()->getLocale()) }}" class="lt-ie10 lt-ie10-msg no-focus"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="{{ str_replace('-', '_', app()->getLocale()) }}" class="no-focus"> <!--<![endif]-->
    @include('partials._head')
    <body>
        <div id="page-loader" class="show"></div>
        <div id="app" style="display:none">
            <div id="page-container" class="sidebar-inverse side-scroll page-header-fixed page-header-inverse main-content-boxed">
                <!-- Sidebar -->
                {{-- @include('partials.app._sidebar') --}}
                <!-- END Sidebar -->
                <!-- Header -->
                @include('partials.app._page_header')
                <!-- END Header -->
                <!-- Main Container -->
                <main id="main-container">
                    @yield('content')
                </main>
                <!-- END Main Container -->
                <!-- Footer -->
                @include('partials.app._footer')
                <!-- END Footer -->
            </div>    
        </div>    
        @include('partials._scripts')    
    </body>
</html>