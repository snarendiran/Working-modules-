<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" v-bind="$attrs" maxlength="12" @input="onInput" 
        @blur="onBlur" :placeholder="$attrs.placeholder || 'Enter PRAN'" />
    </div>
</template>

<script>
    export default {
        name: "PranLNInput",
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