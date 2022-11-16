MT Food Truck food ordering app Pseudocode

As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.


- Create a list of food items in the mtMenu.js file, an object with item: and price: as keys.
mtMenu = {
const beverages = [
    {item:"coffee", price:"$2"}, 
    {item:"water", price:"1"}
    ]
const sandwiches = [ 
    {item:"BLT", price:"$3"},
    {item:"Rueben", price:"$5"}
    ]
const sides = [ 
    {item:"Chips", price:"$1"},
    {item:"Cookies", price:"$1"}
]


- Create a props item, single button in the component folder on DisplayItem.js file that a user, can click to select an item they wish to order.
<button onClick={props.addToCart(props.item)}>Add this item to your cart</button>

- Create a state for cart, will use 
const [cart, setCart] = useState([])

const addToCart = (item) => {
    setCart([...cart, item])
}
return <DisplayItem item={sideItem} addToCart={addToCart}/>
"You currently have ${cart.length} items in your cart."

🏔 Stretch Goals
As a user, I can see the total cost of my current order.
As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
As a user, I can see the total that includes sales tax rounded to two decimals.
As a user, I can see an image of my food selection on the menu.