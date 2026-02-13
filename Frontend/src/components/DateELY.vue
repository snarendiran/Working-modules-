<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Date</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
                maxlength="10" v-bind="$attrs" :placeholder="$attrs.placeholder || 'DD/MM/YYYY'" @input="onInput"
                @blur="onBlur" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DateInputLY",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: ["update:modelValue"],

        data() {
            return {
                errorMessage: ""
            };
        },

        methods: {
            onInput(e) {
                let val = e.target.value.replace(/[^0-9]/g, "");

                // auto slash logic
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

                val = val.slice(0, 10);

                e.target.value = val;
                this.errorMessage = "";
                this.$emit("update:modelValue", val);
            },

            onBlur() {
                const val = this.modelValue;
                const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

                if (!val) {
                    this.errorMessage = "Date is required";
                    return;
                }

                if (!regex.test(val)) {
                    this.errorMessage = "Enter valid date (DD/MM/YYYY)";
                    return;
                }

                this.errorMessage = "";
            }
        }
    };
</script>