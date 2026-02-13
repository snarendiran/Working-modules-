<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel" for="DPIdDDL">DP ID</label>

        <div class="input-wrapper">
            <select id="DPIdDDL" name="DPIdDDL" class="Flexddl" :class="{ 'input-error': errorMessage }"
              v-bind="$attrs" :placeholder="$attrs.placeholder || 'Enter DPId'"  :value="modelValue" @change="onChange" @blur="onBlur">
                <option value="0">--select--</option>
                <option v-for="dp in dpOptions" :key="dp" :value="dp">{{ dp }}</option>
            </select>

            <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DpIdDropdownELY",
        props: {
            modelValue: {
                type: String,
                default: "0",
            },
        },
        emits: ["update:modelValue"],
        data() {
            return {
                dpOptions: ["IN300441", "IN301313", "IN300757"],
                errorMessage: "",
            };
        },
        methods: {
            onChange(e) {
                const val = e.target.value;
                this.errorMessage = ""; 
                this.$emit("update:modelValue", val);
            },
            onBlur() {
                if (this.modelValue === "0" || !this.modelValue) {
                    this.errorMessage = "Please select a DP ID";
                } else {
                    this.errorMessage = "";
                }
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

    .Flexddl {
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