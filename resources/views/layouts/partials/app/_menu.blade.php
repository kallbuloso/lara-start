
    <li>
        <a class="active" href="/">
            <i class="si si-home"></i>Home
        </a>
    </li>
    <li class="nav-main-heading">Heading</li>
    <li>
        <a class="nav-submenu" data-toggle="nav-submenu" href="#">
            <i class="si si-puzzle"></i>Dropdown
        </a>
        <ul>
            <li>
                <a href="javascript:void(0)">Link #1</a>
            </li>
            <li>
                <a href="javascript:void(0)">Link #2</a>
            </li>
            <li>
                <a class="nav-submenu" data-toggle="nav-submenu" href="#">Dropdown</a>
                <ul>
                    <li>
                        <a href="javascript:void(0)">Link #1</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Link #2</a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li class="nav-main-heading">Vital</li>
    <li>
        <a href="javascript:void(0)">
            <i class="si si-wrench"></i>Page
        </a>
    </li>
    <li>
        <a href="javascript:void(0)">
            <i class="si si-wrench"></i>Page
        </a>
    </li>
    <li>
        <a href="javascript:void(0)">
            <i class="si si-wrench"></i>Page
        </a>
    </li>
    <li>        
        @if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">{{ __('Login') }}</a>
    
                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">{{ __('Register') }}</a>
                    @endif
                @endauth
            </div>
        @endif
    </li>