document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const product = document.getElementById('product').value;
    const colour = document.getElementById('colour').value;
    const fit = document.getElementById('fit').value;
    const fabric = document.getElementById('fabric').value;
    const price = document.getElementById('price').value;

    if (product && colour && fit && fabric && price) {
        alert('Form submitted successfully!');
        console.log({ product, colour, fit, fabric, price });
    } else {
        alert('Please fill in all fields.');
    }
});

