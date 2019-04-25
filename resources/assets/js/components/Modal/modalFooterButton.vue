<template>
    <button :type="defineType" :class="'btn btn-'+ defineCor" :data-dismiss="dataModal">
        <i v-if="this.icon" :class="defineIcon"></i>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['type','css', 'icon','label', 'modal'],
        data() {
            return {
                dataModal: this.modal == 'true' ? 'modal' : ''
            }
        },
        computed: {
            defineArray: function() {
                var array = ['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 
                'outline-primary', 'outline-secondary', 'outline-success', 'outline-info', 'outline-warning', 'outline-danger',
                'alt-primary', 'alt-secondary', 'alt-success', 'alt-info', 'alt-warning', 'alt-danger'];
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
            defineType: function(){
                return this.type != 'submit' ? "button" : "submit";
            },
            defineIcon: function(){                
                return this.icon;
            },
        },
    }
</script>