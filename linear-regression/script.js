import * as tfjs from '@tensorflow/tfjs-vis'

window.onload = () =>{

    const xs =[1,2,3,4];
    const ys =[1,3,5,7];

    
    tfjs.render.scatterplot(
        {name:'线性回归项目集'},
        {values:xs.map((x,i)=>({x,y:ys[i]}))},
        {xAxisDomain:[0,5],yAxisDomain:[0,8]}
    );









};