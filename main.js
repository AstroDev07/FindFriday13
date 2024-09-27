let date = new Date()

let searchFridays13 = (year = date.getFullYear()) =>{
  let fridays13 = []
  date.setFullYear(year)
  date.setDate(13)
  for( let i = 0; i <= 11; i++){
    date.setMonth(i)
    if(date.getDay() == 5){
      fridays13.push(date.toDateString())
    }
  }
  return fridays13
}

console.log(searchFridays13(2024))