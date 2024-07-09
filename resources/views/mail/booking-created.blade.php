<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Created Confirmation</title>
    <style>
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    </style>
</head>
<body class="bg-gray-100 p-4">
<div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Your Booking is Confirmed!</h2>
    <p class="mb-4">Dear {{ $customer_name }},</p>
    <!-- <p>Your reservation for Trip {{ $trip_id }} has already been created. Thank you for choosing Travel Mates.</p> -->
    <p>We are pleased to inform you that your booking has been confirmed. We will share the trip details with you within the next 3 hours.</p>
    <p class="mt-4">Best regards,<br>Travel Mates</p>
</div>
</body>
</html>