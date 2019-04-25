<template>
    <div class="modal fade" :id="nome" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static" :aria-labelledby="nome" aria-hidden="true">
        <div :class="'modal-dialog '+ defineSize + ' modal-dialog-popout'" role="document">
            <div class="modal-content">
                <slot name="header"></slot>
                <div class="block block-themed block-transparent mb-0">
                    <div v-if="title" :class="'block-header bg-'+ defineCor">
                        <h3 class="block-title">{{title}}</h3>
                    </div>
                    <div class="block-content">
                        <slot></slot>
                    </div>
                </div>
                <footer> 
                    <div class="modal-footer">
                        <slot name="button-footer"></slot>
                    </div>                   
                </footer>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['nome','css', 'title', 'size'],
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
                return this.defineidx <= 0 ? "" : this.css;
            },
            defineSize: function(){
                switch (this.size) {
                    case 'small':
                        return "modal-sm";
                        break;
                    case 'large':
                        return "modal-lg";
                        break;                
                    case 'center':
                        return "modal-dialog-centered";
                        break;                
                    default:
                        return "";
                        break;
                }
            },
        },
    }
</script>