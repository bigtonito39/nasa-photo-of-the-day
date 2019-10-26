import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const DropdownButtons = () => {
const [dropdownOpen, setOpen] = useState(false);

const toggle = () => setOpen(!dropdownOpen)


return (
<ButtonDropdown className = "ButtonDropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className = "DropdownToggle" caret>
        Planets to visit
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className ="DropdownItem">Earth</DropdownItem>
        <DropdownItem className ="DropdownItem" >Mars</DropdownItem>
        <DropdownItem className ="DropdownItem">Mercury</DropdownItem>
        <DropdownItem className ="DropdownItem">Jupiter</DropdownItem>
      </DropdownMenu>
     
    </ButtonDropdown>
    

)
}
export default DropdownButtons;