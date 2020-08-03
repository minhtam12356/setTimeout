/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
console.log('Start')
function done(){
  console.log('Finish')
}

function doAfter(func, ms){
  
  setTimeout(func, ms)
  console.log('End')
}
doAfter(done, 1000)
