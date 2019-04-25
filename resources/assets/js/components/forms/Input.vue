<template>
    <div :class="'col-md-'+iCol+''">
        <label :for="iName">{{iLabel}}</label>
        <input :type="iType" :name="iName" :class="iCss" :value="iValue" :placeholder="iPlaceholder" v-html="iAttributes">
    </div>
</template>

<script>
    export default {
        props: ['type','label','name','col','css','value','placeholder','attributes'],
        data() {
            return {
                iType: this.type || "text",
                iLabel: this.label || "Label",
                iName: this.name || "Nome",
                iCol: this.col || "",
                iCss: this.css || 'form-control',
                iPlaceholder: this.placeholder || "",
                iValue: this.value || "",
                iAttributes: this.attributes || ""
            }
        }
    }
</script>