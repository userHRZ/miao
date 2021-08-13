var userhrz = function () {
  function chunk(array,size=1) {
    var result = []
    for (var i = 0; i < array.length; i+=size) {
      result.push(array.slice(i,i+size))
    }
    return result
  }

  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 0 || array[i] == null || array[i] == "" || array[i] == undefined) continue
      result.push(array[i])
    }
    return result
  }

  function difference(array, ...ary) {

  }

  function drop(array, n = 1) {
    var result = []
    result = array.slice(n)
    return result
  }

  function dropRight(array, n = 1) {
    var result = []
    var l = array.length
    if (n > l) n = l
    result = array.slice(0, l - n)
    return result
  }

  function dropRightWhile(array, [predicate = _.identity]) {
    
  }

  function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array 
  }

  function flatten(array) {
    var result = []
    return result.concat(...array)
  }

  function flatten(array) {
    return array.reduce((total, item) => {
      return total.concat(item)
    },[])
  }

  function uniq(array) {
    var result = ]
    for (var i = 0; i < array.length; i++) {
      if (result.includes(array[i])) {
        continue
      }
      result.push(array[i])
    }
    return result
  }

  function uniqBy(array, [iteratee = _.identity]) {
    
  }

  function flattendeep(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = flattendeep(item)
        for (var j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattendepth(array, depth = 1) {
    if (depth == 0) return array
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = flattendepth(item, depth - 1)
        for (var j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  }
  return {
    chunk: chunk,
    compact:compact,
  }
}()
