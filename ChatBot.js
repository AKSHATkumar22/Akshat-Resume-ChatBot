// here it is there for that the DOM content loaded leaves empty it wont run
document.addEventListener('DOMContentLoaded', function() {
    // kept the step counter fot the count variable
            let step =0;
            // here it keeps the record of the resume details for the user provided
            let resumeDetails = {};

            // now the function for the user gives the details when the chatbot asks for the details
            function chatbot(input){
                let output = "";
                input = input.toLowerCase();

                // switch statement
                switch(step){
                    case 0 :
                    output = "Hello, lets start building your resume!, what's your full name !";
                    step++;
                    break;

                    case 1:
                        resumeDetails.name = input;
                        output = "whats Your Email id";
                        step++;
                        break;

                        case 2 :
                            resumeDetails.email = input;
                            output = "What yours Phone Number";
                            step++;
                            break;

                            case 3 :
                                resumeDetails.phone = input;
                                output = "Got it Can you tell me about your education";
                                step++;
                                break;

                                case 4 :
                                    resumeDetails.education = input;
                                    output = "Thanks, Now please describe your work experience";
                                    step++;
                                    break;

                                    case 5 :
                                        resumeDetails.experience = input;
                                        output = "Almost Done What skiils would like to highlight";
                                        step++;
                                        break;

                                        case 6 : 
                                        resumeDetails.skills = input;
                                        // here all the deatils of the user
                                        output = `Almost Done! Please Click on the Resume Button Down and see Your output!\n \n`+
                                        `Name: ${resumeDetails.name}\n\n`+
                                        `Email: ${resumeDetails.email}\n\n`+
                                        `Phone: ${resumeDetails.phone}\n\n`+
                                        `Education: ${resumeDetails.education}\n\n`+
                                        `Experience: ${resumeDetails.experience}\n\n`+
                                        `skills:  ${resumeDetails.skills}\n\n`+
                                        "You can build your resume bt pressing Start button again 'Start'.";
                                        step = 0;
                                        resumeDetails = {};
                                        break;
                                        default:
                                            output = "Sorry Invalid input can you just clarify out what are you saying!!!";
                                            break;
                } 
                return output;
            }

            // display the message at the box which has been created
            function displayUserMessage(message){
                let chat = document.getElementById("chat");
                let userMessage = document.createElement("div");
                userMessage.classList.add("message", "user");
                let userText = document.createElement("div");
                userText.classList.add("text");
                userText.innerHTML = message;
                userMessage.appendChild(userText);
                chat.appendChild(userMessage);
                chat.scrollTop = chat.scrollHeight;
            }
            // for the bot message

            function displayBotMessage(message){
                let chat = document.getElementById("chat");
                let botMessage = document.createElement("div");
                botMessage.classList.add("message", "bot");
                let botText = document.createElement("div");
                botText.classList.add("text");
                botText.innerHTML = message;
                botMessage.appendChild(botText);
                chat.appendChild(botMessage);
                chat.scrollTop = chat.scrollHeight; 
            }


            // now the message sends to the server and then comes back
            function sendMessage(){
                let input = document.getElementById("input").value;
                if(input){
                    // here it will take the input
                    displayUserMessage(input);
                    // output will take the input
                    let output = chatbot(input);
                    setTimeout(function() {
                        // here prints the output
                        displayBotMessage(output);
                    }, 1000);
                    // set interval for the output
                    document.getElementById("input").value = "";
                }
            }

            // here addEventListener with the help of Button, click and sendMessage
            document.getElementById("button").addEventListener("click", sendMessage);

            // if user press enter keyword then send the message to the user
            document.getElementById("input").addEventListener("keypress", function(event){
                if(event.key === 'Enter'){
                    sendMessage();
                }
            })
})
