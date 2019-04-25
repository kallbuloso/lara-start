<template>
    <nav class="breadcrumb bg-white push">
        <!-- No v-for, depois da vírgula adicionei o "url" para determinar o filtro da busca -->
        <!-- O originalera o seguinte...
        <a class="breadcrumb-item" href="javascript:void(0)">Home</a>
        <a class="breadcrumb-item" href="javascript:void(0)">Library</a>
        <a class="breadcrumb-item" href="javascript:void(0)">Data</a>
        <span class="breadcrumb-item active">Bootstrap</span>
        E para o VueJs seria...
        <a v-for='(item,key) in itens' :key="key" v-if="item.url"  v-bind:class="defineClass" v-bind:href="item.url">{{item.titulo}} ></a>
        <span v-for='(item,key) in itens' :key="key" v-if="!item.url" v-bind:class="defineClass">{{item.titulo}}</span> -->
        <a v-for='(item, url) in itens' :key='url'  v-bind:class="'breadcrumb-item' + defineClass" v-bind:href="item.url">{{item.titulo}}</a>
    </nav>
</template>

<script>
    export default {
        props: ['itens'],
        computed: {
            defineClass: function(){
                return this.url ? "active" : "";
            }
        },
    }
</script>
