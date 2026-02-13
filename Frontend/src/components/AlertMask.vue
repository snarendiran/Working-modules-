<template>
    <div v-if="visible" class="mask">
        <div class="wholemask">

            <!-- Close Icon -->
            <span class="close-icon" @click="close">✕</span>

            <!-- Message Only -->
            <div class="maskcontent">
                {{ message }}
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        name: "AlertMask",
        props: {
            message: {
                type: String,
                default: ""
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        emits: ["close"],
        methods: {
            close() {
                this.$emit("close");
            }
        }
    };
</script>

<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(1px);
        background-color: rgba(0, 0, 0, 0.15);
        z-index: 9999;
    }

    .wholemask {
        width: 22%;
        position: absolute;
        top: 25%;
        left: 39%;
        background-color: #fff;
        text-align: center;
        padding: 30px 20px 25px;
        border-radius: 10px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        animation: zoomInCenter 0.3s ease-out forwards;
        position: relative;
    }

    @keyframes zoomInCenter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .maskcontent {
        font-size: 16px;
        font-weight: 500;
        color: #223347;
    }

 
    .close-icon {
        position: absolute;
        top: 10px;
        right: 12px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        color: #000000;
        transition: color 0.2s ease;
    }

    .close-icon:hover {
        color: #000;
    }
</style>