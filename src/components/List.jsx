var React = require ('react');
var ListItem = require ('./ListItem.jsx');

var ingredients = [{
	"id": 1,
	"text": "chicken"
},
{
	"id": 2,
	"text": "cheese"
},
{
	"id": 3,
	"text": "pizza"
},
{
	"id": 4,
	"text": "Orange"
}]

var List = React.createClass({
	render: function(){
		var listItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredient={item.text} />;
		});
		return(<ul>{listItems}</ul>)	
	}
});

module.exports = List;