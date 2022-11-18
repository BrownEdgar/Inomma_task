import sumOfProperties from './sumOfProperties';

const selectRandomProduct = (data, count = 0) => {
  if (data.length <= count) return data;
  const dataCopy = [...data]
  const resultArr = []

  return foo(resultArr, dataCopy, count)
}

function foo(targetArr, dataCopy, count) {

  if (count <= 0) return targetArr
  const sumOfWeight = sumOfProperties(dataCopy, 'weight')
  let rand = Math.floor(Math.random() * sumOfWeight);
  let i = 0;
  for (let s = +dataCopy[0].weight; s <= rand; s += +dataCopy[i].weight) {
    i++;
  }
  targetArr.push(dataCopy[i])
  dataCopy.splice(i, 1)
  return foo(targetArr, dataCopy, count - 1)
}

export default selectRandomProduct