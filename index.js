function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
  return function(prm = "special") {
    return `You are ${str}${prm}${str}!`
  }
}

const Calculater = {
  add: function(a, b) {
    return a + b  
  },
  subtract: function(a, b) {
    a - b
  },
  multiply: function(a, b) {
    a * b
  },
  divide: (a,b) => {
    a / b
  }
}