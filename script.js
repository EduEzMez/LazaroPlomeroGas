window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.6037, lng: -58.3816 },
        zoom: 10,
    });

    const areas = [
        { name: "CABA", lat: -34.6037, lng: -58.3816 },
        { name: "Zona Norte", lat: -34.4667, lng: -58.5167 },
        { name: "Zona Sur", lat: -34.7667, lng: -58.3167 },
        { name: "Zona Oeste", lat: -34.6500, lng: -58.6167 },
    ];

    areas.forEach(area => {
        new google.maps.Marker({
            position: { lat: area.lat, lng: area.lng },
            map: map,
            title: area.name,
        });
    });
};