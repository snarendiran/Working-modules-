<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Client ID</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
              v-bind="$attrs"  maxlength="8" inputmode="numeric" @input="onInput" @blur="onBlur"  :placeholder="$attrs.placeholder || 'Enter ClientId'" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClientIdInputELY",
        props: {
            modelValue: String,
        },
        emits: ["update:modelValue"],

        data() {
            return {
                errorMessage: "",
            };
        },

        methods: {
            // onInput(e) {
            //     const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 8);
            //     e.target.value = val;
            //     this.errorMessage = "";
            //     this.$emit("update:modelValue", val);
            // },
            onInput(e) {
                let val = e.target.value.replace(/[^0-9]/g, "");
                if (val.startsWith("0")) {
                    val = val.slice(1);
                }
                val = val.slice(0, 8);

                e.target.value = val;
                this.errorMessage = "";
                this.$emit("update:modelValue", val);
             },  


            onBlur() {
                const val = this.modelValue;
                const invalidMsg = "Enter valid Client ID";

                if (!val || val.length !== 8) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                this.errorMessage = "";
            },

        },
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