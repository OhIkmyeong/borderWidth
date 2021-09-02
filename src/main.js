const ul_shape = document.getElementById('ul_shape');
const ipt_color = document.getElementById('ipt_color');
const ipt_size = document.getElementById('ipt_size');
const btn_make = document.getElementById('btn_make');

const preview = document.getElementById('preview');
const ipt_code = document.getElementById('ipt_code');
const btn_copy = document.getElementById('btn_copy');

function select_arrow(e){
    e = e || window.event;
    const target = e.target;
    if(target.tagName !== "LI"){return;}

    target.classList.add('on');

    const sibling = Array.prototype.filter.call(ul_shape.children, (el)=>el !== target);
    for(let li of sibling){
        li.classList.remove('on');
    }
}//select_arrow

function display_result(){
    const shape = ul_shape.getElementsByClassName('on')[0].dataset.shape;
    const color = ipt_color.value;
    const size = ipt_size.value;

    display_preview(shape,color,size);
    display_code(shape,color,size);
}//display_result

function display_preview(shape,color,size){
    preview.style.border = `${size}px solid transparent`;
    preview.style.margin = 0;
    switch(shape){
        case "top":
            preview.style.borderBottomColor = color;
            preview.style.marginBottom = `${size}px`;
            break;
        case "bottom":
            preview.style.borderTopColor = color;
            preview.style.marginTop = `${size}px`;
            break;
        case "left":
            preview.style.borderRightColor = color;
            preview.style.marginRight = `${size}px`;
            break;
        case "right":
            preview.style.borderLeftColor = color;
            preview.style.marginLeft = `${size}px`;
            break;
    }
}//display_preview

function display_code(shape,color,size){
    const direction = get_direction(shape); 
    const code = 
`width:0; height:0;
margin-${direction}:${size}px;
border:${size}px solid transparent;
border-${direction}-color:${color};`;
    ipt_code.innerHTML = code;
}//display_code

function get_direction(shape){
    switch(shape){
        case "top":
            return "bottom";
        case "bottom":
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
    }
}//get_direction

function copy_code(){
   ipt_code.select();
   document.execCommand("copy");
}//copy_code

/* ✨ 실행 */
ul_shape.addEventListener('click',select_arrow);
btn_make.addEventListener('click', display_result);
btn_copy.addEventListener('click', copy_code);
