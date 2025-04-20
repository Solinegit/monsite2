//fetch the latest earthquake data from the USGS API with this url
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4

interface Earthquake {
  properties: {
    time: number;
    place: string;
    mag: number;
  };
}

class EarthquakeService {
  private async getEarthquakesFromUSGS(): Promise<Earthquake[]> {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4"
    );
    const earthquakejson = await response.json();
    return earthquakejson.features;
  }

  
  async displayEarthquakes() {
    try {
      const earthquakes = await this.getEarthquakesFromUSGS();

      // première ligne à ajouter
      const ul: HTMLUListElement = document.createElement("ul");

      earthquakes.forEach((earthquake) => {
        const date: Date = new Date(earthquake.properties.time);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        };
        const dateString: string = date.toLocaleDateString("fr-FR", options);
        const finalString: string = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
        console.log(finalString);

        // deuxième ligne à ajouter
        const li: HTMLLIElement = document.createElement("li");
        // troisième ligne à ajouter
        li.textContent = finalString;
        // quatrième ligne à ajouter
        ul.appendChild(li);
      });

      // cinquième ligne à ajouter (en dehors de la boucle)
      document.body.appendChild(ul);
      
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données de tremblement de terre :', error);
    }
  }
}




//exercie 2

interface Address {
  city: string;
  postcode: string;
  street: string;
  housenumber: string;
  context: string;
  lat: number;
  lon: number;
}


function transformFeatureToAddress(feature: any): Address {
  const props = feature.properties;
  return {
    city: props.city,
    postcode: props.postcode,
    street: props.street,
    housenumber: props.housenumber,
    context: props.context,
    lat: feature.geometry.coordinates[1], // latitude
    lon: feature.geometry.coordinates[0], // longitude
  };
}


async function fetchAddresses(query: string): Promise<Address[]> {
  const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.features.map(transformFeatureToAddress);
}


interface Address {
  city: string;
  postcode: string;
  street: string;
  housenumber: string;
  context: string;
  lat: number;
  lon: number;
}

export class AddressService {
  async searchAddress(query: string, limit: number): Promise<Address[]> {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`;

    const response = await fetch(url);
    const data = await response.json();

    const addresses: Address[] = data.features.map((feature: any) => {
      const props = feature.properties;
      return {
        city: props.city,
        postcode: props.postcode,
        street: props.street,
        housenumber: props.housenumber,
        context: props.context,
        lat: feature.geometry.coordinates[1],
        lon: feature.geometry.coordinates[0],
      };
    });

    return addresses;
  }
}




