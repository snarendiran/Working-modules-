<template>
  <div class="MainDivflexrow">
    <label class="Flexlabel">Aadhaar No</label>

    <input type="text" class="Flextxt" :value="displayValue" maxlength="12" inputmode="numeric" v-bind="$attrs"
      :placeholder="$attrs.placeholder || 'Enter Aadhaar No'" @keydown.prevent="onKeydown" />
  </div>
</template>

<script>
  export default {
    name: "AadhaarInput",
    props: {
      modelValue: {
        type: String,
        default: ""
      }
    },
    emits: ["update:modelValue"],

    data() {
      return {
        realValue: ""
      };
    },

    computed: {
      displayValue() {
        const len = this.realValue.length;

        if (len <= 8) {
          // first 8 digits are ALWAYS masked
          return "X".repeat(len);
        }

        // after 8 digits → show only last 4
        return "XXXXXXXX" + this.realValue.slice(8);
      }
    },

    watch: {
      modelValue: {
        immediate: true,
        handler(val) {
          this.realValue = val || "";
        }
      }
    },

    methods: {
      onKeydown(e) {
        // backspace
        if (e.key === "Backspace") {
          this.realValue = this.realValue.slice(0, -1);
          this.$emit("update:modelValue", this.realValue);
          return;
        }

        // only digits
        if (!/^\d$/.test(e.key)) return;

        if (this.realValue.length >= 12) return;

        this.realValue += e.key;
        this.$emit("update:modelValue", this.realValue);
      }
    }
  };
</script>