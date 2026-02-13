<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Email ID</label>
        <input type="text" class="Flextxt" v-bind="$attrs" :value="modelValue" maxlength="30" @input="onInput"  :placeholder="$attrs.placeholder || 'Enter Email'"/>
    </div>
</template>

<script>
    export default {
        name: 'EmailInput',
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
