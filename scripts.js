$(document).ready(() =>{

    //Create all the objects for the list, buttons, and input box
    let inputBox = $("#inpTask")
    let listItems = $("#ulTasks")
    let addBtn = $("#addBtn")
    let clearBtn = $("#clearBtn")


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
        }
    })
    addBtn.click(addItem)

    clearBtn.click( ()=> {
        inputBox.val("")
    })
})