import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

const ExampleMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null) // Estado para controlar el anclaje del menú
  const [isOpen, setIsOpen] = useState(false) // Estado para controlar si el menú está abierto

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget) // Establece el anclaje del menú en la posición del clic
    setIsOpen(true) // Abre el menú
  }

  const closeMenu = () => {
    setAnchorEl(null) // Elimina el anclaje del menú
    setIsOpen(false) // Cierra el menú
  }

  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return (
    <div>
      <button {...bindTrigger(popupState)} onClick={openMenu}>Open Menu</button>
      <Menu
        {...bindMenu(popupState)}
        anchorEl={anchorEl} // Establece el anclaje del menú
        open={isOpen} // Indica si el menú está abierto
        onClose={closeMenu} // Función para cerrar el menú
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={closeMenu}>My account</MenuItem>
        <MenuItem onClick={closeMenu}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default ExampleMenu
