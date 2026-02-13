<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">PAN No</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
             v-bind="$attrs"   maxlength="10" @input="onInput" @blur="onBlur" :placeholder="$attrs.placeholder || 'Enter PAN'" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PanInputELY",
        props: {
            modelValue: String
        },
        emits: ["update:modelValue"],

        data() {
            return {
                errorMessage: ""
            };
        },

        methods: {
            onInput(e) {
                let v = e.target.value.toUpperCase();
                let r = "";

                for (let i = 0; i < v.length && i < 10; i++) {
                    const c = v[i];
                    if (i < 5 && /[A-Z]/.test(c)) r += c;
                    else if (i >= 5 && i < 9 && /[0-9]/.test(c)) r += c;
                    else if (i === 9 && /[A-Z]/.test(c)) r += c;
                }

                e.target.value = r;
                this.errorMessage = "";
                this.$emit("update:modelValue", r);
            },

            onBlur() {
                const val = this.modelValue;
                const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
                const invalidMsg = "Enter valid PAN Number";

                if (!val || !panRegex.test(val)) {
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