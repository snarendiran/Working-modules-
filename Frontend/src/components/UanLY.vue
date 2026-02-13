<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel" for="UANInput">UAN No</label>
        <input type="text" id="UANInput" class="Flextxt" :value="modelValue" v-bind="$attrs" maxlength="12"
          :placeholder="$attrs.placeholder || 'UAN'"  @input="onInput" />
    </div>
</template>

<script>
    export default {
        name: "UanInput",
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