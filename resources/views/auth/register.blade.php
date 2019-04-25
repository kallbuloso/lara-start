@extends('layouts.app')

@section('content')
<div class="bg-body-dark bg-pattern" style="background-image: url('/media/various/bg-pattern-inverse.png');">
    <div class="row mx-0 justify-content-center">
        <div class="hero-static col-lg-7 col-xl-5">
            <div class="content content-full overflow-hidden">
                <!-- Header -->
                <div class="text-center">
                    <h1 class="h4 font-w700 mt-10 mb-15">{{ __('Create an account') }}</h1>
                    <h2 class="h5 font-w400 text-muted mb-20">{{ __('We are happy to have you with us!') }}</h2>
                </div>
                <!-- END Header -->
                <!-- Sign In Form -->
                @formOpen('class'=>'form-horizontal','route'=>['register'],'onsubmit'=>'return true;')
                    <div class="block block-themed block-rounded block-shadow">
                        <div class="block-header bg-gd-emerald">
                            <h3 class="block-title">{{ __('Please add your data') }}</h3>
                        </div>
                        <div class="block-content">
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="name">{{ __('Name') }}</label>
                                    <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name"
                                    placeholder="Seu nome ou nome da empresa" value="{{ old('name') }}" autofocus>
                                    @if ($errors->has('name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="email">{{ __('E-Mail Address') }}</label>        
                                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}"
                                    placeholder="Insira um e-mail válido" name="email" >
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="password">{{ __('Password') }}</label>        
                                    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" value="{{ old('password') }}"
                                    placeholder="******" name="password" >
                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="login-password">{{ __('Confirm Password') }}</label> 
                                    <input id="password-confirm" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" 
                                    placeholder="******" name="password_confirmation" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-7 push">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input {{ $errors->has('signup-terms') ? ' is-invalid' : '' }}" id="signup-terms" name="signup-terms" checked {{ old('signup-terms') ? 'checked' : '' }}>
                                        <label class="custom-control-label" for="signup-terms">{{ __('I accept the terms of use') }}</label>
                                        @if ($errors->has('signup-terms'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('signup-terms') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-sm-5 text-sm-right push">
                                    <button type="submit" class="btn btn-alt-success">
                                        <i class="fa fa-plus mr-10"></i> {{ __('Create account') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="block-content bg-body-light">
                            <div class="form-group text-center">
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="#" data-toggle="modal" data-target="#modal-terms">
                                    <i class="fa fa-book text-muted mr-5"></i> {{ __('Read the terms of use') }}
                                </a>
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="{{ route('login') }}">
                                    <i class="fa fa-user text-muted mr-5"></i> {{ __('I have a registration') }}
                                </a>
                            </div>
                        </div>
                    </div>
                @formClose()
                <!-- END Sign Up Form -->
            </div>
        </div>
    </div>
</div>
@endsection
