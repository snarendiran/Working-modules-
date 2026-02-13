<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel" :for="inputId">Third Folder AadhaarNo</label>

        <div class="input-wrapper">
            <input :id="inputId" type="text" class="Flextxt" :class="{ 'input-error': errorMessage }"
                :value="displayValue" maxlength="12" inputmode="numeric" v-bind="$attrs"
                :placeholder="$attrs.placeholder || 'Enter Aadhaar No'" @keydown.prevent="onKeydown" @blur="onBlur" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThrdFolAadhaarInputELY",
        props: {
            modelValue: String,
            inputId: {
                type: String,
                default: "aadhaarNo",
            },
        },
        emits: ["update:modelValue"],

        data() {
            return {
                realValue: "",
                errorMessage: "",
            };
        },

        computed: {
            displayValue() {
                const len = this.realValue.length;

                if (len <= 8) {
                    return "X".repeat(len);
                }

                return "XXXXXXXX" + this.realValue.slice(8);
            },
        },

        watch: {
            modelValue: {
                immediate: true,
                handler(val) {
                    this.realValue = val || "";
                },
            },
        },

        methods: {
            onKeydown(e) {
                if (e.key === "Backspace") {
                    this.realValue = this.realValue.slice(0, -1);
                    this.$emit("update:modelValue", this.realValue);
                    this.errorMessage = "";
                    return;
                }

                if (!/^\d$/.test(e.key)) return;

                if (this.realValue.length >= 12) return;

                this.realValue += e.key;
                this.errorMessage = "";
                this.$emit("update:modelValue", this.realValue);
            },

            onBlur() {
                const val = this.realValue;
                const invalidMsg = "Enter valid Aadhaar number";

                if (!val || val.length !== 12) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                // Same digit check
                if (val.split("").every(d => d === val[0])) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                // Verhoeff check
                if (!this.verhoeffCheck(val)) {
                    this.errorMessage = invalidMsg;
                    return;
                }

                this.errorMessage = "";
            },

            verhoeffCheck(str) {
                const d = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
                    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
                    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
                    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
                    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
                    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
                    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
                    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
                    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
                ];

                const p = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
                    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
                    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
                    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
                    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
                    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
                    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
                ];

                let c = 0;
                const reversed = str.split("").reverse();

                for (let i = 0; i < reversed.length; i++) {
                    c = d[c][p[i % 8][parseInt(reversed[i], 10)]];
                }

                return c === 0;
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