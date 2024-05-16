<?php

namespace Database\Seeders;

use App\Models\Destination;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationSeeder extends Seeder
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

        DB::table('destinations')->delete();
        $data = [
            [
                'title' => 'Naran and Kaghan',
                'description' => 'Home to truly stunning, lush natural beauty, Naran and Kaghan are destinations commonly frequented by Pakistani tourists from the south looking to get away from the city and experience mountainous landscapes without going too far north. Naran is surrounded by towering, green peaks and is full of awesome hiking spots including the famous Saif Al Malouk lake. Unfortunately, Naran has become overrun by mass tourism, and huge amounts of trash piled by the roadside is a common sight. The twin epidemics of unreasonably expensive hotels and mass littering plague Naran and thereâ€™s no end in sight, which is all the more tragic because the region seriously is lovely. If you want to experience staying amongst huge, green mountains without having to deal with overpricing and mass tourism, I highly recommend staying in Kaghan, just to the south of Naran. Itâ€™s far cheaper, less crowded, and you get the same verdant, mountainous beauty without the crowds.',
                'image_url' => url('') . "/images/destinations/naran-and-kaghan.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Makli Necropolis',
                'description' => 'Makli is one of Pakistanâ€™s most spectacular UNESCO World Heritage Sites, the root of long spans of history, unique culture, and mind-blowing architecture, all dedicated to memorializing those who passed on centuries ago. The styles of the tombs use various influences from all over South and West Asia, resulting in a myriad of diverse monuments to explore and discover. This is yet another of Pakistanâ€™s sites that travelers seeking to learn more about the regionâ€™s history canâ€™t miss. Like the rest of southern Pakistan â€“ especially Sindh, as itâ€™s the countryâ€™s southernmost province â€“ summer temperatures here can get scalding hot to the point of being very dangerous, so I recommend doing everything you can to make the trip in a colder season if possible.',
                'image_url' => url('') . "/images/destinations/makli-necropolis.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Patundas',
                'description' => 'A meadow hidden above Upper Hunza, Patundas is another lesser-known spot that has mind-blowing panoramic views of the most spectacular mountains and glaciers on Earth. This place is an absolute must-see for hikers! Getting there requires crossing a majestic glacier, and then conquering a pretty steep uphill hike to arrive at a plateau sitting roughly at 4200 meters altitude. Captivating vistas of the Karakoram range and some of the worldâ€™s biggest glaciers outside the polar regions await you, and you can enjoy one of the most satisfying cups of chai (or beverage of your choice ðŸ˜‰) that youâ€™ve ever had. Inaccessible during Winter and the majority of Spring, Patundas is an unbeatable summer trek and is just as spectacular, if a little colder, when early Autumn sets in.',
                'image_url' => url('') . "/images/destinations/patundas.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Snow Lake',
                'description' => 'Snow Lake is an epic high-altitude trekking destination that isnâ€™t easy to reach and sees very few visitors each year. Sitting at roughly 4,800 meters above sea level, Snow Lake awaits hikers after a difficult but glorious multi-day trek. This is another highlight on our list that not only requires serious commitment but endurance and skill to successfully reach. Steep ascents, massive (and very dangerous) glacial crevasses, and potentially extreme weather are just a few of the obstacles hikers need to overcome in order to enjoy Snow Lake. Snow Lake isnâ€™t a spot for the casual traveler, but for those seeking to answer the call to adventure at its most raw, this trek is hard to beat. This is, without a doubt, a journey that only experienced hikers should attempt.',
                'image_url' => url('') . "/images/destinations/snow-lake.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Hunza',
                'description' => 'A particularly unique enclave within Pakistan, Hunza is a famed tourist destination that is undeniably special. This valley is known for being home to multiple 7000-meter peaks, some of the most bizarre geological formations there are to be seen anywhere, and of course, the legendary Karakoram Highway. Hunza has something to offer for everyone, whether thatâ€™s popular, cozy hotels with incredible views, lesser-known hidden gems, smooth highways with unbeatable vistas, and the kindest, most hospitable people in the world. Thereâ€™s always something new to do here, but the crush of tourists can be overwhelming at times, especially at the peak of the summer season. Late August or early September is a great time to visit Hunza if you want smaller crowds with warm weather, but Autumn in Hunza is simply otherworldly.',
                'image_url' => url('') . "/images/destinations/hunza.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Fairy Meadows',
                'description' => 'A starting point for treks leading to the foot of the worldâ€™s ninth-highest mountain, the Fairy Meadows is one of the most strikingly beautiful places on Earth. After an exhilarating jeep ride from Raikot Bridge and a short two-hour hike uphill, youâ€™ll find yourself amongst a bevy of hotels and campsites in a location that looks like itâ€™s straight out of a mythical storybook. The Fairy Meadows is one of the most well-known and popular places to visit in Pakistan, and as such, it has been subject to a spate of rapid development in recent years. New hotels spring up often, and the sound of construction is now a constant presence. This is no longer an off-the-grid destination, but itâ€™s still possible to pay a visit without finding yourself swarmed by tourists. If youâ€™re looking to avoid the crowds, travel in late September or early October. It will be a little colder, but youâ€™ll manage to avoid huge crowds without being exposed to freezing temperatures that might be too much to handle.',
                'image_url' => url('') . "/images/destinations/fairy-meadows.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Kalam Valley Swat',
                'description' => 'One of Pakistanâ€™s renowned tourist destinations, Swat earns its fame with mountainous landscapes, forests, and pristine rivers. Kalam Valley in particular is a common destination for visitors both Pakistani and foreign, and for good reason. Being in Pakistanâ€™s Khyber Pakhtunkhwa province (KPK for short), Kalam has a relatively warm climate for being so mountainous. While the summits arenâ€™t quite as high on average as those youâ€™ll find in Hunza or Skardu, the mountains here are vibrant with deep colors and forests like very few other places in the world are. Because of its comparatively warm climate, Kalam is a destination thatâ€™s far more accessible in all seasons, and you can even explore during winter without having to face the frigid temperatures that more northern regions experience in the coldest months.',
                'image_url' => url('') . "/images/destinations/kalam-valley-swat.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Neelum Valley Kashmir',
                'description' => 'Kashmir is a place that has long captured my imagination, and Neelum Valley in particular is known for its lush, mountainous beauty that has inspired many a traveler. Far from the dry, desert mountain landscapes of Hunza and Skardu, Neelum glows with color, its mountains covered in deep green fields and brilliant wildflowers. The political situation in Kashmir is delicate, as control of the region is divided between India and Pakistan. If you want to enter Pakistan-administered (Azad) Kashmir as a foreigner, you will need to obtain a Non-Objection Certificate from the Pakistani government, and there is no guarantee that getting one is achievable. However, as a Pakistani, simply show your national ID card at a checkpoint and you will be granted entry. Regardless of your country of origin, Kashmir and Neelum Valley canâ€™t be missed if you can find a way to visit.',
                'image_url' => url('') . "/images/destinations/neelum-valley-kashmir.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'title' => 'Deosai National Park',
                'description' => 'Deosai is often referred to as the roof of the world. And it kinda is. At 4,117 metres (13,497 feet), the massive plateau is the second-highest on the planet, and is only really accessible during summer. Sprawling emerald-green meadows, snow-capped peaks and glistening blue lakes greet visitors who make the journey to this beautiful spot. The Himalayan Brown Bear calls Deosai its home and has been spotted by many a visitor – watch out for them if you’re camping! The park charges an entrance fee of 1,000 rupees for foreigners and 40 rupees for Pakistanis.',
                'image_url' => url('') . "/images/destinations/deosai-national-park.jpg",
                'latitude' => ($lang - (rand(0,20) / 1000)),
                'longitude' => ($long - (rand(0,20) / 1000)),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ];
        Destination::insert($data);

        // Testing Dummy Products
        Destination::factory(100)->create();
    }
}
