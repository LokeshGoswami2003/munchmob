const fetchLocationData = async (address) => {
    try {
        console.log("fetchAreaData called");

        if (address.length === 0) {
            return null;
        }

        const apiString =
            "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            address +
            "&key=AIzaSyBSg1SK4SAQdw7_MTs1eQ9pEAdPcdbm-m4";

        console.log("google api string is");
        console.log(apiString);

        const data = await fetch(apiString);
        const json = await data.json();

        if (json.results.length === 0) {
            return null;
        }

        const lat = json?.results[0]?.geometry?.location.lat || 0;
        const lng = json?.results[0]?.geometry?.location.lng || 0;
        console.log(
            "the latitude and longitude are : " +
                lat +
                " " +
                lng +
                " respectivly"
        );

        return [lat, lng];
    } catch (e) {
        console.log(e);
    }
};
export default fetchLocationData;
