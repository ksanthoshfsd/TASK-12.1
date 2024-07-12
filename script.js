document.addEventListener('DOMContentLoaded', function() {

    function fetchDogImage() {
        return fetch('https://dog.ceo/api/breeds/image/random')

            .then(response => response.json())
            .then(data => {
                const dogImg = document.getElementById('dogImg');

                dogImg.src = data.message;
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
            });
    }

        Promise.all(fetchDogImage())
            .then(() => {
                console.log('All data fetched successfully');
            })
            .catch(error => {
                console.error('Error in Promise.all:', error);
            });
});



