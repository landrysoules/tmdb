import Home from '../components/home/Home';
import NavBar from '../components/layout/NavBar';
import FrontPuzzle from '../components/home/FrontPuzzle';
export default [
  {
    component: Home,
    props: {
      loggedIn: true,
      user: {
        name: 'Dan the Man',
      },
    },
  },
  {
    component: NavBar,
    props: {
      loggedIn: true,
      user: {
        name: 'Dan the Man',
      },
    },
  },
  {
    component: FrontPuzzle,
    props: {
      movies: [
        {
          vote_count: 1083,
          id: 338952,
          video: false,
          vote_average: 7.1,
          title: 'Fantastic Beasts: The Crimes of Grindelwald',
          popularity: 304.748,
          poster_path: '/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg',
          original_language: 'en',
          original_title: 'Fantastic Beasts: The Crimes of Grindelwald',
          genre_ids: [10751, 14, 12],
          backdrop_path: '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg',
          adult: false,
          overview:
            'Gellert Grindelwald has escaped imprisonment and has begun gathering followers t' +
            'o his cause—elevating wizards above all non-magical beings. The only one capable' +
            ' of putting a stop to him is the wizard he once called his closest friend, Albus' +
            ' Dumbledore. However, Dumbledore will need to seek help from the wizard who had ' +
            'thwarted Grindelwald once before, his former student Newt Scamander, who agrees ' +
            'to help, unaware of the dangers that lie ahead. Lines are drawn as love and loya' +
            'lty are tested, even among the truest friends and family, in an increasingly div' +
            'ided wizarding world.',
          release_date: '2018-11-14',
        },
        {
          vote_count: 1244,
          id: 424694,
          video: false,
          vote_average: 8.2,
          title: 'Bohemian Rhapsody',
          popularity: 195.665,
          poster_path: '/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
          original_language: 'en',
          original_title: 'Bohemian Rhapsody',
          genre_ids: [18, 10402],
          backdrop_path: '/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg',
          adult: false,
          overview:
            'Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guita' +
            "rist John Deacon take the music world by storm when they form the rock 'n' roll " +
            "band Queen in 1970. Hit songs become instant classics. When Mercury's increasing" +
            'ly wild lifestyle starts to spiral out of control, Queen soon faces its greatest' +
            ' challenge yet – finding a way to keep the band together amid the success and ex' +
            'cess.',
          release_date: '2018-10-24',
        },
        {
          vote_count: 121,
          id: 360920,
          video: false,
          vote_average: 6.2,
          title: 'The Grinch',
          popularity: 167.206,
          poster_path: '/rWQVj6Z8kPdsbt7XPjVBCltxq90.jpg',
          original_language: 'en',
          original_title: 'The Grinch',
          genre_ids: [16, 10751, 35, 14],
          backdrop_path: '/zRDkmww7Bu11wiz2g86RxSreiY4.jpg',
          adult: false,
          overview:
            'The Grinch hatches a scheme to ruin Christmas when the residents of Whoville pla' +
            'n their annual holiday celebration.',
          release_date: '2018-11-08',
        },
      ],
      series: [
        {
          original_name: 'The Flash',
          genre_ids: [18, 10765],
          name: 'The Flash',
          popularity: 191.55,
          origin_country: ['US'],
          vote_count: 2355,
          first_air_date: '2014-10-07',
          backdrop_path: '/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg',
          original_language: 'en',
          id: 60735,
          vote_average: 6.7,
          overview:
            'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen ' +
            'is struck by lightning and falls into a coma. Months later he awakens with the p' +
            'ower of super speed, granting him the ability to move through Central City like ' +
            'an unseen guardian angel. Though initially excited by his newfound powers, Barry' +
            ' is shocked to discover he is not the only "meta-human" who was created in the' +
            ' wake of the accelerator explosion -- and not everyone is using their new powers' +
            ' for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect t' +
            'he innocent. For now, only a few close friends and associates know that Barry is' +
            " literally the fastest man alive, but it won't be long before the world learns w" +
            'hat Barry Allen has become...The Flash.',
          poster_path: '/fki3kBlwJzFp8QohL43g9ReV455.jpg',
        },
        {
          original_name: 'The Walking Dead',
          genre_ids: [18, 10759, 10765],
          name: 'The Walking Dead',
          popularity: 120.894,
          origin_country: ['US'],
          vote_count: 3827,
          first_air_date: '2010-10-31',
          backdrop_path: '/xVzvD5BPAU4HpleFSo8QOdHkndo.jpg',
          original_language: 'en',
          id: 1402,
          vote_average: 7.3,
          overview:
            "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic worl" +
            'd dominated by flesh-eating zombies. He sets out to find his family and encounte' +
            'rs many other survivors along the way.',
          poster_path: '/yn7psGTZsHumHOkLUmYpyrIcA2G.jpg',
        },
        {
          original_name: 'The Simpsons',
          genre_ids: [16, 35],
          name: 'The Simpsons',
          popularity: 108.585,
          origin_country: ['US'],
          vote_count: 1768,
          first_air_date: '1989-12-17',
          backdrop_path: '/lnnrirKFGwFW18GiH3AmuYy40cz.jpg',
          original_language: 'en',
          id: 456,
          vote_average: 7.1,
          overview:
            'Set in Springfield, the average American town, the show focuses on the antics an' +
            'd everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie' +
            ', as well as a virtual cast of thousands. Since the beginning, the series has be' +
            'en a pop culture icon, attracting hundreds of celebrities to guest star. The sho' +
            'w has also made name for itself in its fearless satirical take on politics, medi' +
            'a and American life in general.',
          poster_path: '/yTZQkSsxUFJZJe67IenRM0AEklc.jpg',
        },
      ],
    },
  },
];
