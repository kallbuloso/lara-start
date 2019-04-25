<template>
    <div :class="'col-md-'+iCol+''">
        <label for="example-select">Select</label>
        <!-- <select :class="iCss" id="example-select" :name="iName" v-html="iAttributes">
            <option disabled value="">Escolha um item</option>
            <option value="0">Option #1</option>
            <option value="1">Option #2</option>
            <option value="2">Option #3</option>
        </select> -->
        <!-- <b-form-select class="form-group">

        </b-form-select> -->
        <b-form-select v-model="selected" :options="options" class="form-group">
        <!-- This slot appears above the options from 'options' prop -->
            <template slot="first">
                <option :value="null" disabled>-- Please select an option --</option>
            </template>
            <!-- These options will appear after the ones from 'options' prop -->
            <option value="C">Option C</option> <option value="D">Option D</option>
        </b-form-select>

        <div class="form-group">Selected: <strong>{{ selected.text }}</strong></div>
    </div>
    <!-- <div :class="'col-md-'+iCol+''">
        <label :for="iName">{{iLabel}}</label>
        <input :type="iType" :name="iName" :class="iCss" :value="iValue" :placeholder="iPlaceholder" v-html="iAttributes">
    </div> -->
</template>

<script>
    export default {
        props: ['type','label','name','col','css','options','placeholder','attributes'],
        computed: {
            defineArray: function() {
                return "";
            },
        },
        // props: [],
        data() {
            return {
                iType: this.type || "text",
                iLabel: this.label || "Label",
                iName: this.name || "Nome",
                iCol: this.col || "6",
                iCss: this.css || 'form-control',
                iPlaceholder: this.placeholder || "please select one",
                iOptions: this.options || [{}],
                iAttributes: this.attributes || "",
                selected: null,
                options: [
                { value: 'A', text: 'Option A (from options prop)' },
                { value: 'B', text: 'Option B (from options prop)' }
                ]
            }
        }
    }
</script>