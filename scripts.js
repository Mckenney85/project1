$('#box1, #box2, #box3').change(function() {
  if($(this).is(":checked")) {
    $(":checked").prev('label').addClass("checked");
  } else {
    $(this).prev('label').removeClass("checked");
  }
});
