
## Installation
* Clone this repo `git clone https://github.com/muhtarudinsiregar/travelr-express-mongo.git`
* Run command `npm install` or `yarn` to install dependency.
* copy .env.example to .env or `cp .env.example .env`
* setup DB_USERNAME and DB_PASSWORD
* run app with `npm run serve`

## Endpoint
* `POST: place/store`
```
//payload: JSON
{
	"places": [
		{
			"location": "Malioboro Mall",
			"latitude" : "7.66234",
			"longitude" : "110.36739"
		},
		{
			"location": "Taman Pintar",
			"latitude" : "7.66233",
			"longitude" : "110.36739"
		}
	]
}
```

* `GET: place/all`

* `GET: /place/<placeId>/destroy`
```
ex: localhost:3000/place/5bed596bc493902b6eb557a4/destroy
```

* `PUT: /place/<placeId>/update`
```
//payload : location, latitude, longitude
```

* `GET: /place/<placeId>/show`
