// import "../app/select.scss";
import Select from 'react-select';


export default function ReactSelect () {    
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    //Отключение кнопки Любая при выборе др параметров
    function handleChange (e){        
        // setValue(e.target.value);                  
    }     
   
    return (        
        <div >
            <Select              
            options={options}
            styles={{               
            //Focused==hover   
                // container:  (baseStyles, state) => ({
                //     ...baseStyles,
                //     ,
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? '#d581f5' : '#d581f5 !important',
                  height: '100px'              
                }),                
                option:(baseStyles, state)=>({
                        ...baseStyles,
                        backgroundColor: state.isFocused ? '#d581f5' : state.isSelected ? 'hotpink' : 'white'                    
                })
                
                
            }}

            className="custom-select-container"
            classNamePrefix="custom-select" />                    
        </div>     
    )
};

