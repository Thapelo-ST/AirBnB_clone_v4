$(document).ready(function () {
	var selectedAmenities = {};

	// listen for checkbox tag
	$('li input[type="checkbox"]').change(function () {
		var amenityId = $(this).data('id');
		var amenityName = $(this).data('name');

		if (this.checked) {
			// if checkbox is checked
			selectedAmenities[amenityId] = amenityName;
		} else {
			// checkbox is unchecked
			delete selectedAmenities[amenityId];
		}

		// update the h4 tag
		var amenitiesList = Object.values(selectedAmenities).join(', ');
		$('.filters h4').text(amenitiesList);
	});
});
