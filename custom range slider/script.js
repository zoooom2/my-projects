let range = document.getElementById('slide')



range.addEventListener('input', function(e){
    let value = e.target.value
    label = e.target.nextElementSibling 

    width = getComputedStyle(e.target).getPropertyValue('width')
    label_width = getComputedStyle(label).getPropertyValue('width')
    
    
    widthNum = +width.substring(0, width.length-2)
    labelNum = +label_width.substring(0, label_width.length-2)
    console.log(labelNum)

    max= e.target.max
    min= e.target.min

    left = value *(widthNum/max)-labelNum/2 +scale(value,min,max,25,-25)
    
    label.style.left = `${left}px`
    console.log(labelNum,widthNum)                                                                              
    label.innerHTML = value
})

function scale(num,in_min,in_max,out_min,out_max) {
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min
}