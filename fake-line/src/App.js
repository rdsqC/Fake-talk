import './App.css';


function ViewPort(){
  return(
    <div className='viewPort'>
      <table></table>
    </div>
  )
}

function InputBox({ title, type, backtext, inputprops}){
  return(
    <label htmlFor={title} className="inputBox">
        <span>{title}</span>
        <input id={title} type={type} placeholder={backtext} {...inputprops}/>
    </label>
  )
}

function Order({ inputs }){
  let inputElements = [];
  for(let input of inputs){
    inputElements.push(
      <InputBox key={input.title} title={input.title} type={input.type} backtext={input.backtext} inputprops={input.inputprops}/>
    );
  }
  return(
    <div className='order'>{inputElements}</div>
  )
}

function InputWindow({ windowName, orders }){
  let orderElements = [];
  let count = 0;
  for(let order of orders){
    orderElements.push(
      <Order key={windowName + count} inputs={order}/>
    );
    ++count;
  }
  return(
    <div className="orders">{orderElements}</div>
  )
}

function App() {
  return (
    <>
      <ViewPort/>
      <div className='inspector'>
        <InputWindow
          windowName={"seat"}
          orders={
            [
              [
                {
                  title:"num of width",
                  type:"number",
                  backtext:"natural",
                  inputprops:{
                    min:"1",
                    value:"6"
                  } 
                },
                {
                  title:"num of Height",
                  type:"number",
                  backtext:"natural",
                  inputprops:{
                    min:"1",
                    value:"7"
                  } 
                }
              ]
            ]
          }
        />
      </div>
    </>
  );
}

export default App;
