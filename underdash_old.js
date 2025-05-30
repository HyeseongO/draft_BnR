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
 *
 */
_.identity = function (value) {
  //This method returns the first argument it receives.
  return value;
};

/**
 
 * "each"
 *
 * https://lodash.com/docs/4.17.15#forEach
 *
 * Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
 *
 * 자바스크립트 배열의 forEach 메소드와 거의 동일한 함수입니다.
 *
 */
_.each = function (array, iterator) {
  // 1. 넘겨야 하는 인자가 어떤게 있는지 확인한다.
  // 2. (value, idx, 원본 배열)을 콜백 함수에 인수로 넘겨야 한다.
  // 3. array 배열을 반복문을 돌린다.
  // 3-1 만약 idx가 숫자가 맞다면  iterator 콜백 함수에 (value, idx, 원본 배열)를 인수로 넘긴다.
  for (let i = 0; i < array.length; i++) {
    iterator(array[i], i, array);
  }
  // for (const idx in array) {
  //   if(!isNaN(idx)){
  //     iterator(array[idx], parseInt(idx), array);
  //   }
  // }
};

/**
 *
 * [함수 내용을 수정하지 마세요.] "indexOf"
 *
 * https://lodash.com/docs/4.17.15#indexOf
 *
 * Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
 *
 * 자바스크립트 배열의 indexOf 메소드와 거의 동일한 함수입니다.
 *
 */
_.indexOf = function (array, target) {
  // 1. 처음 인덱스를 -1로 설정한다. (인덱스 범위 밖에 어떤 값)
  // 2. .each 함수를 호출한다.
  // 3. 만약 .each 반복문을 수행해 나오는 item과 내가 찾고자 하는 target이 같고, result 가 -1과 같다면 그 인덱스를 result에 담는다.
  // 4. 반복문을 종료한다.
  // 5. result를 리턴한다.

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
 * Creates a slice of array from start up to, but not including, end.
 *
 * 자바스크립트 배열의 slice 메소드와 거의 동일한 함수입니다.
 *
 */
_.slice = function (array, start = 0, end = array.length) {
  // console.log(arguments)
  // 새로운 배열을 만든다.

  // if(Array.isArray(args[0] && args.length === 1)){
  //   return [...args[0]];
  // }

  // const [array, start = 0 ,end = array.length] = args;

  // 시작점과 끝점을 정의 (음수라면 알아서 잘 맞게 처리)
  if (start < 0) {
    start = array.length + start;
  }

  if (end < 0) {
    end = array.length + end;
  }
  // 시작점과 끝점 만큼 자르기
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;

  // if(start  > 0){
  //   const result = [];
  //   for(let i = args[1]; i < args[2]; i++){
  //     result.push(args[0][i]);
  //   }
  //   return result;
  // } else {
  //   const result = [];
  //   for(let i = array.length+start; i < array.length; i++){
  //     result.push(args[0][i]);
  //   }
  //   return result;
  // }

}
_.slice = function (array, start, end) {

  // 새로운 배열을 만든다.
  const newArr = [];
  // 만약 start 와 end 값이 둘 다 undefined라면
  // 받은 배열 array을 반복하면서 요소를 그대로 새로운 배열 newArr에 넣어준다.
  // 반복문이 종료되면 newArray를 리턴한다.

  // 만약 start 와 end 값이 인수로 전달되지 않는다면 원본의 얕은 복사본을 반환한다.
  if (start === undefined && end === undefined) {
    for (const item of array) {
      newArr.push(item);
    }
    return newArr;
  }
  // 만약 start >= 0 , end > 0 , start < end 라면
  // idx 시작을 start로부터, idx가 end 보다 작을때까지
  // 받은 배열 array을 반복하면서 요소를 새로운 배열 newArr에 넣어준다.
  // 반복문이 종료되면 newArray를 리턴한다.

  // 만약 두 번째와 세 번째 인수에 따라, 올바르게 요소가 삭제된 배열을 반환한다.
  if (start >= 0 && end > 0 && start < end) {
    for (let idx = start; idx < end; idx++) {
      newArr.push(array[idx]);
    }
    return newArr;
  }
  // 만약 start < 0 , end 가 undefined 라면
  // idx 시작을 arr.length +start로부터, idx가 arr.length 보다 작을때까지
  // 받은 배열 array을 반복하면서 요소를 새로운 배열 newArr에 넣어준다.
  // 반복문이 종료되면 newArray를 리턴한다.

  // 두 번째 인수가 음수일 경우, 올바르게 요소가 삭제된 배열을 반환한다.
  if (start < 0 && end === undefined) {
    for (let idx = array.length + start; idx < array.length; idx++) {
      newArr.push(array[idx]);
    }
    return newArr;
  }
  // 만약 start > 0 , end < 0 라면
  // idx 시작을 start로부터, idx가 arr.length+end 보다 작을때까지
  // 받은 배열 array을 반복하면서 요소를 새로운 배열 newArr에 넣어준다.
  // 반복문이 종료되면 newArray를 리턴한다.

  // 세 번째 인수가 음수일 경우, 올바르게 요소가 삭제된 배열을 반환한다.
  if (start > 0 && end < 0) {
    for (let idx = start; idx < array.length + end; idx++) {
      newArr.push(array[idx]);
    }
    return newArr;
  }

  return newArr;
};

/**
 *
 * "map"
 *
 * https://lodash.com/docs/4.17.15#map
 *
 * Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).
 *
 * 자바스크립트 배열의 map 메소드와 거의 동일한 함수입니다.
 *
 */
_.map = function (array, iterator) {
  // 새로운 배열을 만든다.
  const newArr = [];

  // 받은 배열을 반복문을 돌린다.
  // 반복문을 돌리며, 콜백함수를 실행한 결과를 newArr에 넣는다.
  // 반복문이 종료된다.
  // newArr를 리턴한다.
  for (let idx = 0; idx < array.length; idx++) {
    newArr.push(iterator(array[idx], idx, array));
  }

  return newArr;

};

/**
 *
 * "reduce"
 *
 * https://lodash.com/docs/4.17.15#reduce
 *
 * 자바스크립트 배열의 reduce 메소드와 거의 동일한 함수입니다.
 *
 * Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).
 *
 *  Returns the accumulated value!!!
 *
 * 아래 한글 MDN 문서에서 매개변수, 반환값, 작동방식 부분을 반드시 꼼꼼히 읽고 이해한 후, 도전하세요.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 */
_.reduce = function (array, iterator, accumulator) {

  let result;
  if (accumulator === undefined) {
    result = array[0];

    for (let idx = 1; idx < array.length; idx++) {
      const returnVal = iterator(result, array[idx]);
      result = returnVal === undefined ? array[idx] : returnVal;
    }
    return result;
  }

  for (let idx = 0; idx < array.length; idx++) {
    const returnVal = iterator(result === undefined ? accumulator : result, array[idx]);
    result = returnVal;
  }

  return result;
};

  // initialValue(=accumulator)를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. initialValue를 제공하면 인덱스 0에서 시작합니다.

  //1. 초깃값이 들어온지 확인한다.
  //2. 초깃값이 들어오지 않았다면
  //2-1. 인덱스를 1부터 반복문을 실행한다.
  //2-1-1. iterator() 호출한 리턴 값을 returnVal 에 담는다.
  //2-1-2. 만약 returnVal undifined 라면 배열의 인덱스에 해당하는 값을 result에 담는다.
  //2-1-3. 만약 returnVal undifined 아니라면 returnVal를 result에 담는다.
  //2-1-4. 반복문이 끝난다.
  //2-1-5. result를 리턴한다.
  //2-2. 초깃값이 들어왔다면
  //2-2-1. 인덱스를 0부터 반복문을 실행한다.
  //2-2-2. 만약 result에 undefined라면 초깃값을 인자로 전달하고, 아니라면 result를 전달한다.
  //2-2-3. 그 결과를 returnVal 담는다.
  //2-2-4. 반복문이 끝난다.
  //2-2-5. result를 리턴한다.

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
 * Flattens array a single level deep.
 *
 * https://lodash.com/docs/4.17.15#flatten
 *
 *
 */
_.flatten = function (nestedArray) {
  //1. 새로운 배열을 선언한다.
  //2. 재귀함수를 선언한다.
  //3. 재귀함수를 호출하면서 초기배열로 nestedArray 인수로 넘긴다.
  //4. 재귀함수는 받은 배열을 반복문을 돌린다.
  //5-1. 만약 받은 배열을 돌다가 해당 요소가 배열이 아니라면 newArr에 그 요소를 넣는다.
  //5-2. 만약 해당 요소가 배열이라면 다시 재귀함수를 현재 요소로 인수로 넘기면서 호출한다.
  //6. 재귀가 종료된다.
  //7. newArr를 리턴한다.

  const newArr = [];

  function recur(tempArr) {
    for (let idx = 0; idx < tempArr.length; idx++) {
      if (!Array.isArray(tempArr[idx])) {
        newArr.push(tempArr[idx]);
      } else {
        recur(tempArr[idx]);
      }
    }
  }

  recur(nestedArray);

  return newArr;
};

/**
 *
 * "extend"
 *
 * This method is like _.assign except that it iterates over own and inherited source properties.
 *
 * https://lodash.com/docs/4.17.15#assignIn
 *
 *
 */
_.extend = function (obj, ...sources) {
  //1. 받은 배열 sources을 for in 반복문을 실행한다.
  //2. 배열의 브라킷 접근법을 통해 해당 obj를 꺼내 tempObj에 할당한다.
  //3. tempObj 를 for in 반복문을 실행한다.
  //4. tempObj 에 있는 key 값을 통해 값을 꺼내어 원본 객체에 할당한다.
  //5. 반복문이 종료된다.
  //6. 원본 obj를 리턴한다.

  for (const idx in sources) {
    const tempObj = sources[idx];
    for (const prop in tempObj) {
      obj[prop] = tempObj[prop];
    }
  }

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
  //1. 받은 배열 sources을 for in 반복문을 실행한다.
  //2. 배열의 브라킷 접근법을 통해 해당 obj를 꺼내 tempObj에 할당한다.
  //3. tempObj 를 for in 반복문을 실행한다.
  //4-1 만약 obj에 prop로 접근했을 때 값이 undefined 라면
  //4-2. tempObj 에 있는 key 값을 통해 값을 꺼내어 원본 객체에 할당한다.
  //5. 반복문이 종료된다.
  //6. 원본 obj를 리턴한다.

  for (const idx in sources) {
    const tempObj = sources[idx];
    for (const prop in tempObj) {
      if (obj[prop] === undefined) {
        obj[prop] = tempObj[prop];
      }
    }
  }

  return obj;

};

/**
 *
 * "create"
 *
 * Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object.
 *
 * https://lodash.com/docs/4.17.15#create
 *
 *
 */
_.create = function (prototype) {
  // 전달받은 prototype을 그대로 반환한다.
  return prototype;
};

/**
 *
 * "forOwn"
 *
 * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
 *
 * https://lodash.com/docs/4.17.15#forOwn
 *
 *
 */
_.forOwn = function (obj, iterator) {
  // 받은 객체 obj를 for in 으로 반복문을 실행한다.
  // 만약 객체 자체 고유한 속성이면 콜백함수를 실행한다.
  for (const idx in obj) {
    if (obj.hasOwnProperty(idx)) {
      iterator(obj[idx], idx);
    }
  }
};

/**
 *
 * "throttle"
 *
 * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last func invocation.
 *
 * https://lodash.com/docs/4.17.15#throttle
 *
 *
 */
_.throttle = function (func, wait) {

  let flag = false;

  return () => {
    if (!flag) {
      flag = true;
      func();
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  }

  // 안되는 경우 : 함수를 즉시 실행시키고 난 후, setTimeout을 실행시켜야 한다.
  /**
   * return () => {
    if (!flag) {
      flag = true;

      setTimeout(() => {
        flag = false;
        func();
      }, wait);
    }
  }
   */

};

/**
 *
 * "memoize"
 *
 * Creates a function that memoizes the result of func. If resolver is provided,
 * it determines the cache key for storing the result based on the arguments provided to the memoized function.
 *  By default, the first argument provided to the memoized function is used as the map cache key.
 * The func is invoked with the this binding of the memoized function.
 *
 * https://lodash.com/docs/4.17.15#memoize
 *
 *
 */
_.memoize = function (func) {

  const map = {};

  return (...args) =>{

    const key = JSON.stringify([...args]);

    if(map[key]){
      return map[key];
    }

    const result = func(...args);
    map[key] = result;

    return result;
  }

 };

/**
 *
 * "curry"
 *
 * Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.

 *
 * https://lodash.com/docs/4.17.15#curry
 *
 *
 */
_.curry = function (func, ...args) {
  // console.log("step1");
  // console.log("args1",...args);
  // console.log("args1 out len ",args.length);
  // console.log("args2 out len ",nextArgs.length);
  if(func.length === args.length){
    return func(...args);
  }

  return (...nextArgs) =>{
    // console.log("step2");
    // console.log("args2",...nextArgs);
    // console.log("args2 in len ",nextArgs.length);
    // if(nextArgs.length === 0){
    //   console.log("nextArgs.length = 0");
    //   return func(...args);
    // }
    // func.data_len += 1;
    return _.curry(func, ...args, ...nextArgs);

    }
  }


/**
 *
 * "compose"
 *
 * 테스트 코드의 내용을 참고하세요.
 *
 */
_.compose = function (...funcList) {
    return (args) =>{
      return _.reduce([...funcList].reverse(), (accumulator, func)  => func(accumulator), args);
    }
 };

export default _;
