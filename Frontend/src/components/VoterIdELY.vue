<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Voter ID</label>

        <div class="input-wrapper">
            <input type="text" class="Flextxt" :class="{ 'input-error': errorMessage }" :value="modelValue"
            :placeholder="$attrs.placeholder || 'Enter VoterId'"  v-bind="$attrs"  maxlength="10" @input="onInput" @blur="onBlur" />

            <span v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VoterIdInputELY",
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
                let raw = e.target.value.toUpperCase();
                let result = "";

                for (let i = 0; i < raw.length && i < 10; i++) {
                    const ch = raw[i];

                    // First 3 characters → alphabets only
                    if (i < 3 && /[A-Z]/.test(ch)) {
                        result += ch;
                    }
                    // Next 7 characters → numbers only
                    else if (i >= 3 && /[0-9]/.test(ch)) {
                        result += ch;
                    }
                }

                e.target.value = result;
                this.errorMessage = "";
                this.$emit("update:modelValue", result);
            },

            onBlur(e) {
                const val = e.target.value;
                const invalidMsg = "Enter valid Voter ID";

                if (!/^[A-Z]{3}[0-9]{7}$/.test(val)) {
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