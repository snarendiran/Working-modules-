<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel" for="UANInput">UAN No</label>

        <div class="input-wrapper">
            <input type="text" id="UANInput" class="Flextxt" :class="{ 'input-error': errorMessage }" v-bind="$attrs"
                :placeholder="$attrs.placeholder || 'Enter UAN'" :value="modelValue" maxlength="12" inputmode="numeric"
                @input="onInput" @blur="onBlur" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UanInputELY",
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
                let value = e.target.value.replace(/[^0-9]/g, "").slice(0, 12);

                e.target.value = value;
                this.errorMessage = "";
                this.$emit("update:modelValue", value);
            },

            onBlur() {
                const val = this.modelValue;
                const invalidMsg = "Enter valid UAN Number";

                if (!val || val.length !== 12) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                this.errorMessage = "";
            }
        }
    };
</script>

<style scoped>
    .MainDivflexrow {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin-bottom: 16px;
    }

    .Flexlabel {
        min-width: 140px;
        padding-top: 8px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
    }

    .Flextxt {
        width: 250px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .input-error {
        border-color: #f44336;
    }

    .error-message {
        margin-top: 4px;
        font-size: 12px;
        color: #f44336;
        text-align: left;
    }
</style>