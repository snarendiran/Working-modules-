<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Driving License</label>
        <input type="text" class="Flextxt" :value="modelValue" v-bind="$attrs" maxlength="15" @input="onInput"
        :placeholder="$attrs.placeholder || 'Enter DrivingLicense'" />
    </div>
</template>

<script>
    export default {
    name: "DrivingLicenseInput",
    props: { modelValue: String },
    emits: ["update:modelValue"],
    methods: {
        onInput(e) {
            let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); 
            
            let result = val.slice(0,2).replace(/[^A-Z]/g,'')      // First 2 letters
                        + val.slice(2,4).replace(/[^0-9]/g,'')     // Next 2 digits
                        + val.slice(4,15).replace(/[^0-9]/g,'');   // Remaining digits up to 15
            
            if (e.target.value !== result) {
                e.target.value = result;
            }

            this.$emit("update:modelValue", result);
        }
    }
};
</script>
