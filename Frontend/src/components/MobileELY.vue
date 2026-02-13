<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Mobile No</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
             v-bind="$attrs"   maxlength="10" inputmode="numeric" @input="onInput" @blur="onBlur" :placeholder="$attrs.placeholder || 'Enter MobileNo'" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileInputELY",
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
            onInput(e) {
                let val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);

                if (val && !/^[6-9]/.test(val)) {
                    val = "";
                }

                e.target.value = val;
                this.errorMessage = "";
                this.$emit("update:modelValue", val);
            },

            onBlur(e) {
                const val = e.target.value;
                const invalidMsg = "Enter valid mobile number";

                if (!val || val.length !== 10) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                if (/^(\d)\1{9}$/.test(val)) {
                    this.errorMessage = invalidMsg;
                    e.target.value = "";
                    this.$emit("update:modelValue", "");
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