<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" maxlength="6" v-bind="$attrs" inputmode="numeric" @input="onInput" 
         :placeholder="$attrs.placeholder || 'Enter Pincode'" />
    </div>
</template>

<script>
    export default {
        name: 'PincodeLNInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                let val = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);

                if (val.startsWith('0')) {
                    val = val.replace(/^0+/, '');
                }

                e.target.value = val;
                this.$emit('update:modelValue', val);
            }
        }
    };
</script>
