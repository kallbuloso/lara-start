<template>
    <span>
        <span v-if="item">            
            <button v-on:click="preencheFormulario()" v-if="!type || (type != 'button' && type != 'link')" :class="'btn btn-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</button>
            <button v-on:click="preencheFormulario()" v-if="type == 'button'" :class="'btn btn-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</button>
            <a v-on:click="preencheFormulario()" v-if="type == 'link'" href="#" :class="'text-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</a>
        </span>
        <span v-if="!item">            
            <button v-if="!type || (type != 'button' && type != 'link')" :class="'btn btn-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</button>
            <button v-if="type == 'button'" :class="'btn btn-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</button>
            <a v-if="type == 'link'" href="#" :class="'text-'+ defineCor" :data-toggle="dataModal" :data-target="'#' + name">
                <i v-if="this.icon" :class="defineIcon"></i> {{title}}</a>
        </span>
    </span>
</template>

<script>
    export default {
        props: ['type', 'name', 'css', 'title', 'icon', 'modal','item'],
        data() {
            return {
                dataModal: this.modal == 'true' ? 'modal' : ''
            }
        },
        methods: {
            preencheFormulario:function(){
                this.$store.commit('setItem',this.item);
            }
        },
        computed: {
            defineArray: function() {
                var array = ['default', 'secondary', 'primary', 'success', 'info', 'warning', 'danger', 
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
                return this.defineidx <= 0 ? "default" : this.css;
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