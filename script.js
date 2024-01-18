function check(){
    let input = document.getElementsByTagName("input");
    let result = document.getElementById("result");
    let checkIndex

    for(let i = 0; i<input.length; i++){
        if(input[i].checked == true){
            checkIndex = i
        }
    }

    if(input[checkIndex].id == "option1"){
        result.innerText = "Incorrect. Try again"
        result.classList.add("bg-danger");
    }

    if(input[checkIndex].id == "option2"){
        result.innerText = "Well Done"
        result.classList.add("bg-success");
    }

    if(input[checkIndex].id == "option3"){
        result.innerText = "Incorrect. Try again"
        result.classList.add("bg-danger");
    }

}