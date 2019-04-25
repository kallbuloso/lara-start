@extends('layouts.app')

@section('content')
<div class="hero bg-white">
    <div class="hero-inner">
        <div class="content content-full">
            <div class="py-30 text-center">
                <div class="display-3 text-warning">
                    @if (session('resent'))
                        <h1 class="h2 font-w700 mt-30 mb-10">{{ __('E-mail Confirmation Resend!') }}</h1>
                        <h2 class="h3 font-w400 text-muted mb-50">{{ __('A verification email has been forwarded to:') }} {{ Auth::user()->email }}</h2>
                    </div>                                
                    @else
                        <h1 class="h2 font-w700 mt-30 mb-10">{{ __('Registration successfully Complete!') }}</h1>
                        <h3 class="h4 font-w400 text-muted mb-10">{{ __('Before proceeding, please check your email for a verification link.') }}</h3>
                        <h3 class="h4 font-w400 text-muted mb-30">{{ __('If you did not receive the email, click the button below to resubmit') }}.</h3>
                    </div>
                    <a class="btn btn-hero btn-rounded btn-alt-secondary" href="{{ route('verification.resend') }}">
                        <i class="fa fa-plus mr-10"></i> {{ __('E-mail Confirmation Resend!') }}
                    </a>
                    @endif
            </div>
        </div>
    </div>
</div>
@endsection
