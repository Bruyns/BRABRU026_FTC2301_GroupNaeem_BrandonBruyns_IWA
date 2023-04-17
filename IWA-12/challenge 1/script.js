const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.style.color = NONE_SELECTED
// // reserve.0 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
// if (STATUS_MAP.status.canReserve === true){
//     reserve.enable = true
// }else (){
//     reserve.enable = false
// }
// checkout[book1] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

book1.status.style.color = (none){
status : STATUS_MAP.color,
reserve : STATUS_MAP.canReserver ? 'enabled' : 'disabled',
checkout : STATUS_MAP.canCheckout ? 'enabled' : 'disabled',
checkin : STATUS_MAP.canCheckIn ? 'enabled' : 'disabled',
}

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'