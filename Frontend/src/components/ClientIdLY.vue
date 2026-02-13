<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Client ID</label>
        <input type="text" class="Flextxt" :value="modelValue" maxlength="8" inputmode="numeric" @input="onInput" v-bind="$attrs" :placeholder="$attrs.placeholder || 'Enter ClientId'" />
    </div>
</template>

<script>
    export default {
        name: 'ClientIdInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
               let val = e.target.value.replace(/[^0-9]/g, "");

                // prevent starting with 0
                if (val.length === 1 && val[0] === "0") {
                    val = "";
                }

                // max 8 digits
                val = val.slice(0, 8);

                e.target.value = val;
                this.$emit("update:modelValue", val);
            }
        }
    };
</script>
