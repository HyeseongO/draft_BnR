/*
 *
 * ✅작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */

const _ = {};

/**
 *
 * "identity"
 * 
 * (identity 함수는 수학 용어입니다.)
 *
 * https://lodash.com/docs/4.17.15#identity
 *
 */
_.identity = function (value) {
  // 넘겨 받은 첫번째 인수를 리턴한다.
  return value;

};

/**
 *
 * "each"
 *
 * https://lodash.com/docs/4.17.15#forEach
 *
 * 자바스크립트 배열의 forEach 메소드와 거의 동일한 함수입니다.
 *
 */
_.each = function (array, iterator) {
  // 배열과 반복자를 인수로 받는다.
  // 배열을 반복한다.
  // (value, index,collection) 를 콜백으로 반환한다.
  
  for (let i = 0; i < array.length; i++) {
    iterator(array[i], i, array);
  }
};

/**
 *
 * [함수 내용을 수정하지 마세요.] "indexOf"
 *
 * https://lodash.com/docs/4.17.15#indexOf
 *
 * 자바스크립트 배열의 indexOf 메소드와 거의 동일한 함수입니다.
 *
 */
_.indexOf = function (array, target) {

  let result = -1;

  _.each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

/**
 *
 * "slice"
 *
 * https://lodash.com/docs/4.17.15#slice
 *
 * 자바스크립트 배열의 slice 메소드와 거의 동일한 함수입니다.
 *
 */
_.slice = function (array, start = 0, end = array.length) {
  // start와 end 의 위치를 조정한다.
  // 반복문을 돌면서 요소를 얕은 복사한다.
  // 새로만든 배열을 반환한다.

  start = start < 0 ? array.length + start : start;
  end = end < 0 ? array.length + end : end;

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
};

/**
 *
 * "map"
 *
 * https://lodash.com/docs/4.17.15#map
 *
 * 자바스크립트 배열의 map 메소드와 거의 동일한 함수입니다.
 *
 */
_.map = function (array, iterator) {
  // array 배열의 반복문을 실행한다.
  // iterator 에 적절한 인수를 넘겨 콜백함수를 실행한다.
  // 새로운 요소가 만들어진걸 새로운 배열에 담는다.
  // 새로운 배열을 리턴한다.

  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(iterator(array[i], i, array));
  }

  return result;
};

/**
 *
 * "reduce"
 *
 * https://lodash.com/docs/4.17.15#reduce
 *
 * 자바스크립트 배열의 reduce 메소드와 거의 동일한 함수입니다.
 *
 * 아래 한글 MDN 문서에서 매개변수, 반환값, 작동방식 부분을 반드시 꼼꼼히 읽고 이해한 후, 도전하세요.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 */
/**
   * initialValue를 제공하지 않으면, 
   * reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. 
   * initialValue를 제공하면 인덱스 0에서 시작합니다.
   */
_.reduce = function (array, iterator, accumulator) {
  // 배열을 순회한다.
  // accumulator(initValue)가 주어지는지 확인한다.
  // 만약 주어졌다면 배열의 0부터 인덱스 시작, 아니면 배열의 1부터 배열을 순회한다.
  // 누산된 값을 계속 기록한다.
  // 마지막 누산된 값을 리턴한다.

  const start = (accumulator !== undefined) ? 0 : 1;
  accumulator = (accumulator !== undefined) ? accumulator : array[0];

  for (let i = start; i < array.length; i++) {
    accumulator = iterator(accumulator, array[i]);
  }

  return accumulator;
};

/**
 *
 * [함수 내용을 수정하지 마세요] "includes"
 *
 * 자바스크립트 배열의 includes 메소드와 거의 동일한 함수입니다.
 *
 * `reduce`가 성공적으로 완성된다면, `includes` 또한 통과되어야 합니다.
 * 만약 `includes` 테스트가 실패한다면, `reduce`에 작성한 로직이 잘못 되었을 수 있습니다.
 *
 */
_.includes = function (array, target) {
  // reduce를 초깃값을 false로 실행한다.
  // 타겟을 찾을때까지 reduce를 반복한다.
  // 만약 타겟을 찾는다면 true를 리턴한다.

  return _.reduce(
    array,
    function (wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    },
    false
  );
};

/**
 *
 * "flatten"
 *
 * https://lodash.com/docs/4.17.15#flatten
 *
 *
 */
_.flatten = function (nestedArray) {
  // 새로운 배열을 선언한다. 
  // 재귀에 받은 배열을 인수로 전달한다.
  // 재귀 안에서 반복문을 실행한다.
  // 만약 요소가 배열이라면 재귀를 다시 호출한다.
  // 재귀가 종료되면 배열을 반환한다.
  
  const result = [];

  function recur(tempArr){
    for(let i = 0; i < tempArr.length; i++){
        if(!Array.isArray(tempArr[i])){
          result.push(tempArr[i]);
        }
        recur(tempArr[i]);
    }
  }
  recur(nestedArray);

  return result;
};

/**
 *
 * "extend"
 *
 * This method is like _.assign except that 
 * it iterates over own and inherited source properties.
 * https://lodash.com/docs/4.17.15#assignIn
 *
 *
 */
_.extend = function (obj, ...sources) {
  // 받은 sources 들을 반복문을 실행합니다.
  // sources 안에서 하나씩 요소인 객체를 꺼내 또 반복합니다.
  // 객체 내의 속성을, 기존에 받은 obj에 속성으로 얕은 복사합니다.
  // 반복문이 종료되면 원래 받았던 obj 객체를 반환합니다.

  //1차 Recommand X!! -> 프로토타입까지 가져와 버린다!
  // for(let i = 0; i < sources.length; i++){
  //   for(let j in sources[i]){ 
  //     obj[j] = sources[i][j];
  //   }
  // }

  // return obj;

  //2차 Recommand O
  _.each(sources,(tempObj) =>{
    //for ... in 을 쓰면 객체의 프로토타입까지 반환한다!!!
    for(const [key, value] of Object.entries(tempObj)){
      obj[key] = value;
    }
  })

  return obj;
};

/**
 *
 * "defaults"
 *
 * https://lodash.com/docs/4.17.15#defaults
 *
 *
 */
_.defaults = function (obj, ...sources) {
   // 받은 sources 들을 반복문을 실행합니다.
  // sources 안에서 하나씩 요소인 객체를 꺼내 또 반복합니다.
  // 객체에 프로퍼티에 접근했을 때 undefined 인지 확인한다.
  // 객체 내의 속성을, 기존에 받은 obj에 속성으로 얕은 복사합니다.
  // 반복문이 종료되면 원래 받았던 obj 객체를 반환합니다.

  _.each(sources,(tempObj) =>{
    for(const [key, value] of Object.entries(tempObj)){
      if(obj[key] === undefined){
        obj[key] = value;
      }
    }
  })

  return obj;
};

/**
 *
 * "create"
 * 
 * Creates an object that inherits from the prototype object
 * https://lodash.com/docs/4.17.15#create
 *
 *
 */
_.create = function (prototype) {
  
  //새로운 객체에 인수로 넘겨받은 prototype을 세팅합니다.
  return Object.setPrototypeOf({}, prototype);
};

/**
 *
 * "forOwn"
 *
 * Iterates over own enumerable string keyed properties of an object 
 * and invokes iteratee for each property.
 * 
 * (value, key, object)
 * 
 * https://lodash.com/docs/4.17.15#forOwn
 *
 *
 */
_.forOwn = function (obj, iterator) {
  // obj를 반복한다.
  // 자신의 프로퍼티만 iterator 콜백함수에 넘겨서 실행한다.
  // 반복문을 종료한다.
  for(const key of Object.keys(obj)){
    iterator(obj[key],key);
  }
};

/**
 *
 * "throttle"
 *
 * Creates a throttled function that only invokes func
 * at most once per every wait milliseconds. 
 * 
 * https://lodash.com/docs/4.17.15#throttle
 *
 *
 */
_.throttle = function (func, wait) {
  // 플래그를 선언한다.
  // 플래그를 true로 바꿔준다.
  // setTimeout을 통해 내가 원하는 함수의 실행을 지연시킨다.
  // 인수로 전달받은 시간 wait만큼 시간이 지나면, 다시 플래그를 false로 전환한다.

  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      func(); // 콜백함수
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  };
}

/**
 *
 * "memoize"
 * 
 * Creates a function that memoizes the result of func. 
 * If resolver is provided, it determines the cache key for 
 * storing the result based on the arguments provided to the memoized function.
 *
 * https://lodash.com/docs/4.17.15#memoize
 *
 *
 */
_.memoize = function (func) {
  const cache = {};
  // 1. 원래의 func와 동일한 작동을 해야한다.
  // 2. 동일한 인수가 들어오면, 이미 이전에 계산한 값을 반환한다.
  // 3. 처음 맞이한 인수가 들어오면, func 함수에 전달해 func 함수를 실행시킨다.

  // 익명함수를 리턴한다.
  return function (...args) { // ...args 는 나머지 매개변수 [a, b]
    // 이미 한번 들어온 인수인지 아닌지 구별하기 위한 식별자
    const key = JSON.stringify(args);
    // 이미 한번 들어온 인수였는지, 아닌지를 체크
    if(cache[key]){
      // 이미 이전에 계산한 값을 반환
      return cache[key];
    } else { // 처음 들어오는 인수
      const result = func(...args);
      cache[key] = result;
      return result;
    }
    return ; //...args 는 스프레드 연산자 [1, 2] -> (1, 2)
  };



  // 캐시를 할 저장소인 map을 선언한다.
  // 실행가능한 함수로 만들고, 인수를 받는다.
  // 만약 memoize가 실행이 된다면 넘겨받은 인수가 key로 캐싱되어 있는지 확인한다.
  // 캐싱되어 있지 않다면, map에 func실행한 결과를 저장한다.
  const map = {};

  return(...args) =>{ //이렇게 함수를 리턴하는 함수를 고차함수라고 한다!
    const key = JSON.stringify(args);
    if(map[key]){
      return map[key];
    }
    const val = func(...args); // func은 콜백함수!!
    return map[key] = val;
  }
};

/**
 *
 * "curry"
 *
 * https://lodash.com/docs/4.17.15#curry
 *
 *
 */
_.curry = function (func, ...args) {
  // func 함수를 인수로 전달받는다.
  // 만약 func 매개변수의 길이가 선언한 매개변수의 길이와 같다면 func을 실행시키며 리턴한다.
  // 익명함수를 리턴한다.
  // 다음 인수를 받아서, 자기자신을 호출한다.
  // 재귀를 반복한다.

  if (func.length === args.length) {
    return func(...args); // func은 콜백함수!!
  }
  return (...nextArgs) => {
    return _.curry(func, ...args, ...nextArgs);
  }

  // console.log(11111);
  // console.log("args",args);
  // if (func.length === args.length) {
  //   console.log("call!!!");
  //   return func(...args);
  // }
  // console.log(22222);
  // return (...nextArgs) => {
  //   console.log("nextArgs",nextArgs);
  //   console.log(33333);
  //   return _.curry(func, ...args, ...nextArgs);
  // }

};

/**
 *
 * "compose"
 *
 * 테스트 코드의 내용을 참고하세요.
 *
 */
_.compose = function (...funcList) {
  // 테스트 코드를 확인한다.
  // 실행결과를 우측 -> 좌측으로 누적하여 전달한다. : reduce 활용!!!!
  // 최종 결과를 리턴한다.
  //iterator : (accumulator, currentValue) : (누적값, array안의 function)

  return (val)=>{
    // console.log("funList",funcList);
    return _.reduce(funcList.reverse(), (acc, cur) => (cur(acc)), val);
  } 
};

_.cloneDeep = function (input) {
  //원시타입의 경우 그대로 리턴
  if (typeof input !== 'object') {
    return input;
  }
  if (Array.isArray(input)) {
    //배열일 경우
    const result = [];
    for (const key in input) {
      result.push(_.cloneDeep(input[key]));
    }
    return result;
  }
  //객체일 경우
  const result = {};
  for (const [key, value] of Object.entries(input)) {
    result[key] = _.cloneDeep(value);
  }
  return result;
};

  // if (Array.isArray(input)) {
  //    //배열일 경우
  //   result = [];
  //   for (const key in input) {
  //     // if (typeof object[key] !== "object") {
  //     //   result.push(object[key]);
  //     // } else {
  //       result.push(_.cloneDeep(input[key]));
  //     // }
  //   }
  // } else {
  //   //객체일 경우
  //   result = {};
  //   for (const [key, value] of Object.entries(input)) {
  //     // if (typeof value !== "object") {
  //     //   result[key] = value;
  //     // } else {
  //       result[key] = _.cloneDeep(value);
  //     // }
  //   }
  // }

  // if (Array.isArray(object)) {
  //  
    
  // }
  // else {
 
  // }

export default _;