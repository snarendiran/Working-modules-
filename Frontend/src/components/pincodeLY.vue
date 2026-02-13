<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Pincode</label>
        <input type="text" class="Flextxt" v-bind="$attrs" :value="modelValue" maxlength="6" inputmode="numeric" @input="onInput" 
        :placeholder="$attrs.placeholder || 'Enter Pincode'" />
    </div>
</template>

<script>
    export default {
        name: 'PincodeInput',
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
