@extends('layouts.app')

@section('content')
<div class="bg-body-dark bg-pattern" style="background-image: url('/media/various/bg-pattern-inverse.png');">
    <div class="row mx-0 justify-content-center">
        <div class="hero-static col-lg-7 col-xl-5">
            <div class="content content-full overflow-hidden">
                <!-- Header -->
                <div class="text-center">
                    <h1 class="h4 font-w700 mt-10 mb-15">{{ __('Não se preocupe, nós podemos ajudar') }}</h1>
                    <h2 class="h5 font-w400 text-muted mb-20">{{ __('Você receberá um e-mail com um link de recuperação.') }}</h2>
                </div>
                @if (session('status'))
                    <div class="px-10 py-10">
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    </div>
                @endif
                <!-- END Header -->

                <!-- Forgot Password Form -->
                @formOpen('class'=>'form-horizontal','route'=>'password.email')
                    <div class="block block-themed block-rounded block-shadow">
                        <div class="block-header bg-gd-dusk">
                            <h3 class="block-title">{{ __('Por favor, digite seu e-mail') }}</h3>
                        </div>
                        <div class="block-content">
                            <div class="form-group row">
                                <div class="col-12">
                                    <label for="email">{{ __('Seu email') }}</label>
                                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" 
                                    placeholder="Digite seu email aqui" value="{{ old('email') }}" autofocus>
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="text-center">                                                
                                    <button type="submit" class="btn btn-sm btn-hero btn-alt-success">
                                        <i class="fa fa-asterisk mr-10"></i> {{ __('Reset Password') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="block-content bg-body-light">
                            <div class="form-group text-center">
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="{{ route('login') }}">
                                    <i class="fa fa-user text-muted mr-5"></i> {{ __('I remembered') }}
                                </a>
                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="{{ route('register') }}">
                                    <i class="fa fa-plus mr-5"></i> {{ __('Create an account') }}
                                </a>
                            </div>
                        </div>
                    </div>
                @formClose()
                <!-- END Sign In Form -->
            </div>
        </div>
    </div>
</div>
@endsection
