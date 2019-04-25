<!DOCTYPE html>
<html lang="{{ str_replace('-', '_', app()->getLocale()) }}" class="no-focus"> 
    @include('layouts.partials._head')
    <body>
        <div id="page-loader" class="show"></div>
        <div id="app" style="display:none">
        {{-- <div id="app"> --}}
            <div id="page-container" class="sidebar-o sidebar-inverse side-scroll page-header-inverse page-header-fixed  enable-page-overlay">
                <!-- Side-Overlay -->
                @include('layouts.partials.admin._side_overlay')
                <!-- Side-Overlay -->
                <!-- END Header -->
                @include('layouts.partials.admin._sidebar')
                <!-- END Header -->
                <!-- Header -->
                @include('layouts.partials.admin._header')
                <!-- END Header -->
                <!-- Main Container -->
                <main id="main-container">
                    @isset($breadcrumb)
                        <v-breadcrumb v-bind:itens="{{$breadcrumb}}"></v-breadcrumb>                
                    @endisset            
                    @yield('content')
                </main>
                <!-- END Main Container -->
                <!-- Footer -->
                @include('layouts.partials.admin._footer')
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