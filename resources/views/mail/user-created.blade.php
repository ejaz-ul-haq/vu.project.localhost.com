<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Created Confermation</title>
    <style>
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    </style>
</head>
<body class="bg-gray-100 p-4">
<div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h2 class="text-2xl font-semibold mb-4">User Created</h2>
    <p class="mb-4">Dear {{ $user_name }},</p>
    <p>Your reservation for User {{ $user_id }} has already been created. Thank you for choosing BlueDoorz.</p>
    <p class="mt-4">Regards,<br>BlueDoorz Team</p>
</div>
</body>
</html>