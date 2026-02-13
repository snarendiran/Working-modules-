<template>
    <div class="MainDivflexrow">
    <input type="text" class="Flextxt" :value="modelValue" maxlength="10" v-bind="$attrs" @input="onInput" :placeholder="$attrs.placeholder || 'Enter PAN'"  />
</div>
</template>

<script>
    export default {
        name: 'PanLNInput',
        props: { modelValue: String },
        emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                let v = e.target.value.toUpperCase();
                let r = '';

                for (let i = 0; i < v.length && i < 10; i++) {
                    const c = v[i];
                    if (i < 5 && /[A-Z]/.test(c)) r += c;
                    else if (i >= 5 && i < 9 && /[0-9]/.test(c)) r += c;
                    else if (i === 9 && /[A-Z]/.test(c)) r += c;
                }

                e.target.value = r;
                this.$emit('update:modelValue', r);
            }
        }
    };
</script>

