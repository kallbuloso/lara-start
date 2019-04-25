@extends('layouts.app')

@section('content')
<div class="bg-body-dark bg-pattern" style="background-image: url('/media/various/bg-pattern-inverse.png');">
    <div class="row mx-0 justify-content-center">
        <div class="hero-static col-lg-7 col-xl-5">
            <div class="content content-full overflow-hidden">
                <!-- Header -->
                <div class="text-center">
                        {{-- @include('partials._logo') --}}
                    <h1 class="h2 font-w700 mt-10 mb-15">{{ __('Access the system') }}</h1>
                </div>
                <!-- END Header -->
                <!-- Sign In Form -->
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="block block-themed block-rounded block-shadow">
                        <div class="block-header bg-gd-dusk">
                            <h3 class="block-title">{{ __('Please enter your information') }}</h3>
                        </div>
                        <div class="block-content">
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="email">{{ __('E-Mail Address') }}</label>
                                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                        @if ($errors->has('email'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label for="password">{{ __('Password') }}</label>
                                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-sm-6 d-sm-flex align-items-center push">
                                    <div class="custom-control custom-checkbox mr-auto ml-0 mb-0">
                                        <input type="checkbox" class="custom-control-input" id="login-remember-me" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                        <label class="custom-control-label" for="login-remember-me">{{ __('Remember Me') }}</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-sm-right push">
                                    <button type="submit" class="btn btn-alt-primary">
                                        <i class="si si-login mr-10"></i> {{ __('Login') }}
                                    </button>
                                </div>                                
                            </div>
                        </div>
                        <div class="block-content bg-body-light">
                            <div class="form-group text-center">
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="{{ route('register') }}">
                                    <i class="fa fa-plus mr-5"></i> {{ __('Create an account') }}
                                </a>
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="{{ route('password.request') }}">
                                    <i class="fa fa-warning mr-5"></i> {{ __('Forgot Your Password?') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END Sign In Form -->
            </div>
        </div>
    </div>
</div>
@endsection
