<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Second Holder MobileNo</label>

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
        name: "ScndHolMobileInputELY",
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