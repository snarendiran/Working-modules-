<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Email ID</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
              v-bind="$attrs"  maxlength="50" @input="onInput" @blur="onBlur" :placeholder="$attrs.placeholder || 'Enter Email'"/>

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmailInputELY',
        props: {
            modelValue: String,
        },
        emits: ['update:modelValue'],

        data() {
            return {
                errorMessage: "",
            };
        },

        methods: {
            onInput(e) {
                const val = e.target.value.replace(/[^a-zA-Z0-9._+\-@]/g, '');
                e.target.value = val;
                this.errorMessage = "";
                this.$emit('update:modelValue', val);
            },

            onBlur() {
                const val = this.modelValue;
                const invalidMsg = "Enter valid Email ID";

                if (!val) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                const emailRegex = /^[A-Za-z0-9+_]+@[A-Za-z0-9_]+\.[A-Za-z]{2,}$/;
  
                if (!emailRegex.test(val)) {
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