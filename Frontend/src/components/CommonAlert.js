export default {
    data() {
      return {
        showAlert: false,
        alertMessage: "",
        alertFocusRef: null,
        
        showConfirm: false,
        confirmMessage: "",
        confirmAction: null
      }
    },
    methods: {
      showAlertMask(message, focusRef = null) {
        this.alertMessage = message;
        this.alertFocusRef = focusRef;
        this.showAlert = true;
      },
  
      closeAlert() {
        this.showAlert = false;
        if (this.alertFocusRef) {
          this.$nextTick(() => {
            this.alertFocusRef.focus();
          });
        }
      },
  
      askConfirm(message, action) {
        this.confirmMessage = message;
        this.confirmAction = action;
        this.showConfirm = true;
      },
  
      onConfirmOk() {
        this.showConfirm = false;
        if (this.confirmAction) {
          this.confirmAction();
        }
      },
  
      onConfirmCancel() {
        this.showConfirm = false;
        this.confirmAction = null;
      }
    }
  }