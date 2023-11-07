


let div1 = document.createElement("div");
document.body.append(div1)

let result = document.createElement("span")
result.id='result1'

let text = document.createElement("textarea")
text.id="text2"

""
text.addEventListener("input",function (){

let text1 = document.getElementById("text2").value
result.innerHTML=text1

let count = text1.split(" ").length

result.innerHTML=`Total number of words: ${count}`
})


div1.append(text,result)

