$(document).ready(() =>{

    //Create all the objects for the list, buttons, and input box
    let inputBox = $("#inpTask")
    let listItems = $("#ulTasks")
    let addBtn = $("#addBtn")
    let resetBtn = $("#resetBtn")
    let clearBtn = $("#btnCleanup")
    let sortItem = $("#btnSort")

    //Create the add function
    function addItem(){
        if(inputBox.val()!=""){
            let obj = $('<li>',{
                'class' : 'list-group-item',
                text : inputBox.val()
            })

            obj.click(()=>{
                obj.toggleClass('done')
            })

            listItems.append(obj)
            inputBox.val("")
        }
    }

    inputBox.keypress((e)=>{
        if(e.which == 13){
            addItem()
            toogleInputButton(true)
        }
    })
    addBtn.click(addItem)

    resetBtn.click( ()=> {
        inputBox.val("")
        toogleInputButton(inputBox.val() == '')
    })

    clearBtn.click( () =>{
        $("#ulTasks .done").remove()
    })

    sortItem.click( () =>{
        $("#ulTasks .done").appendTo(listItems)
    })

    function toogleInputButton(booleanVal){
        if(booleanVal == true){
            resetBtn.prop('disabled' , true)
        }
        else{
            resetBtn.prop('disabled' , false)
        }
    }

    inputBox.on('input',() => {
        toogleInputButton(inputBox.val() == '')
    })


})