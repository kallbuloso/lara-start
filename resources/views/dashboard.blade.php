@extends('layouts.admin')
@section('title_header', 'Titulo')
@section('description', 'Página Welcome')

@section('content')
<div class="content">    
    <h2 class="content-heading">Simple</h2>
    <div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">Blank <small>Get Started</small></h3>
            <div class="block-options">
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"></button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="pinned_toggle">
                    <i class="si si-pin"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                    <i class="si si-refresh"></i>
                </button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                <button type="button" class="btn-block-option" data-toggle="block-option" data-action="close">
                    <i class="si si-close"></i>
                </button>
            </div>
        </div>
        <div class="block-content">
            <p>Create your own awesome project!</p>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    
@endpush

@push('stylesheet')
    
@endpush