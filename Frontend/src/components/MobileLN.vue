<template>
    <div class="MainDivflexrow">
        <input type="text" class="Flextxt" :value="modelValue" maxlength="10" v-bind="$attrs" @input="onInput" @blur="onBlur"
          :placeholder="$attrs.placeholder || 'Enter MobileNo'" />
    </div>
</template>

<script>
    export default {
        name: 'MobileLNInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                let val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);

                if (val && !/^[6-9]/.test(val)) {
                    val = '';
                }

                e.target.value = val;
                this.$emit('update:modelValue', val);
            },
            onBlur(e) {
                const val = e.target.value;
                if (val.length === 10 && /^(\d)\1{9}$/.test(val)) {
                    e.target.value = '';
                    this.$emit('update:modelValue', '');
                }
            }
        }
    };
</script>