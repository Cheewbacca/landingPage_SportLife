function initMap(){
    var pos = {lat: 50.428778, lng: 30.593402}

    var opt = {
        center: pos,
        zoom: 15,
        disableDefaultUI: true,
    } 

    var myMap = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: 'ТРЦ "Silver Breeze"',
    });

}