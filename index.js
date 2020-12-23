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