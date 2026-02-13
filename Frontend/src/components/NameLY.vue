<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel">Name</label>
        <input type="text" class="Flextxt" :value="modelValue" @input="onInput" @blur="onBlur" v-bind="$attrs" :placeholder="$attrs.placeholder || 'Enter Name'" />
    </div>
</template>

<script>
    export default {
        name: "NameInputLY",
        props: {
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: ["update:modelValue"],

        methods: {
            onInput(e) {
                let val = e.target.value.toUpperCase(); 
                val = val.replace(/[^A-Z ]/g, "");     

                e.target.value = val;
                this.$emit("update:modelValue", val);
            }
        }
    };
</script>