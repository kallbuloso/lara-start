<template>
    <box-panel :title="tituloTab" :col="boxCol" :css="boxCor">
        <template slot="options">
                <a v-if="criar && !modal" class="btn btn-primary" v-bind:href="criar">
                    <i class="fa fa-plus"></i>        
                    <span>Criar Novo</span>
                </a>
                <modal-button v-if="criar && modal" type="button" modal="true" :name="modal" title="Criar Novo" icon="fa fa-check" css="danger" ></modal-button>
        </template>
        <span>            
            <input type="search" class="form-control" v-model="buscar" placeholder="Buscar..."><p></p>
        </span>
        <table class="table table-hover table-vcenter">
            <thead>
                <tr>
                    <th v-for="(titulo, index) in titulos" :key="index" style="cursor:pointer" v-on:click="ordenaColuna(index)">{{ titulo }}</th>
                    <th v-if="detalhe || editar || deletar" class="text-center"  style="width: 100px;">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in lista" :key="index">
                    <td v-for="i in item" :key="i">{{i}}</td>

                    <td v-if="detalhe || editar || deletar" class="text-center">                                    
                        <form :id="index" v-if="deletar && token" :action="deletar" method="post"> 
                            <input type="hidden" name="_method" value="DELETE">
                            <input type="hidden" name="_token" :value="token">
                            <div class="btn-group">
                                <a v-if="detalhe && !modal" class="btn btn-sm btn-secondary" :href="detalhe" >
                                    <i class="fa fa-eye"></i>
                                </a>
                                <a v-if="detalhe && modal" v-bind:item="item" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#detalhe" :href="detalhe" >
                                    <i class="fa fa-eye"></i>
                                </a>
                                
                                <a v-if="editar && !modal" class="btn btn-sm btn-secondary" :href="editar">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <a v-if="editar && modal" v-bind:item="item" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#editar" :href="editar">
                                    <i class="fa fa-pencil"></i>
                                </a>

                                <a v-if="deletar" class="btn btn-sm btn-secondary"
                                    v-on:click="executaForm(index)" :href="deletar">
                                    <span class="fa fa-times text-danger"></span>
                                </a>
                            </div>
                        </form>
                        <div v-if="!token" class="btn-group">
                            <a v-if="detalhe && !modal" class="btn btn-sm btn-secondary" :href="detalhe" >
                                <i class="fa fa-eye"></i>
                            </a>
                            <a v-if="detalhe" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#detalhe" :href="detalhe" >
                                <i class="fa fa-eye"></i>
                            </a>

                            <a v-if="editar && !modal" class="btn btn-sm btn-secondary" :href="editar">
                                <i class="fa fa-pencil"></i>
                            </a>
                            <a v-if="editar" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#editar" :href="editar">
                                <i class="fa fa-pencil"></i>
                            </a>

                            <a v-if="deletar" class="btn btn-sm btn-secondary"
                                v-on:click="executaForm(index)" :href="deletar">
                                <span class="fa fa-times text-danger"></span>
                            </a>
                        </div>
                        <div v-if="token && !deletar" class="btn-group">
                            <a v-if="detalhe && !modal" class="btn btn-sm btn-secondary" :href="detalhe" >
                                <i class="fa fa-eye"></i>
                            </a>
                            <a v-if="detalhe" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#detalhe" :href="detalhe" >
                                <i class="fa fa-eye"></i>
                            </a>

                            <a v-if="editar && !modal" class="btn btn-sm btn-secondary" :href="editar">
                                <i class="fa fa-pencil"></i>
                            </a>
                            <a v-if="editar" class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#editar" :href="editar">
                                <i class="fa fa-pencil"></i>
                            </a>

                            <a v-if="deletar" class="btn btn-sm btn-secondary"
                                v-on:click="executaForm(index)" :href="deletar">
                                <span class="fa fa-times text-danger"></span>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </box-panel>
</template>

<script>
    export default {
        props: ['boxtitle','boxcollor','boxcolun','titulos','itens','ordem', 'ordemcol','criar', 'detalhe', 'editar', 'deletar', 'token', 'modal'],
        data: function() {
            return {
                buscar:'',
                ordemAux: this.ordem || "asc",
                ordemAuxCol: this.ordemCol || 0,
                tituloTab: this.boxtitle || " ",
                boxCor: this.boxcollor || 'default',
                boxCol: this.boxcolun || "12"
            }
        },
        methods: {
            executaForm: function(index) {
                document.getElementById(index).submit();
            },
            ordenaColuna: function(coluna) {
                this.ordemAuxCol = coluna;
                if (this.ordemAux.toLowerCase() == "asc") {
                    this.ordemAux = "desc";
                } else {
                    this.ordemAux = "asc";
                }
            }
        },
        computed: {
            lista: function() {

                // this.$store.commit('setItens',{opa:"OK"});

                let ordem = this.ordemAux;
                let ordemCol = this.ordemAuxCol;
                ordem = ordem.toLowerCase();
                ordemCol = parseInt(ordemCol);

                if(ordem == "asc"){
                    this.itens.sort(function(a,b){
                    if (Object.values(a)[ordemCol] > Object.values(b)[ordemCol] ) { return 1;}
                    if (Object.values(a)[ordemCol] < Object.values(b)[ordemCol] ) { return -1;}
                    return 0;
                    });
                }else{
                    this.itens.sort(function(a,b){
                    if (Object.values(a)[ordemCol] < Object.values(b)[ordemCol] ) { return 1;}
                    if (Object.values(a)[ordemCol] > Object.values(b)[ordemCol] ) { return -1;}
                    return 0;
                    });
                }
                if (this.buscar) {                    
                    return this.itens.filter(res => {
                        res = Object.values(res);
                        for (let k = 0; k < res.length; k++) {
                            if ((res[k] + "").toLowerCase().indexOf(this.buscar.toLowerCase()) >= 0 ){
                                return true;
                            }                      
                        }
                        return false;
                    });
                }
                return this.itens;
            },
        },
    }
</script>