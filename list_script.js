const event_list = []



let addEvent = () =>{
    let Name = document.getElementById("name");
    let event_date = document.getElementById("event_date");
    let description = document.getElementById("des"),event_start_time = document.getElementById("est"),
    event_end_time = document.getElementById("eet");
    if(!Name.value || !event_date.value || !description.value || !event_start_time.value || !event_end_time.value)
    {
        alert("Please fill all the fields.");
        return;
    }
    if(event_start_time.value[0] + event_start_time.value[1] > event_end_time.value[0] + event_end_time.value[1])
    {
        alert("Start time must be less than end time");
        return;
    }
    if(event_start_time.value[0] + event_start_time.value[1] == event_end_time.value[0] + event_end_time.value[1])
    {
        if(event_start_time.value[3] + event_start_time.value[4] >= event_end_time.value[3] + event_end_time.value[4])
        {
            alert("Start time must be less than end time");
            return;
        }
    }
    event_date = event_date.value;
    let curr_date = new Date();
    if(event_date < String(curr_date.getFullYear()) + "-" + String(curr_date.getMonth() + 1) + "-" + String(curr_date.getDate()))
    {
        alert("Date can't be before today's date");
        return;
    }
    let duplicate_event = event_list.find(event=>event.Name == Name.value && event["Event Start Time"] == event_start_time.value && event["Event Date"] == event_date);
    if(duplicate_event)
    {
        return alert('Event with same credentials already exists.')
    }
    let tempo = new Object();
    tempo["Name"] = Name.value;
    tempo["Event Date"] = event_date;
    tempo["Description"] = description.value;
    tempo["Event Start Time"] = event_start_time.value;
    tempo["Event End Time"] = event_end_time.value;
    event_list.push(tempo);
    let ul = document.getElementById("ullist");
    let li = document.createElement("li");
    let key = "Name";
    let div = document.createElement("div")
    let nn = document.createTextNode(event_list[event_list.length-1][key]);
    key = "Event Date"
    let div1 = document.createElement("div")
    let nn1 = document.createTextNode("Date: "+event_list[event_list.length-1][key]);
    key = "Description"
    let div2 = document.createElement("div")
    let nn2 = document.createTextNode("Description: "+event_list[event_list.length-1][key]);
    key = "Event Start Time"
    let div3 = document.createElement("div")
    let nn3 = document.createTextNode("Start Time: "+event_list[event_list.length-1][key]);
    key = "Event End Time"
    let div4 = document.createElement("div")
    let nn4 = document.createTextNode("End Time: "+event_list[event_list.length-1][key]);
    li.className = "name_title";
    li.setAttribute('id',event_list[event_list.length-1]["Name"]);
    div.className = "fields";
    div1.className = "subfields";
    div2.className = "subfields";
    div3.className = "subfields";
    div4.className = "subfields";
    let delbtn = document.createElement("button");
    delbtn.className = "deletebtn";
    delbtn.addEventListener('click',function(){
        deleteEvent(event_list.length-1);
    })
    let btncon = document.createTextNode("x");
    delbtn.appendChild(btncon);
    li.appendChild(delbtn);
    div.appendChild(nn);
    li.appendChild(div);
    div1.appendChild(nn1);
    li.appendChild(div1);
    div2.appendChild(nn2);
    li.appendChild(div2);
    div3.appendChild(nn3);
    li.appendChild(div3);
    div4.appendChild(nn4);
    li.appendChild(div4);
    ul.appendChild(li);
}

let findEvent = () =>{
    let ul = document.getElementById("resultlist");
    let field = document.getElementById("query");
    let name = field.value;
    if(!name)
    {
        ul.innerHTML ="";
        return alert('Please enter event name to search');
    }
    let result = event_list.filter(event=>event.Name === name);
    if(result.length==0)
    {
        ul.innerHTML ="";
        return alert('No such event found.')
    }
    ul.innerHTML ="";
    for(i = 0;i<result.length;i++)
    {
        let li = document.createElement("li");
        let key = "Name";
        let div = document.createElement("div")
        let nn = document.createTextNode(result[i][key]);
        key = "Event Date"
        let div1 = document.createElement("div")
        let nn1 = document.createTextNode("Date: "+result[i][key]);
        key = "Description"
        let div2 = document.createElement("div")
        let nn2 = document.createTextNode("Description: "+result[i][key]);
        key = "Event Start Time"
        let div3 = document.createElement("div")
        let nn3 = document.createTextNode("Start Time: "+result[i][key]);
        key = "Event End Time"
        let div4 = document.createElement("div")
        let nn4 = document.createTextNode("End Time: "+result[i][key]);
        li.className = "name_title";
        li.setAttribute('id',event_list[event_list.length-1]["Name"]);
        div.className = "fields";
        div1.className = "subfields";
        div2.className = "subfields";
        div3.className = "subfields";
        div4.className = "subfields";
        div.appendChild(nn);
        li.appendChild(div);
        div1.appendChild(nn1);
        li.appendChild(div1);
        div2.appendChild(nn2);
        li.appendChild(div2);
        div3.appendChild(nn3);
        li.appendChild(div3);
        div4.appendChild(nn4);
        li.appendChild(div4);
        ul.appendChild(li);
    }
}


let deleteEvent = (index) =>{
    let delele = document.getElementById(event_list[index]["Name"]);
    event_list.splice(index,1);
    delele.remove();
}