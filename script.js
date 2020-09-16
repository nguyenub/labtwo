//load the dataset 
let attractions;
fetch('attractions.json')
        .then(response => response.json())
        .then(data => {
            attractions = data;
            attractions.sort(function(a,b){
                return b.Visitors - a.Visitors;
            });

            //filter data
            function filterData(category) {
                if (category == 'all') {
                    return attractions;
                }
                filteredAttractions = attractions.filter(function(a) {
                    return a.Category == category;
                });

                console.log(category);
                console.log(filteredAttractions);
                return filteredAttractions;
            }

            //add event handler 
            function eventHandler(event) {
                var selectCategory = event.target.value;

                filtered = filterData(selectCategory);

                topFive = filtered.slice(0,5);
                renderBarChart(topFive);
    
                console.log(topFive);
                console.log(selectCategory);
            }

            //choosing category 
            const element = document.querySelector("#attraction-category")
            element.addEventListener('change', eventHandler);

        })
         


                





	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

