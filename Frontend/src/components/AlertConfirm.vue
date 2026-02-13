<template>
    <div v-if="visible" class="mask">
        <div class="wholemask">
            <!-- Message -->
            <div class="maskcontent">
                {{ message }}
            </div>

            <!-- Buttons -->
            <div class="btnn-row">
             <button class="btnn ok" @click="onOk">OK</button>
                <button class="btnn cancel" @click="onCancel">Cancel</button>
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmMask",
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            message: {
                type: String,
                default: "Are you sure?"
            }
        },
        emits: ["ok", "cancel"],
        methods: {
            onOk() {
                this.$emit("ok");
            },
            onCancel() {
                this.$emit("cancel");
            }
        }
    };
</script>

<style scoped>
    .mask {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wholemask {
        width: 360px;
        max-width: 90%;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .maskcontent {
        padding: 30px;
        font-size: 16px;
        color: #333;
        text-align: center;
        line-height: 1.5;
        border-bottom: 1px solid #eee;
    }

    .btnn-row {
        display: flex;
        height: 50px;
    }

    .btnn {
        flex: 1;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        transition: background 0.2s;
    }

    .btnn.cancel {
        color: #666;
        border-right: 1px solid #eee;
    }

    .btnn.cancel:hover {
        background: #f5f5f5;
    }

    .btnn.ok {
        color: #1890ff;
    }

    .btnn.ok:hover {
        background: #f0f8ff;
    }

    .btnn:active {
        background: #e8e8e8;
    }
</style>