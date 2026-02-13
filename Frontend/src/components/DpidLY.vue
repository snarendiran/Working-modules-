<template>
    <div class="MainDivflexrow">
        <label class="Flexlabel" for="DPIdDDL">DP ID</label>
        <select id="DPIdDDL" name="DPIdDDL" class="Flexddl" :value="modelValue" v-bind="$attrs"  :placeholder="$attrs.placeholder || 'Enter DPId'"
            @change="$emit('update:modelValue', $event.target.value)" >
            <option value="0">--select--</option>
            <option v-for="dp in dpOptions" :key="dp" :value="dp">{{ dp }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "DpIdDropdown",
        props: {
            modelValue: {
                type: String,
                default: "0",
            },
        },
        emits: ["update:modelValue"],
        data() {
            return {
                dpOptions: ["IN300441", "IN301313", "IN300757"],
            };
        },
    };
</script>