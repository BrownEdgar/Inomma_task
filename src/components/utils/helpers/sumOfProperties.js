import _ from 'lodash'

const sumOfProperties = (data, property) => {
  const result = _.sumBy(data, (o) => Number(o[property]));
  return result || 0
}
export default sumOfProperties