
var eachRow = document.getElementById("eachRow"); 

function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  fetchData()
      .then(data => {
        createCheckboxes(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

function createCheckboxes(data){
    i = 1;
    data.forEach(element => {
        if(element.completed == false){
            eachRow.innerHTML += `<tr class="text-center">
                                    <th>${i++}</th>
                                    <td> ${element.title} </td>
                                    <td><input type="checkbox" name="checkboxName" ></td>
                                </tr>`;
                                // checkboxes[j++] = document.getElementsByName("checkboxName");
                                // console.log(checkboxes[j-1]); onclick="checking()"
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

checking();

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
    },2000);
}
