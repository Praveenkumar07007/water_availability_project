const form = document.querySelector("form");
const availability = document.getElementById("availability");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = form.elements["location"].value;
  availability.innerHTML = `Water is ${getWaterAvailability(location)} in ${location}.`;
});

function getWaterAvailability(location) {

  return "available";
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//water chart start
	const waterData = {
			labels: [ "Andhra pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "HimachalPradesh",
      "J&K",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "MadhyaPradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "West Bengal",
    ],
			datasets: [{
				label: 'Water Availability',
				data: [70, 80, 60, 50, 65, 80, 70,70,70,70,70,70,70,70,70,50,60,45,43,56,25,27,76,10,48,39,71,56], // Replace with your own data
				backgroundColor: [
					'rgb(255,165,0)',
					'rgba(5, 162, 235 )',
					'rgba(5, 206, 86 )',
					'rgba(75, 192, 12 )',
					'rgba(53, 102, 25 )',
          'rgba(25, 206, 86)',
          'rgba(55, 16, 236)',
          "rgba(25, 9, 132)",
          "rgba(19, 62, 35)",
          "rgba(255, 106, 186)",
          "rgba(75, 92, 19)",
          "rgba(15, 10, 25)",
          "rgba(25, 20, 60)",
          "rgba(55, 16, 26)",
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(157, 100, 233, 1)',
          "rgba(55, 199, 132, 1)",
          "rgba(4, 162, 255, 1)",
          "rgba(55, 106, 186, 1)",
          "rgba(175, 12, 102, 1)",
          "rgba(155, 100, 155, 1)",
          "rgba(152, 10, 155, 1)",
          "rgba(152, 10, 33, 1)",

				],
				borderWidth: 1
			}]
		};

		// Create the chart
		const ctx = document.getElementById('waterChart').getContext('2d');
		const waterChart = new Chart(ctx, {
			type: 'bar',
			data: waterData,
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
