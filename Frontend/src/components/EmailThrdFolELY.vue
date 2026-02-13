<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Third Folder Email ID</label>

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
    name: 'ThrdFolEmailInputELY',
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
            // allow only valid email characters
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

            // solid email regex (simple & reliable)
            const emailRegex = /^[a-zA-Z0-9._+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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