                    <!-- User Dropdown -->
                    
                    @if (Route::has('login'))
                        {{-- <div class="top-right links"> --}}
                            @auth
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-user d-sm-none"></i>
                                        <span class="d-none d-sm-inline-block">{{ Auth::user()->name }}</span>
                                        <i class="fa fa-angle-down ml-5"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown">
                                        <h5 class="h6 text-center py-10 mb-5 border-b text-uppercase">{{ __('User') }}</h5>
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="si si-user mr-5"></i> {{ __('Profile') }}
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                            <span><i class="si si-envelope-open mr-5"></i> {{ __('Inbox') }}</span>
                                            <span class="badge badge-primary">3</span>
                                        </a>
                                        <a class="dropdown-item" href="javascript:void(0)">
                                            <i class="si si-note mr-5"></i> {{ __('Invoices') }}
                                        </a>
                                        <div class="dropdown-divider"></div>
                
                                        <!-- Toggle Side Overlay -->
                                        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                                        <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                            <i class="si si-wrench mr-5"></i> {{ __('Settings') }}
                                        </a>
                                        <!-- END Side Overlay -->
                
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('frm-logout').submit();">
                                            <i class="si si-logout mr-5"></i> {{ __('Sign Out') }}
                                        </a>
                                        <form id="frm-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </div>
                                </div>
                            @else
                                <a class="btn btn-rounded btn-dual-secondary"  href="{{ route('login') }}">{{ __('Login') }}</a>
                
                                @if (Route::has('register'))
                                    <a class="btn btn-rounded btn-dual-secondary" href="{{ route('register') }}">{{ __('Register') }}</a>
                                @endif
                            @endauth
                        {{-- </div> --}}
                    @endif
                    <!-- END User Dropdown -->