<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" v-bind="$attrs" maxlength="30" @input="onInput" :placeholder="$attrs.placeholder || 'Enter Email'" />
    </div>
</template>

<script>
    export default {
        name: 'EmailLNInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                const val = e.target.value.replace(/[^a-zA-Z0-9._+\-@]/g, '');
                e.target.value = val;
                this.$emit('update:modelValue', val);
            }
        }
    };
</script>
