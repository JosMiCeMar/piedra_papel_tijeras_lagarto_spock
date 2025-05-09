import React from 'react';
import Select from 'react-select';


const options = [
  { value: 'piedra', label: 'Piedra', icon:<img className='w-10 h-10 inline mr-3' src='/img/hands/piedra.svg'/> },
  { value: 'papel', label: 'Papel', icon: <img className='w-10 h-10 inline mr-3' src='/img/hands/papel.svg'/> },
  { value: 'tijeras', label: 'Tijeras', icon: <img className='w-10 h-10 inline mr-3' src='/img/hands/tijeras.svg'/> },
  { value: 'lagarto', label: 'Lagarto', icon:  <img className='w-10 h-10 inline mr-3' src='/img/hands/lagarto.svg'/>},
  { value: 'spock', label: 'Spock', icon:  <img className='w-10 h-10 inline mr-3' src='/img/hands/spock.svg'/>}
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted gray',
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#007bff' : 'white',
    '&:hover': {
      backgroundColor: '#007bff',
      color: 'white',
    },
  }),
};

function SelectHand(props) {
  return (
    <Select
      options={options}
      styles={customStyles}
      getOptionLabel={(option) => (
        <div>
          {option.icon} 
          {option.label}
        </div>
      )}
      getOptionValue={(option) => option.value}
      {...props}
    />
  );
}

export default SelectHand;