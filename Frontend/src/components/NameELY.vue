<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Name</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
                @input="onInput" @blur="onBlur" v-bind="$attrs" :placeholder="$attrs.placeholder || 'Enter Name'" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NameInputELY",
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
                let val = e.target.value.toUpperCase();
                val = val.replace(/[^A-Z ]/g, "");

                e.target.value = val;
                this.errorMessage = "";
                this.$emit("update:modelValue", val);
            },

            onBlur() {
                const val = this.modelValue;

                if (!val || !val.trim()) {
                    this.errorMessage = "Enter Valid Name";
                    return;
                }

                if (val.trim().length < 3) {
                    this.errorMessage = "Enter Valid Name";
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