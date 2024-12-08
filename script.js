let labels = document.querySelectorAll('label');

let inputs = document.querySelectorAll("input");

String.prototype.AddAround = function (string1, string2) {
    return string1+this+string2;
}

function addSpan(string){
    let arrayEl = Array.from(string);
    let tab= [];

    arrayEl.forEach((el, index) => {
        tab[index] = el.AddAround("<span>", "</span>");
    })

    return tab;
}

labels.forEach(label=>{
    label.innerHTML = addSpan(label.innerText).join("");
})

inputs.forEach((input, i)=>{
    input.addEventListener('focus',()=>{
        let j = 0;
        let inter = window.setInterval(()=>{
            labels[i].children[j].classList.add("active");
            j++;
            if(j === labels[i].children.length){
                clearInterval(inter);
            }
        }, 60)
    })

    input.addEventListener('blur',()=>{
        let j = 0;
        if(!input.value){
            let inter = window.setInterval(()=>{
                labels[i].children[j].classList.remove("active");
                j++;
                if(j === labels[i].children.length){
                    clearInterval(inter);
                }
            }, 60)
        }
    })
})
