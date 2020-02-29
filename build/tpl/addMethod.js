var arstr = require('../arstr');

module.exports = function(methodName) {
  let capMethodName = arstr.upFirst(methodName);
  return `import getMixOrPatchIn from './private/getMixOrPatchIn';
import get${capMethodName} from './get${capMethodName}';
//console.log('get${capMethodName}',get${capMethodName}.notChainable);
export default function add${capMethodName}(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('${methodName}', get${capMethodName}(_), !get${capMethodName}.notChainable);
}
`;
};