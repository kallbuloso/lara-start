<template>
    <div :class="defineCol">
        <div :class="defineTheme">
            <div v-if="title" :class="'block-header '+ defineCor">
                <h3 class="block-title">{{title}}</h3>
                <div class="block-options">                    
                    <slot name="options"></slot>
                </div>
            </div>
            <div class="block-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['css','col','title'],
        computed: {
            defineArray: function() {
                var array = ['default', 'primary', 'primary-light', 'primary-dark', 'primary-darker', 'success', 'info', 'warning', 
                'danger', 'gray', 'muted', 'gray-darker', 'black', 'elegance', 'elegance-light', 'elegance-dark', 
                'elegance-darker', 'pulse', 'pulse-light', 'pulse-dark', 'pulse-darker', 'flat', 'flat-light', 
                'flat-dark', 'flat-darker', 'corporate', 'corporate-light', 'corporate-dark', 'corporate-darker', 
                'earth', 'earth-light', 'earth-dark', 'earth-darker', 'gd-aqua', 'gd-cherry', 'gd-dusk', 'gd-emerald', 
                'gd-lake', 'gd-leaf', 'gd-sea', 'gd-sun'];
                return array;
            },
            defineidx: function(){
                var indices = [];
                var array = this.defineArray;
                var elemento = this.css;
                return array.indexOf(elemento);
            },
            defineCor: function(){
                return this.defineidx <= 0 ? "" : 'bg-' + this.css;
            },
            defineCol: function(){
                return "col-md-"+(this.col || "12");
            },
            defineTheme: function() {
                if (this.defineCor == "bg-" + this.css) {
                    return "block block-themed block-rounded";
                } else {                    
                    return "block block-rounded";
                }
            },
        },
    }
</script>
// -> cores disponíveis
// bg-primary-light
// bg-primary-dark
// bg-primary-darker
// bg-success
// bg-info
// bg-warning
// bg-danger
// bg-gray
// bg-muted
// bg-gray-darker
// bg-black
// bg-elegance
// bg-elegance-light
// bg-elegance-dark
// bg-elegance-darker
// bg-pulse
// bg-pulse-light
// bg-pulse-dark
// bg-pulse-darker
// bg-flat
// bg-flat-light
// bg-flat-dark
// bg-flat-darker
// bg-corporate
// bg-corporate-light
// bg-corporate-dark
// bg-corporate-darker
// bg-earth
// bg-earth-light
// bg-earth-dark
// bg-earth-darker
// bg-gd-aqua
// bg-gd-cherry
// bg-gd-dusk
// bg-gd-emerald
// bg-gd-lake
// bg-gd-leaf
// bg-gd-sea
// bg-gd-sun