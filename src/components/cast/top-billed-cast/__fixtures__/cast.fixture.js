import CastCard from '../CastCard';
import TopBilledCast from '../TopBilledCast';
export default [
  {
    component: CastCard,
    name: 'Cast card',
    props: {
      cast: {
        cast_id: 11,
        character: 'Hester Shaw',
        credit_id: '58a9db609251411503000414',
        gender: 1,
        id: 586286,
        name: 'Hera Hilmar',
        order: 0,
        profile_path: '/hUgQJYayUWt3zON9COn0f7RVJxF.jpg',
      },
    },
  },
  {
    component: TopBilledCast,
    name: 'Cast cards in movie credits',
    props: {
      cast: [
        {
          cast_id: 4,
          character:
            'Kevin Wendell Crumb / The Horde / The Beast / Patricia / Dennis / Hedwig / Barry / Jade / Orwell / Heinrich / Norma',
          credit_id: '5900cbdbc3a3680fcc00de6d',
          gender: 2,
          id: 5530,
          name: 'James McAvoy',
          order: 0,
          profile_path: '/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg',
        },
        {
          cast_id: 0,
          character: 'David Dunn / The Overseer',
          credit_id: '58e2c83c92514179de004823',
          gender: 2,
          id: 62,
          name: 'Bruce Willis',
          order: 1,
          profile_path: '/kI1OluWhLJk3pnR19VjOfABpnTY.jpg',
        },
        {
          cast_id: 5,
          character: 'Elijah Price / Mr. Glass',
          credit_id: '5900cbff92514161c600dbe2',
          gender: 2,
          id: 2231,
          name: 'Samuel L. Jackson',
          order: 2,
          profile_path: '/mXN4Gw9tZJVKrLJHde2IcUHmV3P.jpg',
        },
        {
          cast_id: 6,
          character: 'Casey Cooke',
          credit_id: '5900cc2f92514161e800db6b',
          gender: 1,
          id: 1397778,
          name: 'Anya Taylor-Joy',
          order: 3,
          profile_path: '/v2EH3lNF9d5wmsq8B4l3EKl0sC.jpg',
        },
        {
          cast_id: 8,
          character: 'Dr. Ellie Staple',
          credit_id: '59761d1792514157f70330c4',
          gender: 1,
          id: 34490,
          name: 'Sarah Paulson',
          order: 4,
          profile_path: '/jkhpv4oPNcMSvPPDUuCyPIFwYyS.jpg',
        },
      ],
    },
  },
];
