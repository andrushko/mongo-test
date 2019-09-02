
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connUri = process.env.MONGO_DEV_CONN_URL;

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const User = require('./User');


module.exports = function seed() {
    

}

function getSeedUsers () {
    return [
    {
        "id": 1,
        "bossid": null,
        "firstName":"Graham",
        "lastName":"Simon",
        "gender":"Male",
        "birthDate":"04-11-1973",
        "userName":"grahamsimon",
        "position": "CEO",
        "email":"ksimon822@nomislladnek.com",
        "avatar": "https://randomuser.me/api/portraits/men/28.jpg",
        "password": "test123",
        "location": {
            "city": "New York", 
            "latitude": 40.7127837, 
            "longitude": -74.0059413, 
            "state": "New York"
        }
    },
    {
        "id": 4,
        "bossid": 2,
        "firstName":"Tessa",
        "lastName":"Wang",
        "gender":"Female",
        "birthDate":"02-10-1968",
        "userName":"tessawang",
        "position": "Head of Marketing team",
        "email":"twang362@gnawasset.net",
        "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
        "password": "test123",
        "location": {
            "city": "Los Angeles", 
            "latitude": 34.0522342, 
            "longitude": -118.2436849, 
            "state": "California"
        }
    },
    {
        "id": 2,
        "bossid": 1,
        "firstName":"Mckenna",
        "lastName":"Perez",
        "gender":"Female",
        "birthDate":"15-03-1986",
        "userName":"mckennaperez",
        "position": "Head of Development team",
        "email":"mperez279@zerepannekcm.org",
        "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
        "password": "test123",
        "location": {
            "city": "Chicago", 
            "latitude": 41.8781136, 
            "longitude": -87.6297982, 
            "state": "Illinois"
        }
    },
    {
        "id": 3,
        "bossid": 1,
        "firstName":"Caleb",
        "lastName":"Hammond",
        "gender":"Male",
        "birthDate":"23-04-1938",
        "userName":"calebhammond",
        "position": "CTO",
        "email":"chammond418@dnommahbelac.com",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        "password": "test123",
        "location": {
            "city": "Houston", 
            "latitude": 29.7604267, 
            "longitude": -95.3698028, 
            "state": "Texas"
        }
    },

    {
        "id": 5,
        "bossid": 2,
        "firstName":"Michele",
        "lastName":"Barker",
        "gender":"Female",
        "birthDate":"20-10-1990",
        "userName":"michelebarker",
        "position": "Head of Advertisement team",
        "email":"mbarker190@rekrabelehcim.org",
        "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
        "password": "test123",
        "location": {
            "city": "Philadelphia", 
            "latitude": 39.9525839, 
            "longitude": -75.1652215, 
            "state": "Pennsylvania"
        }
    },
    {
        "id": 6,
        "bossid": 2,
        "firstName":"Jacob",
        "lastName":"Marshall",
        "gender":"Male",
        "birthDate":"27-10-1956",
        "userName":"jacobmarshall",
        "position": "Head of Accountant team",
        "email":"jmarshall132@llahsrambocaj.biz",
        "avatar": "https://randomuser.me/api/portraits/men/6.jpg",
        "password": "test123",
        "location": {
            "city": "Phoenix", 
            "latitude": 33.4483771, 
            "longitude": -112.0740373, 
            "state": "Arizona"
        }
    },
    {
        "id": 7,
        "bossid": 6,
        "firstName":"Lee",
        "lastName":"Patton",
        "gender":"Male",
        "birthDate":"10-09-1987",
        "userName":"leepatton",
        "position": "Accountant",
        "email":"lpatton141@nottapeel.net",
        "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
        "password": "test123",
        "location": {
            "city": "San Antonio", 
            "latitude": 29.4241219, 
            "longitude": -98.49362819999999, 
            "state": "Texas"
        }
    },
    {
        "id": 8,
        "bossid": 7,
        "firstName":"Randall",
        "lastName":"Jennings",
        "gender":"Male",
        "birthDate":"23-01-1981",
        "userName":"randalljennings",
        "position": "Developer",
        "email":"rjennings122@sgninnejlladnar.org",
        "avatar": "https://randomuser.me/api/portraits/men/8.jpg",
        "password": "test123",
        "location": {
            "city": "San Diego", 
            "latitude": 32.715738, 
            "longitude": -117.1610838, 
            "state": "California"
        }
    },
    {
        "id": 9,
        "bossid": 3,
        "firstName":"Kendall",
        "lastName":"Carlson",
        "gender":"Male",
        "birthDate":"25-02-1994",
        "userName":"kendalcarlson",
        "position": "Developer",
        "email":"gcarlson514@noslracmaharg.net",
        "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
        "password": "test123",
        "location": {
            "city": "Dallas", 
            "latitude": 32.7766642, 
            "longitude": -96.79698789999999, 
            "state": "Texas"
        }
    },
    {
        "id": 10,
        "bossid": 1,
        "firstName":"Ruben",
        "lastName":"Ortiz",
        "gender":"Male",
        "birthDate":"05-05-1982",
        "userName":"rubenortiz",
        "position": "Backend Developer",
        "email":"rortiz324@zitronebur.net",
        "avatar": "https://randomuser.me/api/portraits/men/10.jpg",
        "password": "test123",
        "location": {
            "city": "San Jose", 
            "latitude": 37.3382082, 
            "longitude": -121.8863286, 
            "state": "California"
        }
    },
    {
        "id": 11,
        "bossid": 6,
        "firstName":"Lisa",
        "lastName":"Lyons",
        "gender":"Female",
        "birthDate":"12-06-1979",
        "userName":"lisalyons",
        "position": "Frontend Developer",
        "email":"llyons20@snoylasil.org",
        "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
        "password": "test123",
        "location": {
            "city": "Austin", 
            "latitude": 30.267153, 
            "longitude": -97.7430608, 
            "state": "Texas"
        }
    },
    {
        "id": 12,
        "bossid": 5,
        "firstName":"Liliana",
        "lastName":"Vazquez",
        "gender":"Female",
        "birthDate":"21-06-1979",
        "userName":"lilianavazquez",
        "position": "Developer",
        "email":"lvazquez182@zeuqzavanailil.com",
        "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
        "password": "test123",
        "location": {
            "city": "Indianapolis", 
            "latitude": 39.768403, 
            "longitude": -86.158068, 
            "state": "Indiana"
        }
    },
    {
        "id": 14,
        "bossid": 1,
        "firstName":"Julius",
        "lastName":"Price",
        "gender":"Male",
        "birthDate":"02-04-1989",
        "userName":"juliusprice",
        "position": "DevOps",
        "email":"jprice872@ecirpsuiluj.biz",
        "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
        "password": "test123",
        "location": {
            "city": "San Francisco", 
            "latitude": 37.7749295, 
            "longitude": -122.4194155, 
            "state": "California"
        }
    },
    {
        "id": 15,
        "bossid": 4,
        "firstName":"Nicolas",
        "lastName":"Peterson",
        "gender":"Male",
        "birthDate":"10-03-1981",
        "userName":"nicolaspeterson",
        "position": "Developer",
        "email":"npeterson138@nosretepsalocin.biz",
        "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
        "password": "test123",
        "location": {
            "city": "Columbus", 
            "latitude": 39.9611755, 
            "longitude": -82.99879419999999, 
            "state": "Ohio"
        }
    },
    {
        "id": 16,
        "bossid": 4,
        "firstName":"Makayla",
        "lastName":"Jensen",
        "gender":"Female",
        "birthDate":"21-07-1984",
        "userName":"makaylajensen",
        "position": "Manager",
        "email":"mjensen591@nesnejalyakam.biz",
        "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
        "password": "test123",
        "location": {
            "city": "Detroit", 
            "latitude": 42.331427, 
            "longitude": -83.0457538, 
            "state": "Michigan"
        }
    },
    {
        "id": 17,
        "bossid": 4,
        "firstName":"Davis",
        "lastName":"Le",
        "gender":"Male",
        "birthDate":"15-04-1979",
        "userName":"davisle",
        "position": "Manager",
        "email":"dle610@elsivad.org",
        "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
        "password": "test123",
        "location": {
            "city": "El Paso", 
            "latitude": 31.7775757, 
            "longitude": -106.4424559, 
            "state": "Texas"
        }
    },
    {
        "id": 18,
        "bossid": 4,
        "firstName":"Thomas",
        "lastName":"Perry",
        "gender":"Male",
        "birthDate":"27-10-1985",
        "userName":"thomasperry",
        "position": "Manager",
        "email":"tperry645@yrrepsamoht.biz",
        "avatar": "https://randomuser.me/api/portraits/men/18.jpg",
        "password": "test123",
        "location": {
            "city": "Memphis", 
            "latitude": 35.1495343, 
            "longitude": -90.0489801, 
            "state": "Tennessee"
        }
    },
    {
        "id": 19,
        "bossid": 4,
        "firstName":"Asia",
        "lastName":"Rodriguez",
        "gender":"Female",
        "birthDate":"03-07-1983",
        "userName":"asiarodriguez",
        "position": "Designer",
        "email":"arodriguez488@zeugirdoraisa.org",
        "avatar": "https://randomuser.me/api/portraits/women/19.jpg",
        "password": "test123",
        "location": {
            "city": "Seattle", 
            "latitude": 47.6062095, 
            "longitude": -122.3320708, 
            "state": "Washington"
        }
    },
    {
        "id": 20,
        "bossid": 4,
        "firstName":"Sophia",
        "lastName":"Nunez",
        "gender":"Female",
        "birthDate":"09-06-1992",
        "userName":"sophianunez",
        "position": "Designer",
        "email":"snunez403@zenunaihpos.net",
        "avatar": "https://randomuser.me/api/portraits/women/20.jpg",
        "password": "test123",
        "location": {
            "city": "Washington", 
            "latitude": 38.9071923, 
            "longitude": -77.0368707, 
            "state": "District of Columbia"
        }
    },
    {
        "id": 21,
        "bossid": 4,
        "firstName":"Viktoria",
        "lastName":"Sanches",
        "gender":"Female",
        "birthDate":"19-01-1988",
        "userName":"viktoriasanches",
        "position": "Designer",
        "email":"vsanches_91@mail.net",
        "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
        "password": "test123",
        "location": {
            "city": "Boston", 
            "latitude": 42.3600825, 
            "longitude": -71.0588801, 
            "state": "Massachusetts"
        }
    },
    {
        "id": 22,
        "bossid": 1,
        "firstName":"Jack",
        "lastName":"Wilsons",
        "gender":"Male",
        "birthDate":"19-01-1978",
        "userName":"jackwilsons",
        "position": "UI/UX developer",
        "email":"jackwilsons@exmail.net",
        "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
        "password": "test123",
        "location": {
            "city": "Boston", 
            "latitude": 42.3600825, 
            "longitude": -71.0588801, 
            "state": "Massachusetts"
        }
    }
]
};