<template>
    <div class="m-card" :style="width?{width:width+'px'}:{}">
        <div class="m-card-img">
            <img :src="imgSrc" alt="img" width="100%" :style="imgHeight?{height: imgHeight+'px'}:{}">
        </div>
        <div class="m-card-summary" v-if="summary">{{summary}}</div>
        <div v-else class="m-card-summary">
            <slot name="summary"></slot>
        </div>
        <div class="m-card-footer">
            <slot name="footer" :foot="foot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        width:{//卡片宽度
            type:Number,
            default: 0
        },
        imgSrc: {//卡片图片地址
            type: String,
            default:''
        },
        imgHeight: {//卡片图片的高度
            type:Number,
            default:0
        },
        summary:{//卡片的概要
            type:String,
            default:''
        },
        foot:{//底部
            type:String,
            default:'我是底部文字'
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>