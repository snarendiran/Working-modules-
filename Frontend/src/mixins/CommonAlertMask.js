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
                setTimeout(() => {

                    // Case 1: Component has focus method
                    if (typeof this.alertFocusRef.focus === "function") {
                        this.alertFocusRef.focus();
                    }

                    // Case 2: Raw input element
                    else if (this.alertFocusRef.$el) {
                        const input = this.alertFocusRef.$el.querySelector("input");
                        if (input) input.focus();
                    }

                }, 100);
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