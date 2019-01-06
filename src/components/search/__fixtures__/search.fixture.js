import SearchResultDropDownLine from '../SearchResultDropDownLine';
import SearchField from '../SearchField';
import SearchResultsDropDown from '../SearchResultsDropDown';
export default [
    {
        component: SearchResultDropDownLine,
        name: 'movie',
        props: {
            result: {
                vote_average: 6.4,
                vote_count: 1537,
                id: 7555,
                video: false,
                media_type: 'movie',
                title: 'Rambo',
                popularity: 14.285,
                poster_path: '/ec1m7YgBYb4os06OSNW3QBaNYqZ.jpg',
                original_language: 'en',
                original_title: 'Rambo',
                genre_ids: [ 28, 53 ],
                backdrop_path: '/mgSMefETH89UnNWMffevxZPKDnO.jpg',
                adult: false,
                overview:
                    "When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action.  Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.",
                release_date: '2008-01-24'
            }
        }
    },
    {
        component: SearchResultDropDownLine,
        name: 'person',
        props: {
            result: {
                popularity: 0.6,
                media_type: 'person',
                id: 140833,
                profile_path: '/3v7wsqiFLUxbvCd3wS9QXR3BrAf.jpg',
                name: 'Dack Rambo',
                known_for: [
                    {
                        original_name: 'Murder, She Wrote',
                        id: 484,
                        media_type: 'tv',
                        name: 'Murder, She Wrote',
                        vote_count: 70,
                        vote_average: 7.01,
                        poster_path: '/j6DC2Xe0SZS6xKS2d6LWL1EGwzX.jpg',
                        first_air_date: '1984-09-30',
                        popularity: 13.604,
                        genre_ids: [ 9648, 80, 18 ],
                        original_language: 'en',
                        backdrop_path: '/5M8bF0BwBk6RtJVrvpS9zj2bcxM.jpg',
                        overview:
                            'An unassuming mystery writer turned sleuth uses her professional insight to help solve real-life homicide cases.',
                        origin_country: [ 'US' ]
                    },
                    {
                        original_name: "Charlie's Angels",
                        id: 3382,
                        media_type: 'tv',
                        name: "Charlie's Angels",
                        vote_count: 55,
                        vote_average: 6.17,
                        poster_path: '/fxIo4qK5nv7G3ymK8xVnOSMklQa.jpg',
                        first_air_date: '1976-09-22',
                        popularity: 13.205,
                        genre_ids: [ 10759 ],
                        original_language: 'en',
                        backdrop_path: '/9G5eEKGznrVG5FaxT4neG0CbgRx.jpg',
                        overview:
                            'Charlie\'s Angels is an American crime drama television series that aired on ABC from September 1976 to June 1981, producing five seasons and 110 episodes. The series was created by Ivan Goff and Ben Roberts and was produced by Aaron Spelling.\n\nIt plotted the adventures of three females working in a private detective agency in Los Angeles, California, and initially starred Kate Jackson, Farrah Fawcett-Majors, and Jaclyn Smith in the leading roles. David Doyle co-starred as a sidekick to the three women and John Forsythe played the voice of their boss. Later additions to the cast included Cheryl Ladd, who entered the series in season two, Shelley Hack, in season four, and Tanya Roberts, in season five.\n\nDespite mixed reviews from critics and a reputation for merely being "Jiggle TV," the show enjoyed an astonishing popularity with audiences, and was a top ten hit for its first few seasons. Because later cast changes were not well-received and the public\'s taste changed, the show concluded a five-year run in the spring of 1981. The series continues to have a cult and pop culture following through syndication, DVD releases, and subsequent film remakes.',
                        origin_country: [ 'US' ]
                    },
                    {
                        original_name: 'Dallas',
                        id: 40,
                        media_type: 'tv',
                        name: 'Dallas',
                        vote_count: 48,
                        vote_average: 6.25,
                        poster_path: '/juEKfVnQEOYUi7CHNlTdfUEe4Eb.jpg',
                        first_air_date: '1978-04-02',
                        popularity: 15.394,
                        genre_ids: [ 10766, 18 ],
                        original_language: 'en',
                        backdrop_path: '/yVCpJou76x0AvHWPBJ7GaioATaj.jpg',
                        overview:
                            'The world\'s first mega-soap, and one of the most popular ever produced, Dallas had it all. Beautiful women, expensive cars, and men playing Monopoly with real buildings. Famous for one of the best cliffhangers in TV history, as the world asked "Who shot J.R.?" A slow-burner to begin with, Dallas hit its stride in the 2nd season, with long storylines and expert character development. Dallas ruled the airwaves in the 1980\'s.',
                        origin_country: [ 'US' ]
                    }
                ],
                adult: false
            }
        }
    },
    {
        component: SearchResultDropDownLine,
        name: 'tv',
        props: {
            result: {
                original_name: 'Modern Family',
                id: 1421,
                media_type: 'tv',
                name: 'Modern Family',
                vote_count: 744,
                vote_average: 7.29,
                poster_path: '/gLAcu4VPCAb90oJvJ4nUJc5ZBQi.jpg',
                first_air_date: '2009-09-23',
                popularity: 46.708,
                genre_ids: [ 35 ],
                original_language: 'en',
                backdrop_path: '/snxFgPvHMcpW5f8Q3wu6uRRycww.jpg',
                overview:
                    'The Pritchett-Dunphy-Tucker clan is a wonderfully large and blended family. They give us an honest and often hilarious look into the sometimes warm, sometimes twisted, embrace of the modern family.',
                origin_country: [ 'US' ]
            }
        }
    },
    {
        component: SearchField,
        name: 'search',
        props: {}
    },
    {
        component: SearchResultsDropDown,
        name: 'rambo',
        props: {
            // results: {
            //   page: 1,
            //   total_results: 69,
            //   total_pages: 4,
            results: [
                {
                    vote_average: 6.4,
                    vote_count: 1537,
                    id: 7555,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo',
                    popularity: 14.285,
                    poster_path: '/ec1m7YgBYb4os06OSNW3QBaNYqZ.jpg',
                    original_language: 'en',
                    original_title: 'Rambo',
                    genre_ids: [ 28, 53 ],
                    backdrop_path: '/mgSMefETH89UnNWMffevxZPKDnO.jpg',
                    adult: false,
                    overview:
                        "When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action.  Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.",
                    release_date: '2008-01-24'
                },
                {
                    vote_average: 5.8,
                    vote_count: 1121,
                    id: 1370,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo III',
                    popularity: 16.579,
                    poster_path: '/gWYfUEkExdr0SLY5L2mjnhKgE4C.jpg',
                    original_language: 'en',
                    original_title: 'Rambo III',
                    genre_ids: [ 28, 12, 53, 10752 ],
                    backdrop_path: '/mx0x96S8ZCXXoSxFinMbyI1117f.jpg',
                    adult: false,
                    overview:
                        "Combat has taken its toll on Rambo, but he's finally begun to find inner peace in a monastery. When Rambo's friend and mentor Col. Trautman asks for his help on a top secret mission to Afghanistan, Rambo declines but must reconsider when Trautman is captured.",
                    release_date: '1988-05-24'
                },
                {
                    original_name: 'Rambo',
                    id: 2762,
                    media_type: 'tv',
                    name: 'Rambo',
                    vote_count: 7,
                    vote_average: 5.71,
                    poster_path: '/6VxKeCxPZBQhfzy4FyixKtxhlbU.jpg',
                    first_air_date: '1986-09-15',
                    popularity: 1.947,
                    genre_ids: [ 10759 ],
                    original_language: 'en',
                    backdrop_path: '/ze8kqr9p1KfGF8JjoCRcSpgZlrN.jpg',
                    overview:
                        "Rambo: The Force of Freedom is an animated series based on the character of John Rambo from David Morrell's book First Blood and the subsequent films First Blood and Rambo: First Blood Part II. This series was adapted for television by story editor/head writer Michael Chain and the series even spawned a toy line. The cartoon ran for 65 episodes, and was produced by Ruby-Spears Enterprises. The series debuted on April 14, 1986 as a five-part miniseries, and was renewed in September as a daily cartoon. Rambo was cancelled in December of the same year.",
                    origin_country: [ 'US' ]
                },
                {
                    vote_average: 6.4,
                    vote_count: 1383,
                    id: 1369,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo: First Blood Part II',
                    popularity: 16.861,
                    poster_path: '/l6zUaYqaQ5TFokesv3BPzBvSN0.jpg',
                    original_language: 'en',
                    original_title: 'Rambo: First Blood Part II',
                    genre_ids: [ 28, 12, 53, 10752 ],
                    backdrop_path: '/2a8Dr2iHznBKjdpXceVRmpxQEgm.jpg',
                    adult: false,
                    overview:
                        "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
                    release_date: '1985-05-21'
                },
                {
                    vote_average: 0,
                    vote_count: 0,
                    id: 458578,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo',
                    popularity: 1.63,
                    poster_path: '/8WHzOXKQBx83tr8ZBYlfttl8YEl.jpg',
                    original_language: 'hi',
                    original_title: 'Rambo',
                    genre_ids: [ 28 ],
                    backdrop_path: null,
                    adult: false,
                    overview:
                        'The action film will follow the last surviving member of an elite covert unit of the Indian Armed forces who returns home to discover a war waging in his own land. Forced into the dangerous jungles and frozen mountains of the Himalayas, he unleashes mayhem and destruction, becoming the unstoppable machine he was trained to be.',
                    release_date: ''
                },
                {
                    vote_average: 7.3,
                    vote_count: 2421,
                    id: 1368,
                    video: false,
                    media_type: 'movie',
                    title: 'First Blood',
                    popularity: 15.922,
                    poster_path: '/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg',
                    original_language: 'en',
                    original_title: 'First Blood',
                    genre_ids: [ 28, 12, 53, 10752 ],
                    backdrop_path: '/cU3goO0TMNDWxgDwILAARyiblXK.jpg',
                    adult: false,
                    overview:
                        'When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats his way into the action-movie hall of fame. Hounded by a relentless sheriff, Rambo employs heavy-handed guerilla tactics to shake the cops off his tail.',
                    release_date: '1982-10-22'
                },
                {
                    vote_average: 0,
                    vote_count: 0,
                    id: 522938,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo 5: Last Blood',
                    popularity: 2.446,
                    poster_path: '/hMyqsyuxE26heCGsBECFgYATIrW.jpg',
                    original_language: 'en',
                    original_title: 'Rambo 5: Last Blood',
                    genre_ids: [ 28 ],
                    backdrop_path: '/46em7NEpnK4ZqkUfhuqQA2NRc0f.jpg',
                    adult: false,
                    overview:
                        'When his housekeeper’s daughter is kidnapped, Rambo crosses the U.S.-Mexican border to bring her home but finds himself up against the full might of one of Mexico’s most ruthless cartels.',
                    release_date: ''
                },
                {
                    vote_average: 0,
                    vote_count: 0,
                    id: 548849,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo 2',
                    popularity: 0.6,
                    poster_path: '/cIXILd4i1SJlnAjKOABWDPX5Jw2.jpg',
                    original_language: 'kn',
                    original_title: 'Rambo 2',
                    genre_ids: [],
                    backdrop_path: null,
                    adult: false,
                    overview:
                        'Mayuri gets kidnapped when she is on a road trip with Krishna and DJ. However, the kidnapper releases her with a message for Krishna.',
                    release_date: '2018-05-16'
                },
                {
                    vote_average: 0,
                    vote_count: 0,
                    id: 334818,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo Zambo',
                    popularity: 0.6,
                    poster_path: null,
                    original_language: 'de',
                    original_title: 'Rambo Zambo',
                    genre_ids: [ 35 ],
                    backdrop_path: null,
                    adult: false,
                    overview: '',
                    release_date: '1984-03-06'
                },
                {
                    vote_average: 6,
                    vote_count: 48,
                    id: 240614,
                    video: false,
                    media_type: 'movie',
                    title: 'R... Rajkumar',
                    popularity: 2.863,
                    poster_path: '/2wURYkClPhuWaZz936eUEWWVzUM.jpg',
                    original_language: 'hi',
                    original_title: 'आर... राजकुमार',
                    genre_ids: [ 28, 10749 ],
                    backdrop_path: '/4FKWDZv2gIPO4kv4dksIdrt6MCY.jpg',
                    adult: false,
                    overview:
                        'Rajkumar, an aimless youth, works for a drug baron and is sent to kill a rival dealer. His life is changed forever when he meets Chanda, and has no idea she is the adopted daughter of the man he is supposed to kill.',
                    release_date: '2013-12-06'
                },
                {
                    vote_average: 6.8,
                    vote_count: 204,
                    id: 13258,
                    video: false,
                    media_type: 'movie',
                    title: 'Son of Rambow',
                    popularity: 5.792,
                    poster_path: '/7rDyK1mCUFxbQcxFHj9c2xumFCp.jpg',
                    original_language: 'en',
                    original_title: 'Son of Rambow',
                    genre_ids: [ 35 ],
                    backdrop_path: '/hvHdbk37JzrP6mW3jAwjjFW7AIZ.jpg',
                    adult: false,
                    overview:
                        'Will Proudfoot (Bill Milner) is looking for an escape from his family\'s stifling home life when he encounters Lee Carter (Will Poulter), the school bully. Armed with a video camera and a copy of "Rambo: First Blood", Lee plans to make cinematic history by filming his own action-packed video epic. Together, these two newfound friends-turned-budding-filmmakers quickly discover that their imaginative ― and sometimes mishap-filled ― cinematic adventure has begun to take on a life of its own!',
                    release_date: '2007-01-22'
                },
                {
                    vote_average: 5,
                    vote_count: 1,
                    id: 298359,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo Tanggo Part III',
                    popularity: 0.625,
                    poster_path: '/vEAxALC4zO1riEVn2mHHOnxqjM3.jpg',
                    original_language: 'en',
                    original_title: 'Rambo Tanggo Part III',
                    genre_ids: [],
                    backdrop_path: null,
                    adult: false,
                    overview: 'Philipino War Movie',
                    release_date: '1984-08-22'
                },
                {
                    vote_average: 7,
                    vote_count: 1,
                    id: 547428,
                    video: false,
                    media_type: 'movie',
                    title: 'Abdo Challenges Rambo',
                    popularity: 0.6,
                    poster_path: '/mZ2xfZzbwA304WyT7dd9P6AuywD.jpg',
                    original_language: 'en',
                    original_title: 'عبده يتحدى رامبو',
                    genre_ids: [],
                    backdrop_path: null,
                    adult: false,
                    overview:
                        "The play revolves around Abdo (Mohammad Najm), who works at Amani (Vivian) in a strange job, to prevent her from interviewing Shaukat (Mahmoud al-Qal'awi) her ex-husband who tries to exploit her and grab her money but does not know how to get away from him even though she knows well his bad intentions . (Abdu) agrees to a physical reward of half a million pounds to prevent her from making mistakes. Abdu tries to prevent her husband from stealing her money because of his strange job.",
                    release_date: '1990-06-13'
                },
                {
                    vote_average: 0,
                    vote_count: 0,
                    id: 465124,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo: New Blood',
                    popularity: 0.6,
                    poster_path: null,
                    original_language: 'en',
                    original_title: 'Rambo: New Blood',
                    genre_ids: [],
                    backdrop_path: null,
                    adult: false,
                    overview:
                        'TV series based on the popular action film series, "Rambo", which starred Sylvester Stallone as a Vietnam Veteran who uses his military training for vigilante justice.',
                    release_date: ''
                },
                {
                    popularity: 0.98,
                    media_type: 'person',
                    id: 1379098,
                    profile_path: '/mA9AqQ7PIDZ3bTJP8oXRwHkiQig.jpg',
                    name: 'Rambo Amadeus',
                    known_for: [
                        {
                            vote_average: 10,
                            vote_count: 1,
                            id: 460141,
                            video: false,
                            media_type: 'movie',
                            title: 'Life According to Moskri',
                            popularity: 1.66,
                            poster_path: '/fJ5O6QhhgYbET57pxyHxTJrk5KG.jpg',
                            original_language: 'sr',
                            original_title: 'Život po Moskriju',
                            genre_ids: [ 35, 10402 ],
                            backdrop_path: '/fTiZ7O8c21ZN3nix17gGYtgtTh0.jpg',
                            adult: false,
                            overview:
                                "The late controversial hip-hopper, the founder of Prti Bee Gee rap group, Davor Bobic Moskri, suddenly returns to the world of the living. He's allowed to return as a 10 year old child, with a goal to win a ticket to paradise, by showing his followers from underground where the motto Hit the pot, win a jackpot leads.",
                            release_date: '2017-06-03'
                        },
                        {
                            vote_average: 5,
                            vote_count: 1,
                            id: 319054,
                            video: false,
                            media_type: 'movie',
                            title: 'Sweet of Dreams',
                            popularity: 0.6,
                            poster_path: '/tXE4ZH5sVfnHGcJUfRZFgL4uhiH.jpg',
                            original_language: 'sr',
                            original_title: 'Slatko od snova',
                            genre_ids: [ 10749, 35, 10402 ],
                            backdrop_path: null,
                            adult: false,
                            overview:
                                'Deni, a young woman working in McDonalds, has dreams of fame. When a producer discovers her singing talent he gets her into the game. However, she soon feels overburdened. Fortunately, the ghost of Elvis is there to help her.',
                            release_date: '1994-04-12'
                        },
                        {
                            vote_average: 6.5,
                            vote_count: 1,
                            id: 76359,
                            video: false,
                            media_type: 'movie',
                            title: 'Boomerang',
                            popularity: 0.6,
                            poster_path: '/2NgfbGiAf9AJahTBZrzaxbbUuK.jpg',
                            original_language: 'en',
                            original_title: 'Boomerang',
                            genre_ids: [ 35 ],
                            backdrop_path: null,
                            adult: false,
                            overview:
                                "Caffe 'Boomerang' is one of Belgrade's many cafes. Seemingly just a backdrop for our cast of crazy characters, but in reality much more than that.",
                            release_date: '2001-09-20'
                        }
                    ],
                    adult: false
                },
                {
                    popularity: 0.98,
                    media_type: 'person',
                    id: 1739844,
                    profile_path: null,
                    name: 'Jackson Rambo',
                    known_for: [
                        {
                            vote_average: 7.4,
                            vote_count: 7085,
                            id: 419430,
                            video: false,
                            media_type: 'movie',
                            title: 'Get Out',
                            popularity: 25.041,
                            poster_path: '/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg',
                            original_language: 'en',
                            original_title: 'Get Out',
                            genre_ids: [ 9648, 53, 27 ],
                            backdrop_path: '/5OlAmzEUaO0A12cM7g5g420w4d7.jpg',
                            adult: false,
                            overview:
                                "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
                            release_date: '2017-02-24'
                        },
                        {
                            vote_average: 6.5,
                            vote_count: 991,
                            id: 449443,
                            video: false,
                            media_type: 'movie',
                            title: 'Den of Thieves',
                            popularity: 28.931,
                            poster_path: '/AfybH6GbGFw1F9bcETe2yu25mIE.jpg',
                            original_language: 'en',
                            original_title: 'Den of Thieves',
                            genre_ids: [ 28, 53, 80 ],
                            backdrop_path: '/s3FDBLH4qc1IcjexB05Qvbn3wxO.jpg',
                            adult: false,
                            overview:
                                'A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff’s Dept. and the state’s most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.',
                            release_date: '2018-01-18'
                        }
                    ],
                    adult: false
                },
                {
                    popularity: 0.98,
                    media_type: 'person',
                    id: 1903116,
                    profile_path: null,
                    name: 'Emilio Rambo',
                    known_for: [
                        {
                            original_name: 'StartUp',
                            id: 66310,
                            media_type: 'tv',
                            name: 'StartUp',
                            vote_count: 46,
                            vote_average: 7.28,
                            poster_path: '/ryRcznOGEEsZvXwELLcIuJNvAcq.jpg',
                            first_air_date: '2016-09-06',
                            popularity: 10.379,
                            genre_ids: [ 80, 18 ],
                            original_language: 'en',
                            backdrop_path: '/zDjhnrp8sZmOpKjAdwfq8P9mBIS.jpg',
                            overview:
                                'A desperate banker needs to conceal stolen money. A Haitian-American gang lord wants to go legit. A Cuban-American hacker has an idea that will revolutionize the very future of money itself. Forced to work together, they unwittingly create their version of the American dream - organized crime 2.0.',
                            origin_country: [ 'US' ]
                        }
                    ],
                    adult: false
                },
                {
                    vote_average: 7,
                    vote_count: 2,
                    id: 208450,
                    video: false,
                    media_type: 'movie',
                    title: 'Rambo: To Hell and Back',
                    popularity: 0.6,
                    poster_path: null,
                    original_language: 'en',
                    original_title: 'Rambo: To Hell and Back',
                    genre_ids: [],
                    backdrop_path: null,
                    adult: false,
                    overview: "83-minute production diary from the set of Sylvester Stallone's RAMBO.",
                    release_date: '2010-07-27'
                },
                {
                    popularity: 0.6,
                    media_type: 'person',
                    id: 140833,
                    profile_path: '/3v7wsqiFLUxbvCd3wS9QXR3BrAf.jpg',
                    name: 'Dack Rambo',
                    known_for: [
                        {
                            original_name: 'Murder, She Wrote',
                            id: 484,
                            media_type: 'tv',
                            name: 'Murder, She Wrote',
                            vote_count: 70,
                            vote_average: 7.01,
                            poster_path: '/j6DC2Xe0SZS6xKS2d6LWL1EGwzX.jpg',
                            first_air_date: '1984-09-30',
                            popularity: 13.604,
                            genre_ids: [ 9648, 80, 18 ],
                            original_language: 'en',
                            backdrop_path: '/5M8bF0BwBk6RtJVrvpS9zj2bcxM.jpg',
                            overview:
                                'An unassuming mystery writer turned sleuth uses her professional insight to help solve real-life homicide cases.',
                            origin_country: [ 'US' ]
                        },
                        {
                            original_name: "Charlie's Angels",
                            id: 3382,
                            media_type: 'tv',
                            name: "Charlie's Angels",
                            vote_count: 55,
                            vote_average: 6.17,
                            poster_path: '/fxIo4qK5nv7G3ymK8xVnOSMklQa.jpg',
                            first_air_date: '1976-09-22',
                            popularity: 13.205,
                            genre_ids: [ 10759 ],
                            original_language: 'en',
                            backdrop_path: '/9G5eEKGznrVG5FaxT4neG0CbgRx.jpg',
                            overview:
                                'Charlie\'s Angels is an American crime drama television series that aired on ABC from September 1976 to June 1981, producing five seasons and 110 episodes. The series was created by Ivan Goff and Ben Roberts and was produced by Aaron Spelling.\n\nIt plotted the adventures of three females working in a private detective agency in Los Angeles, California, and initially starred Kate Jackson, Farrah Fawcett-Majors, and Jaclyn Smith in the leading roles. David Doyle co-starred as a sidekick to the three women and John Forsythe played the voice of their boss. Later additions to the cast included Cheryl Ladd, who entered the series in season two, Shelley Hack, in season four, and Tanya Roberts, in season five.\n\nDespite mixed reviews from critics and a reputation for merely being "Jiggle TV," the show enjoyed an astonishing popularity with audiences, and was a top ten hit for its first few seasons. Because later cast changes were not well-received and the public\'s taste changed, the show concluded a five-year run in the spring of 1981. The series continues to have a cult and pop culture following through syndication, DVD releases, and subsequent film remakes.',
                            origin_country: [ 'US' ]
                        },
                        {
                            original_name: 'Dallas',
                            id: 40,
                            media_type: 'tv',
                            name: 'Dallas',
                            vote_count: 48,
                            vote_average: 6.25,
                            poster_path: '/juEKfVnQEOYUi7CHNlTdfUEe4Eb.jpg',
                            first_air_date: '1978-04-02',
                            popularity: 15.394,
                            genre_ids: [ 10766, 18 ],
                            original_language: 'en',
                            backdrop_path: '/yVCpJou76x0AvHWPBJ7GaioATaj.jpg',
                            overview:
                                'The world\'s first mega-soap, and one of the most popular ever produced, Dallas had it all. Beautiful women, expensive cars, and men playing Monopoly with real buildings. Famous for one of the best cliffhangers in TV history, as the world asked "Who shot J.R.?" A slow-burner to begin with, Dallas hit its stride in the 2nd season, with long storylines and expert character development. Dallas ruled the airwaves in the 1980\'s.',
                            origin_country: [ 'US' ]
                        }
                    ],
                    adult: false
                },
                {
                    popularity: 0.6,
                    media_type: 'person',
                    id: 1240978,
                    profile_path: null,
                    name: 'Dirk Rambo',
                    known_for: [
                        {
                            original_name: 'The New Loretta Young Show',
                            id: 7900,
                            media_type: 'tv',
                            name: 'The New Loretta Young Show',
                            vote_count: 0,
                            vote_average: 0,
                            poster_path: null,
                            first_air_date: '1962-09-24',
                            popularity: 1.342,
                            genre_ids: [ 35, 18 ],
                            original_language: 'en',
                            backdrop_path: null,
                            overview:
                                "The New Loretta Young Show, is an American television series, which aired for twenty-six weekly episodes on CBS television from September 24, 1962 to March 18, 1963, features Loretta Young in a combination drama and situation comedy about a free-lance writer in suburban Connecticut named Christine Massey, the widowed mother of seven children. The program is the only one in which Young starred as a recurring character. Her previous anthology series on NBC placed her in the role of hostess and occasional star. Young is the first star to garner both Academy and Emmy awards, one of a relatively few to make the transition from motion picture to television.\n\nThough it followed the popular The Andy Griffith Show on CBS, The New Loretta Young Show, sponsored by Lever Brothers, proved unable to sustain the needed audience in competition at 10 p.m. Eastern time on Mondays with the ABC medical drama Ben Casey starring Vince Edwards and Sam Jaffe, which entered its second season. NBC fielded David Brinkley's Journal at the same time, reflections of the news correspondent David Brinkley. The New Loretta Young Show was hence quietly dropped at the end of winter in 1963. Young had formed LYL Production Company for the series, an indication that she did not expect a premature end to the program. Norman Foster directed most of the episodes; John London and Ruth Roberts were the producers.",
                            origin_country: [ 'US' ]
                        }
                    ],
                    adult: false
                }
            ]
            //   },
        }
    }
];
