$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms", function(formData){
		
		var htmlStr = " "
		
		formData.forEach(function(value){
			if(value.type === "text"){
				htmlStr += `<div><i class="fa ${value.icon}"><input type="${value.type}" placeholder="${value.label}" id="${value.id}"/></i></div>`
			} else if (value.type === "email"){
				htmlStr += `<div><i class="fa ${value.icon}"><input type="${value.type}" placeholder="${value.label}" id="${value.id}"/></i></div>`
			} else if (value.type === "tel"){
				htmlStr += `<div><i class="fa ${value.icon}"><input type="${value.type}" placeholder="${value.label}" id="${value.id}"/></i></div>`
			} else if (value.type === "textarea"){
				htmlStr += `<div><i class="fa ${value.icon}"><textarea type="${value.type}" placeholder="${value.label}" id="${value.id}"/></i></div>`
			} else if (value.type === "select"){
				htmlStr += `<div><select id="${value.id}">`
				value.options.forEach(function(value){
						htmlStr += `<option="${value.value}">"${value.label}"</option></select></div>`
				})
			}
			
		})



	$("#app").html(`<header></header> ${htmlStr} <footer></footer>`);
	$("header").html("Sign Up For My Web App")
	$("footer").html(`<button>Submit Form</button>`)
	})
})

/*
htmlStr += `<div><i class="fa ${value.icon}"><input type="${value.type}" placeholder="${value.label}" id="${value.id}"/></i></div>`
				value.options.forEach(function(value){
					htmlStr += `<input option="${value.label} value="${value.value}"/>`
				})*/