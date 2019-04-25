<template>
    <div class="col-6 col-md-4 col-xl-2">
        <a :class="'block block-rounded block-bordered block-link-pop text-center ' + defineCss" :href="link">
            <div class="block-content">
                <p :class="'font-size-h1 ' + defineCollor">
                    <strong  data-toggle="countTo" :data-speed="defineTime" :data-to="count">0</strong>
                </p>
                <p :class="'font-w600  ' + defineCollor">
                    <i v-if="icon" :class="icon +' text-muted mr-5 ' + defineCollor"></i> 
                    {{title}}
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['title','icon','link','count','time','css'],
    data() {
        return {
            cssOptions: [
                'default','warning','primary','success','gd-sun','corporate','flat','elegance',
                'info','gd-dusk','pulse','gd-lake','black-op-75'
            ],
            dIcon:'',
        }
    },
    computed: {
        defineTime: function(){
            switch (this.time) {
                case this.time:
                    var tm = this.time * 1000;
                    return tm;
                    break;            
                default:                    
                    return 1500;
                    break;
            }
            // return this.time ? this.time : '1500';
        },
        getCss: function(){
            var array = this.cssOptions;
            var elemento = this.css;
            return array.indexOf(elemento);
        },
        defineCss: function(){
            return this.getCss <= 0 ? null : 'bg-' + this.css;
        },
        defineCollor: function() {
            switch (this.defineCss) {
                case 'bg-warning':
                    return "text-black";
                    break;
                case null:
                    return "text-black";
                    break;
                default:
                    return "text-white-op";
                    break;
            }           
        },
    },
};
</script>