<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" v-bind="$attrs" maxlength="11" @input="onInput"  :placeholder="$attrs.placeholder || 'Enter IFSC'" />
    </div>
</template>

<script>
    export default {
        name: 'IFSCLNInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 11);
                e.target.value = val;
                this.$emit('update:modelValue', val);
            }
        }
    };
</script>
