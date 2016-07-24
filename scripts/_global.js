function cover(element,length){
	element
		.velocity(
			{
				width: (length + "px")
			},
			{
				duration: 750,
				easing: "easeInOutQuint"
			})
}
function uncover(element,length){
	element
		.velocity(
			{
				translateX: (length + "px"),
				width: "0"
			},
			{
				duration: 750,
				easing: "easeInOutQuint"
			})
			.velocity(
			{
				translateX: (0),
			},
			{
				duration: 1
			})
}
