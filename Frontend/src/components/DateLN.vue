<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" maxlength="10" :placeholder="$attrs.placeholder || 'DD/MM/YYYY'"  v-bind="$attrs"
            @input="onInput" />
    </div>
</template>

<script>
    export default {
        name: "DateInputLN",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: ["update:modelValue"],

        methods: {
            onInput(e) {
                let val = e.target.value;

                // remove everything except numbers
                val = val.replace(/[^0-9]/g, "");

                // auto add slashes
                if (val.length > 2 && val.length <= 4) {
                    val = val.slice(0, 2) + "/" + val.slice(2);
                } else if (val.length > 4) {
                    val =
                        val.slice(0, 2) +
                        "/" +
                        val.slice(2, 4) +
                        "/" +
                        val.slice(4, 8);
                }

                // max length safeguard
                val = val.slice(0, 10);

                e.target.value = val;
                this.$emit("update:modelValue", val);
            }
        }
    };
</script>