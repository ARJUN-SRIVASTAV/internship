const readline=require('node:readline');
const rm=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
)
const task1=[]
const menu1 =(choice)=>
{
    console.log("----------todo-----------")
    console.log("1. ADD a task")
        console.log("2. view a task")
    console.log("3. Exit from a task")

rl.question('choice an option: ', (choice)=>{

    switch(choice)
    {

        case '1':
            {
             rl.question('enter the task:=>',(tasks)=>{
task.push(tasks)
                console.log(`"task Added successfully",${tasks}`);
                        menu();

             })   
            }
            
            break;
            case '2':
                {
                    console.log("\n your task:");
                    task.forEach((tasks,index)=>{console.log(`${index+1}.${tasks}`)})
                }
                menu();
                break;
                case '3':
                    {
                        console.log("exit from the application")
                        rl.close();
                    }
                  
                    break;
                    default:
                        {
                            console.log("enter the valid choice")
                            menu();
                        }
                        break;
                        
    }
})
}
menu();
