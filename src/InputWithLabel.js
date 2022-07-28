
function InputWithLabel({children, todoTitle, handleTitleChange}){
  return(
    <>
      <label htmlFor='todoTitle'>{children}</label>
      <input 
        id='todoTitle' 
        name='title' 
        value={todoTitle} 
        onChange={handleTitleChange}
        autoFocus
      />
    </>
)}

export default InputWithLabel;