var variableArray = new Array();

//ON CLICK OF SUBMIT BUTTON, SUBMIT FORM AND DIPLAY CHOICES
$(function(){
	$("#btnsubmit").click(function(){
		$("#submit_results").html("<span class='strong font'>Name: </span>" + variableArray[0] + "<br /><span class='strong font'>Class: </span>" + variableArray[1] + "<br /><span class='strong font'>Weapon: </span>" + variableArray[3]);
	});
});

$(function returnName(){
	$("input.c_name").on("change", function() {
   		char_name = $(this).val();
   		variableArray.push(char_name);

   		return returnName();
	});
});

//ON CHANGE OF CLASS RADIO OPTION CONDITIONALLY DISPLAY RELEVANT MENU AND CLASS COSTUME
//TRY THIS AS A SWITCH STATEMENT FOR TOMORROW
$(function classCostumeMenu(){
	$("input.c_class").change(function(){	

		char_class = $(this).val();
		variableArray.push(char_class);
1
		img_src1 = "sources/" + char_class + ".png";
		variableArray.push(img_src1);

		$("#class_costume").attr("src", img_src1);
		
		if ($(this).val() == ("Druid")){	
			$("#druid_menu").show();
		} else {
			$("#druid_menu").hide();
		}

		if ($(this).val() == ("Cleric")){
			$("#cleric_menu").show();
		} else {
			$("#cleric_menu").hide();
		}

		if ($(this).val() == ("Mage")){
			$("#mage_menu").show();
		} else {
			$("#mage_menu").hide();
		}

		return classCostumeMenu();
	});
});

//ON CHANGE OF WEAPON RADIO OPTION CAPTURE VALUE OF CHOICE TO VARIABLE CHAR_WEAPON & DISPLAY WEAPON CHOICE
$(function showWeapon(){
	$("input.c_weapon").change(function(){
		char_weapon = $(this).val();
		variableArray.push(char_weapon);
		
		img_src2 = "sources/" + char_class + char_weapon + ".png";
		variableArray.push(img_src2);
		
		$("#class_weapon").attr("src", img_src2);

		console.log(variableArray);
		return showWeapon();
	});
});
		
//ON CHANGE OF CLASS, CLEAR WEAPON IMG
//$("input.c_class").change(function(){
	//$("#class_weapon").attr("src", "");
//});

//ON CLICK OF SUBMIT BUTTON, SUBMIT FORM AND DIPLAY CHOICES
/*function interpolate(){
	$("#btnsubmit").click(function(){
		$("#submit_results").html("<span class='strong font'>Name: </span>" + char_name + "<br /><span class='strong font'>Class: </span>" + char_class + "<br /><span class='strong font'>Weapon: </span>" + char_weapon);
	});
});*/