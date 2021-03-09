import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'


window.onload = async() =>{
    const heights = [150,160,170];
    const weights = [40,50,60];

    tfvis.render.scatterplot(
        { name :'身高体重训练数据'},
        { values:heights.map((x,i) =>({x,y:weights[i]}))},
        { xAxisDomain:[140,180],yAxisDomain:[30,70]}
    );

    // 数据归一化 减去150 除以20
    const inputs = tf.tensor(heights).sub(150).div(20)
    inputs.print()
    const labels = tf.tensor(weights).sub(40).div(20)
    labels.print()
    
    // 连续模型
    const model = tf.sequential();
    // 全连接层
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    // 均方误差，优化器：随机梯度下降（SGD）
    model.compile({
        loss: tf.losses.meanSquaredError,
        optimizer: tf.train.sgd(0.1)
    })
    // 模型训练，及可视化训练过程
    await model.fit(inputs,labels,{
        batchSize:3,
        epochs:200,
        callbacks:tfvis.show.fitCallbacks(
            {name:'训练过程'},
            ['loss']
        )
    });

    // 统计预测
    const output = model.predict(tf.tensor([180]).sub(150).div(20));

    console.log(`如果身高为180cm,预测体重为${output.mul(20).add(40).dataSync()[0]}kg`)

}