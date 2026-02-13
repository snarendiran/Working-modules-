<template>
  <div class="MainDivflexrow">
    <input type="text" class="Flextxt" :value="modelValue" @input="onInput" @blur="onBlur" maxlength="12" inputmode="numeric" 
     v-bind="$attrs" :placeholder="$attrs.placeholder || 'Enter AadhaarNo'" />
  </div>
</template>

<script>
  export default {
    name: 'AadhaarLNInput',
    props: { modelValue: String },
    emits: ['update:modelValue'],
  
    methods: {
      onInput(e) {
        let val = e.target.value.replace(/[^0-9]/g, '').slice(0, 12);
        e.target.value = val;
        this.$emit('update:modelValue', val);
      },
  
      onBlur() {
        const val = this.modelValue;
  
        if (val?.length === 12 && val.split('').every(d => d === val[0])) {
          this.$emit('update:modelValue', '');
        }
      }
    }
  };
  </script>