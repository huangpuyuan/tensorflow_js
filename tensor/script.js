import * as tf from "@tensorflow/tfjs"

// const t0 = tf.tensor([1,2]);
// t0.print();
// console.log(t0);

// const t1 = tf.tensor([[1,2],[3,4]]);
// t1.print();
// console.log(t1);

// const t2 = tf.tensor([[1],[3]]);
// t2.print();
// console.log(t2);

// const t3 = tf.tensor([[[1]]]);
// t3.print();
// console.log(t3);


//传统for循环  与 tensor

const input = [1, 2, 3, 4];
const w = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]]
const output = [0, 0, 0, 0]

for (let i = 0; i < w.length; i++) {
    for (let j = 0; j < input.length; j++) {
        output[i] += input[j] * w[i][j]
    }
}

console.log(output);

tf.tensor(w).dot(tf.tensor(input)).print();


//线性回归 与 可视化




