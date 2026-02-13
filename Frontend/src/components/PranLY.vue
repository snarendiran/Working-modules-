<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">PRAN No</label>
        <input type="text" class="Flextxt" v-bind="$attrs"  :placeholder="$attrs.placeholder || 'Enter PRAN'" :value="modelValue" 
         maxlength="12" @input="onInput" @blur="onBlur" />
    </div>
</template>

<script>
    export default {
        name: "PranInput",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: ["update:modelValue"],

        methods: {
            onInput(e) {
                const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 12);
                e.target.value = val; 
                this.$emit("update:modelValue", val);
            }
        }
    };
</script>