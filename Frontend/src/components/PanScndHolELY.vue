<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Second Holder PAN No</label>

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
        name: "ScndHolPanInputELY",
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
     display: grid;
     grid-template-columns: 220px 260px;
     align-items: start;
     column-gap: 12px;
     row-gap: 4px;
     margin-bottom: 18px;
 }
 
 .Flexlabel {
     text-align: left;
     white-space: nowrap;
     padding-top: 8px;
 }
 
 .input-wrapper {
     display: contents; 
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
     grid-column: 2;   
     font-size: 12px;
     color: #f44336;
     text-align:left;
 }
</style>