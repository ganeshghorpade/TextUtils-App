import {useState} from 'react';
function Home() {
    const [text, settext] = useState("");

        const MakeUpperCase=()=>{
        let newtext = text.toUpperCase();   
            settext(newtext);
            /* props.showAlert(" UpperCase Successfully....","success"); */
        }
    
        const MakeLowerCase=()=>{
        let newtext = text.toLowerCase();
            settext(newtext);
           /*  props.showAlert(" LowerCase Successfully....","success"); */
            }
        const Makeclear=()=>{
        let newtext = " ";
            settext(newtext);
            /* props.showAlert(" Clear Successfully....","success"); */
            }
        const Makecopy=()=>{
        var text = document.getElementById('exampleFormControlTextarea1');
            text.select();
            //text.setSelectionRange(0,9999);
            navigator.clipboard.writeText(text.value);
            /* props.showAlert(" Copied Successfully....","success"); */

        }
        const spaceRmv =() =>{
            let newtext = text.split(/[ ]+/);
            settext(newtext.join(" "))
        }
        const handleOnchange=(event)=>{
        console.log("on change click");
        settext(event.target.value);
        } 
return (
    <div>
                <div className="container  mb-3 my-3">
            <label className="form-label mx-2 text-light"><h2><b>Text Fun Editor</b></h2></label>
            <textarea className="form-control" id="exampleFormControlTextarea1"  rows="12" value = {text}  onChange={handleOnchange} placeholder='Text here..' ></textarea>
            
            </div>
            <div className=" container  mb-3 my-3">
            <button disabled = {text.length===0} type = "button" className = "btn btn-primary  border border-dark " onClick={MakeUpperCase}>Convert to UpperCase</button>
            <button disabled = {text.length===0} type = "button" className = "btn btn-primary mx-2 my-2 border border-dark" onClick={MakeLowerCase} id = "btn2">Convert to LowerCase</button>
            <button disabled = {text.length===0} type = "button" className = "btn btn-primary mx-2 my-2 border border-dark" onClick={Makeclear} id = "btn2">Clear</button>
            <button disabled = {text.length===0} type = "button" className = "btn btn-primary mx-2 my-2 border border-dark" onClick={Makecopy} id = "btn2">Copy</button>
            <button disabled = {text.length===0} type = "button" className = "btn btn-primary mx-2 my-2 border border-dark" onClick={spaceRmv} id = "btn2">Remove Extra Space</button>
            
            </div>
            <br/>
            </div>
)
}

export default Home
