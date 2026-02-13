<template>
  <div class="demo-wrapper">
    <div class="demo-card">
      <h2 class="demo-title">Entry Screen</h2>
      <NameInputELY v-model="Name_id" ref="inputRef" />
      <MobileInputELY v-model="Mobileno_id" ref="mobileRef" />
      <EmailInputELY v-model="Email_id" ref="emailRef" />
      <PanInputELY v-model="Pan_id" ref="panRef" />
      <AadhaarInputELY v-model="Aadhar_id" ref="aadharRef" />


      <button class="submit-btn" @click="handleSubmit">Save</button>

      <p v-if="message" class="response-msg">{{ message }}</p>

    </div>
  </div>
  <AlertMask :visible="showAlert" :message="alertMessage" @close="closeAlert" />
  <ConfirmMask :visible="showConfirm" :message="confirmMessage" @ok="onConfirmOk" @cancel="onConfirmCancel" />
</template>

<script>

  import api from "@/services/api";
  import CommonAlertMask from "@/mixins/CommonAlertMask";
  import NameInputELY from '../../components/NameELY.vue';
  import MobileInputELY from '../../components/MobileELY.vue';
  import EmailInputELY from '../../components/EmailELY.vue';
  import PanInputELY from '../../components/PanELY.vue';
  import AadhaarInputELY from '../../components/AadharELY.vue';
  import AlertMask from '../../components/AlertMask.vue'
  import ConfirmMask from '../../components/AlertConfirm.vue'


  export default {
    components: {
      NameInputELY, MobileInputELY, EmailInputELY, PanInputELY, AadhaarInputELY, AlertMask,
      ConfirmMask
    },
    mixins: [CommonAlertMask],
    data() {
      return {
        Name_id: '', Mobileno_id: '', Email_id: '', Pan_id: '', Aadhar_id: '', message: '',

      };
    },
    methods: {
      handleSubmit() {

        if (!this.Name_id) {
          this.showAlertMask("Please enter Name", this.$refs.inputRef);
          return;
        }

        if (!this.Mobileno_id) {
          this.showAlertMask("Please enter Mobile Number", this.$refs.mobileRef);
          return;
        }

        if (!this.Email_id) {
          this.showAlertMask("Please enter Email", this.$refs.emailRef);
          return;
        }

        if (!this.Pan_id) {
          this.showAlertMask("Please enter PAN Number", this.$refs.panRef);
          return;
        }

        if (!this.Aadhar_id) {
          this.showAlertMask("Please enter Aadhaar Number", this.$refs.aadharRef);
          return;
        }

        //CONFIRM BEFORE SAVE
        this.askConfirm("Do you want to save this record?", async () => {

          try {

            const payload = {
              Opt: 1,
              Name: this.Name_id,
              MobileNo: this.Mobileno_id,
              Email: this.Email_id,
              Panno: this.Pan_id,
              AaadharNo: this.Aadhar_id
            };
            const response = await api.post("/Demopage/samplereport", payload);
            const parsed = JSON.parse(response.data.Payload);
            const result = parsed[0];

            console.log(result);

            if (result.MSG === "OK") {
              this.showAlertMask("Saved Successfully");
                this.clearForm();
            } else {
              this.showAlertMask(result.MSG || "Something went wrong");
              this.clearForm();
            }

          } catch (error) {
            console.error(error);
            this.showAlertMask("Server Error");
          }

        });

      },

      clearForm() {
        this.Name_id = "";
        this.Mobileno_id = "";
        this.Email_id = "";
        this.Pan_id = "";
        this.Aadhar_id = "";
      }
    }
  };
</script>

<style scoped>
  .demo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 98vh;
    font-family: calibri;
    background: linear-gradient(135deg, #ffffff, #c3cfe22e);
  }

  .demo-card {
    width: min(500px, 90%);
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 40px 30px;
    border: none;
  }

  .demo-title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .submit-btn {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
  }

  .submit-btn:hover {
    background-color: #45a049;
  }

  .response-msg {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    color: #2c3e50;
  }
</style>
