<?php

namespace Database\Seeders;

use App\Models\Accommodation;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccommodationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lang = 33.7490;
        $long = -84.3880;

        DB::table('accommodations')->delete();
        $data = [
            [
                'title'       => 'Ambiance Boutique Art Hotel Karachi',
                'description' => 'Located in Karachi, 1.7 miles from Seaview Beach, Ambiance Boutique Art Hotel Karachi has accommodations with a garden, free private parking, a shared lounge and a terrace. This 5-star hotel offers a concierge service. The property provides a 24-hour front desk, airport transportation, room service and free WiFi throughout the property. The hotel will provide guests with air-conditioned rooms with a closet, an electric tea pot, a fridge, a minibar, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Ambiance Boutique Art Hotel Karachi the rooms include bed linen and towels. At the accommodation you\'ll find a restaurant serving Mediterranean cuisine. Vegetarian, dairy-free and halal options can also be requested. The nearest airport is Jinnah International Airport, 13 miles from Ambiance Boutique Art Hotel Karachi. Couples in particular like the location – they rated it 9.4 for a two-person trip.',
                'image_url'   => url('')."/images/accommodations/ambiance-boutique-art-hotel-karachi.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Islamabad Regalia Hotel',
                'description' => "You're eligible for a Genius discount at Islamabad Regalia Hotel! To save at this property, all you have to do is sign in. Located in Islamabad, 4 miles from Shah Faisal Mosque, Islamabad Regalia Hotel provides accommodations with a fitness center, free private parking, a garden and a shared lounge. The property is around 5 miles from Lake View Park, 12 miles from Ayūb National Park and 22 miles from Taxila Museum. The property has a 24-hour front desk, airport transportation, room service and free WiFi throughout the property. All guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. At Islamabad Regalia Hotel every room has bed linen and towels. At the accommodation you'll find a restaurant serving American and Asian cuisine. The area is popular for hiking, and car rental is available at this 3-star hotel. Rose and Jasmine Garden is 1.1 miles from Islamabad Regalia Hotel, while Pakistan Sports Complex is 1.3 miles away. The nearest airport is Islamabad International Airport, 19 miles from the hotel. Couples in particular like the location – they rated it 8.2 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/islamabad-regalia-hotel.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Goldcrest Luxury Apartments',
                'description' => "Goldcrest Luxury Apartments is located in Lahore, 18 miles from Wagah Border and 2.8 miles from Packages Mall. This 5-star hotel offers an ATM and a concierge service. The property has a 24-hour front desk, airport transportation, room service and free WiFi. At the hotel the rooms are equipped with air conditioning, a desk, a flat-screen TV, a private bathroom, bed linen, towels and a terrace with a city view. Goldcrest Luxury Apartments provides some rooms that feature a balcony, and the rooms come with an electric tea pot. All rooms will provide guests with a fridge. At the accommodation you'll find a restaurant serving American, Chinese and British cuisine. Vegetarian, dairy-free and halal options can also be requested. Goldcrest Luxury Apartments has a playground. Gaddafi Stadium is 6.3 miles from the hotel, while Army Museum Lahore is 6.5 miles from the property. The nearest airport is Allama Iqbal International Airport, 5 miles from Goldcrest Luxury Apartments. Couples in particular like the location – they rated it 9.5 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/goldcrest-luxury-apartments.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Luxus Grand Hotel',
                'description' => "Located in Lahore, 9.3 mi (27 Mins) from the airport, the Luxus Grand Hotel features free WiFi access, free private parking. Guests can enjoy the on-site multiple cuisine restaurant, gym and swimming pool. Each room is fitted with a flat-screen TV with satellite channels. Certain rooms include a sitting area for your convenience. You will find kettle with complimentary tea coffee sachets in the room. The rooms are fitted with a spacious private bathroom with bathrobes for him and her, soft towels, slippers and free toiletries and amenities. You will be welcome with a fruit basket and complimentary mineral water bottles. The rooms are equipped with low noise air conditioning and double glazed windows to block the noise of the city for better comfort while sleeping. You will find a 24-hour front desk at the property and 24-hour room service. The hotel also provides car rental. Alhamra Arts Center is 1312 feet from Luxus Grand Hotel, and Lahore Zoo is 0.4 mi from the property. The hotel regularly organizes tours to Wagah border parade and heritage sites of Lahore. Couples in particular like the location – they rated it 8.9 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/luxus-grand-hotel.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Hotel Al Azeem',
                'description' => "You're eligible for a Genius discount at Hotel Al Azeem! To save at this property, all you have to do is sign in. Offering a restaurant, Hotel Al Azeem is located in Khānspur and provides a 24-hour front desk for the convenience of the guests. Free WiFi access is available in the public areas of the property. Each room here will provide you with a flat-screen cable TV, work desk and seating area with sofa. Complete with a dishwasher, the dining area also has a dining table. Private bathroom comes with a shower. You can enjoy mountain and garden view from the balcony. At Hotel Al Azeem you will find a garden and barbecue facilities. Other facilities offered at the property include meeting facilities, a shared lounge and a tour desk. An array of activities can be enjoyed on site or in the surroundings, including horse riding and hiking. The property offers free parking. The Chaklala Airport is 34 mi away. Packed lunches can be requested. Room service is available. Couples in particular like the location – they rated it 9.4 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/hotel-al-azeem.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Ramada by Wyndham Lahore Gulberg II',
                'description' => "Ramada by Wyndham Lahore Gulberg II has a restaurant and a fitness center in Lahore. This property is located a short distance from attractions such as Vogue Towers and Pace Shopping Mall. Attractions in the area include Wagah Border, 14 mi away, or Gaddafi Stadium, located 1.4 mi from the property. At the hotel, the rooms have a wardrobe. A continental breakfast is served every morning at the property. At Ramada by Wyndham Lahore Gulberg IIguests are welcome to take advantage of a spa center. The accommodations can conveniently provide information at the reception to help guests to get around the area. Fortress Square is 1.7 mi from Ramada by Wyndham Lahore Gulberg II, while Lahore Gymkhana is 1.9 mi away. The nearest airport is Allama Iqbal International Airport, 3.1 mi from the property. Couples in particular like the location – they rated it 8.7 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/ramada-by-wyndham-lahore-gulberg-II.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'The Signature Hotel Multan',
                'description' => "Located in Multan, The Signature Hotel Multan offers a garden. This 3-star hotel offers room service and a 24-hour front desk. There's a terrace and guests can use free WiFi and free private parking. The nearest airport is Multan International Airport, 6.2 miles from the hotel. Couples in particular like the location – they rated it 9.2 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/the-signature-hotel-multan.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Hamsun Shahrah-e-Faisal',
                'description' => "Located in the PECHS district of Karachi, Hamsun Shahrah-e-Faisal has a garden and a terrace. With free WiFi, this 3-star hotel offers a shared kitchen and room service. The property provides a 24-hour front desk, an ATM and currency exchange for guests. Guest rooms in the hotel are equipped with air conditioning, a flat-screen TV with satellite channels, a kitchen, a dining area, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. At Hamsun Shahrah-e-Faisal each room includes bed linen and towels. Breakfast is available daily, and includes à la carte, continental and American options. The nearest airport is Jinnah International Airport, 11 miles from the accommodation. Couples in particular like the location – they rated it 9.3 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/hamsun-shahrah-e-faisal.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Hamsun Shahrah-e-Faisal',
                'description' => "Located in the PECHS district of Karachi, Hamsun Shahrah-e-Faisal has a garden and a terrace. With free WiFi, this 3-star hotel offers a shared kitchen and room service. The property provides a 24-hour front desk, an ATM and currency exchange for guests. Guest rooms in the hotel are equipped with air conditioning, a flat-screen TV with satellite channels, a kitchen, a dining area, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. At Hamsun Shahrah-e-Faisal each room includes bed linen and towels. Breakfast is available daily, and includes à la carte, continental and American options. The nearest airport is Jinnah International Airport, 11 miles from the accommodation. Couples in particular like the location – they rated it 9.3 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/hamsun-shahrah-e-faisal.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
            [
                'title'       => 'Hamsun Shahrah-e-Faisal',
                'description' => "Located in the PECHS district of Karachi, Hamsun Shahrah-e-Faisal has a garden and a terrace. With free WiFi, this 3-star hotel offers a shared kitchen and room service. The property provides a 24-hour front desk, an ATM and currency exchange for guests. Guest rooms in the hotel are equipped with air conditioning, a flat-screen TV with satellite channels, a kitchen, a dining area, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. At Hamsun Shahrah-e-Faisal each room includes bed linen and towels. Breakfast is available daily, and includes à la carte, continental and American options. The nearest airport is Jinnah International Airport, 11 miles from the accommodation. Couples in particular like the location – they rated it 9.3 for a two-person trip.",
                'image_url'   => url('')."/images/accommodations/hamsun-shahrah-e-faisal.jpg",
                'destination_id' => rand(1,10),
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at'  => Carbon::now(),
                'updated_at'  => Carbon::now()
            ],
        ];
//        Accommodation::insert($data);

        foreach ($data as $accommodation_data ){
            $accommodation = Accommodation::create($accommodation_data);
            // Attach three random users to the trip
            $accommodation->destinations()->attach([
                rand(1, 10), // Assuming you have 10 users in your database
                rand(1, 10),
                rand(1, 10),
            ], ['created_at' => now(), 'updated_at' => now()]);
        }

        // Testing Dummy Products
//        Accommodation::factory(10)->create();
    }
}
