import Monther from "./monther.jpg";
import Laith from "./laith.jpeg";
import Ashraf from "./ashraf.jpeg";
import Khadeeja from "./khadeeja.jpeg";
import Osama from "./osama.jpeg";
export const getTeamMembers = () => {
  return [
    {
      img: Monther,
      name: "Monther Twaissi",
      location: "Jarash/Jordan",
      title: "All in one 'FSD'",
      description: "The best developer in the world",
      links: [
        {
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/Monther-Twaissi",
        },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/monther-twaissi/",
        },
        {
          icon: "fab fa-github",
          link: "https://www.github.com/Monther-Twaissi",
        },
      ],
    },
    {
      img: Laith,
      name: "Laith Enooz",
      location: "Amman/Jordan",
      title: "Hacker",
      description: "Nothing is invincible for me",
      links: [
        {
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/laith.alenooz.357",
        },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/laith-al-enooz/",
        },
        { icon: "fab fa-github", link: "https://www.github.com/laithalenooz" },
      ],
    },
    {
      img: Ashraf,
      name: "Ashraf Jabari ",
      location: "Amman/Jordan",
      title: "SE",
      description: "Nothing can stop me, I'm all the way up!",
      links: [
        {
          icon: "fab fa-facebook",
          link: "https://web.facebook.com/aha.jaja9696",
        },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/ashraf-aljabari/",
        },
        { icon: "fab fa-github", link: "https://github.com/ashraf-aljabari" },
      ],
    },
    {
      img: Khadeeja,
      name: "Khadeeja Hamdan ",
      location: "Beirut/Lebanon",
      title: "Expert Lead Trainer",
      description: "Up and running!",
      links: [
        {
          icon: "fab fa-facebook",
          link: "https://facebook.com/khadeejahm.hamdan",
        },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/khadeejah-hamdan/",
        },
        { icon: "fab fa-github", link: "https://github.com/khadeejah-hamdan" },
      ],
    },
    {
      img: Osama,
      name: "Osama Aburabie",
      location: "Amman/Jordan",
      title: " Full stack developer in process",
      description: "Mafia Mafia Mafia",
      links: [
        { icon: "fab fa-facebook", link: "#/fb" },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/",
        },
        { icon: "fab fa-github", link: "https://github.com/OsamaAburabie" },
      ],
    },
  ];
};
