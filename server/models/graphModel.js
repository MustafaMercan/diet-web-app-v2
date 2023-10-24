const mongoose = require('mongoose');

const graphSchema = new mongoose.Schema({
    title: {
        text: {
            type: String,
            default: "Title Name"
        },
        left: {
            type: String,
            default: 'center'
        },
    },
    xAxis: {
        type: {
            type: String,
            defualt: 'category',
        },
        data: {
            type: Array,
            default: []
        },
        name: {
            type: String,
            default: "X axis"
        }
    },
    yAxis: {
        type: {
            type: String,
            default: "value",
        },
        name: {
            type: String,
            dafault: "Y Axis"
        }
    },
    series: {
        type: Array,
        default: [{
            type: 'line',
            smooth: true,
            data: []
        }]
    },
    userID:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

const graphModel = mongoose.model('graphs', graphSchema);
module.exports = graphModel;
