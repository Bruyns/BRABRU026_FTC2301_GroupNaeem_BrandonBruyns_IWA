/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
// files being exported by the view.js script
import {
    TABLES, COLUMNS, state, createUniqueId, createOrderData, updateDragging
} from "./data.js" 
import {
     createOrderHtml, html, updateDraggingHtml, moveToColumn
} from "./view.js";

 
    // this is in charge of the ddrag and drop the orders in the webpage 
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
 
}
// leave function as is for the meanwhile

let beingDragged;
let id;
// declaring beingDragged and id in the global scope to be used by later functions
// const handleDragStart = (event) => {}

// const handleDragEnd = (event) => {}

const handleHelpToggle = (event) => {
    // modal shows dialogue hidden overlays/text 
    event.preventDefault();
    html.help.overlay.showModal(); 
    // creates a listener to check if the button is clicked by the user
    html.help.cancel.addEventListener("click", () =>{
        html.help.overlay.close();
    })
}

const handleAddToggle = (event) => {
    html.add.overlay.showModal();
    event.preventDefault();    // still unsure what this is actually doing
    // prevent default prevent the overlay from running till the function button is clicked/pressed
    html.add.cancel.addEventListener("click", () =>{
        html.add.overlay.close();      
    })
}

const handleAddSubmit = (event) => {
    preventDefault();
    // need to convert probs into a object so that it can be retieved within the order
    const data = {
        title: html.add.form.title.value,
        table: html.add.form.table.value,
        column: html.edit.column.value,
    }
    // value is a property of an object that is set to a string
    // orderData creates a object that can be used by the DOM?
    // orderHtml converts js files into HTML files for the order to be submitted
    const orderData = createOrderData(data);
    const order = orderData;
    const orderHtml = createOrderHtml(order)
    //to move the order to the "ordered" column
    const orderedColumn = html.columns.ordered;
    orderedColumn.appendChild(orderHtml);
    //makes the form empty after submission
    html.add.form.reset();

    // will close the overlay before adding the orders to html
    html.add.overlay.close();
    html.other.add.focus();
    
}
const handleEditToggle = (event) => {
    const { target } = event;

    const editOpen = document.querySelector('.order')

    if (target == editOpen) {
        html.edit.overlay.showModal()
    }

    if (target == html.edit.cancel) {
        html.edit.overlay.close()
    }
}

/**
 * This function is called when a user submits the "Edit Order".
 * It extracts the data entered in the form, removes the old order,
 * creates a new order data object, creates a new HTML element, and
 * appends the HTML element.
 * .value is used to access the 'title', 'table', and 'column' input.
 * @param {Event} event 
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    const order = document.querySelector('.order')
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value,
    }
    const orderData = createOrderData(data)
    const orderHtml = createOrderHtml(orderData)
    const columns = document.querySelector(`[data-column="${data.column}"]`)
    columns.appendChild(orderHtml)
    html.edit.overlay.close()
}

/**
 * This function is called when a user clicks "delete" on
 * the "Edit Order" form.
 * It removes the order and close the modal.
 * @param {Event} event 
 */
const handleDelete = (event) => {
    const { target } = event

    if (target == html.edit.delete) {
        document.querySelector('.order').remove()
    }

    html.edit.overlay.close()
}


// can remove eventListeners because they are used in the above code
// html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

// html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}