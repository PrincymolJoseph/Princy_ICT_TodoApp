
var eachRow = document.getElementById("eachRow"); 
load(checking);
function load(callback){
    var xhttp = new XMLHttpRequest();//creating XHR object
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            // console.log(this.responseText);
            dataObject = this.responseText;
            dataObjectArray = JSON.parse(this.responseText);
            console.log("In Ajax");
            console.log(dataObjectArray);
            i = 1;
            dataObjectArray.forEach(element => {
                if(element.completed == false){
                    eachRow.innerHTML += `<tr class="text-center">
                                            <th>${i++}</th>
                                            <td> ${element.title} </td>
                                            <td><input type="checkbox" name="checkboxName" ></td>
                                        </tr>`;
                                        // checkboxes[j++] = document.getElementsByName("checkboxName");
                                        // console.log(checkboxes[j-1]); onclick="checkboxFunction()"
                }
                else{
                    eachRow.innerHTML += `<tr class="text-center">
                                            <th>${i++}</th>
                                            <td> ${element.title} </td>
                                            <td><input type="checkbox" name="checkboxName" checked disabled></td>
                                        </tr>`;
                }
            });
            
        }
    }
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
    callback();
}




// function checkboxFunction(){
//     console.log("HI checkbox changed");
//     if (this.checked) {
//                     console.log("Checkbox is checked..");
//                   } else {
//                     console.log("Checkbox is not checked..");
//                   }
// }


function checking(){
    setTimeout(function(){
        let checkboxName = Array.from(document.getElementsByName('checkboxName'))
        console.log("Outside Ajax");
        // console.log(checkboxName);
        console.log(checkboxName.length);
        // console.log(checkboxName[0]);
        checkedCount = 0;
        for (let i = 0; i < checkboxName.length; i++) {
            checkboxName[i].addEventListener( "change", () => {
                console.log("Index of checked now = " +i);
                if (checkboxName[i].checked) {
                    console.log("Checkbox is checked..");
                    checkedCount++;
                    console.log("Count of checked = "+checkedCount)
                } else {
                    console.log("Checkbox is not checked..");
                    checkedCount--;
                    console.log("Count of checked = "+checkedCount)
                }
                if(checkedCount!=0 && checkedCount%5 ==0){
                    alert("You have completed 5 tasks in a row!!!")
                }
            });
        }
    },500);
}
