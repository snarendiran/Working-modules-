<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Driving License</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
             v-bind="$attrs"  maxlength="15" @input="onInput" @blur="onBlur"  
             :placeholder="$attrs.placeholder || 'Enter DrivingLicense'" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DrivingLicenseELY",
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
                let val = e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");

                let result =
                    val.slice(0, 2).replace(/[^A-Z]/g, "") +   // 2 letters
                    val.slice(2, 4).replace(/[^0-9]/g, "") +  // 2 digits
                    val.slice(4, 15).replace(/[^0-9]/g, "");  // remaining digits

                e.target.value = result;
                this.errorMessage = "";
                this.$emit("update:modelValue", result);
            },

            onBlur() {
                const val = this.modelValue;
                const invalidMsg = "Enter valid Driving License number";

                // must be exactly 15 chars
                if (!val || val.length !== 15) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                // final format validation
                const dlRegex = /^[A-Z]{2}[0-9]{13}$/;
                if (!dlRegex.test(val)) {
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