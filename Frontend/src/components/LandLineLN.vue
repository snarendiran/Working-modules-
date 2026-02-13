<template>
    <div class="MainDivflexrow">
        <input type="text"  class="Flextxt" :value="modelValue" maxlength="12" v-bind="$attrs"  @input="onInput" 
         :placeholder="$attrs.placeholder || 'Enter LandLineNo'"/>
    </div>
</template>

<script>
    export default {
        name: "LandlineLNInput",
        props: {
            modelValue: {
                type: String,
                default: "",
            },
        },
        emits: ["update:modelValue"],
        methods: {
            onInput(e) {
                let value = e.target.value.replace(/[^0-9]/g, "");

                if (value.length > 12) value = value.slice(0, 12);

                e.target.value = value;

                this.$emit("update:modelValue", value);
            },
        },
    };
</script>

